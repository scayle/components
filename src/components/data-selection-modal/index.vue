<template>
    <ModalTemplate class="w-full max-w-4xl" :visible="visible" @update:visible="emit('update:visible', $event)">
        <div class="ay-modal__header">
            <span class="ay-modal__header-title !font-medium">
                {{ title }}
            </span>
            <IconPanelClose class="ay-modal__close-btn" @click="emit('update:visible', false)" />
        </div>
        <Spinner v-if="loading" class="my-8 py-8" />
        <div v-else class="grid grid-cols-4">
            <!-- left side - sidebar category filters -->
            <div class="col-span-1 border-r p-5">
                <CategoryItem
                    v-if="favoritesEnabled"
                    :category="sidebarFavorite"
                    :class="{ 'active text-primary': sidebarFavorite.value === activeCategory }"
                    @click="changeCategory(sidebarFavorite.value)"
                />

                <CategoryItem
                    :category="sidebarAllResults"
                    :class="{ 'active text-primary': sidebarAllResults.value === activeCategory }"
                    @click="changeCategory(sidebarAllResults.value)"
                />

                <CategoryItem
                    v-for="(item, index) in sidebarMenuItems"
                    :key="`menu-item-${index}`"
                    :category="item"
                    :class="{ 'active text-primary': item.value === activeCategory }"
                    @click="changeCategory(item.value)"
                />
            </div>

            <!-- right side - main content -->
            <div class="col-span-3 p-5 pb-0">
                <!-- header with search and title -->
                <ListHeader v-model="search" :title="sectionTitle" class="mb-5" />

                <div class="content-wrapper overflow-y-scroll pr-5">
                    <!-- empty state when search and filter are applied -->
                    <EmptyState
                        v-if="isEmptyList"
                        :text-title="t('search.empty-state.title')"
                        :text-hint="t('search.empty-state.hint')"
                    />

                    <!-- list of categories  -->
                    <div
                        v-for="(groupItem, index) in filteredItems"
                        :key="`list-item-selection-group-${index}-${groupItem.value}`"
                    >
                        <!-- category title  -->
                        <h5 v-if="sectionTitle !== groupItem.label" class="mb-4">
                            {{ groupItem.label }}
                        </h5>

                        <!-- list of items inside category  -->
                        <div v-if="groupItem.items?.length" class="grid mb-10 grid-cols-3 gap-3">
                            <ListItem
                                v-for="(item, childIndex) in groupItem.items"
                                :key="`list-item-selection-child-${childIndex}-${item.value}-${groupItem.value}`"
                                :item="item"
                                :can-be-saved-as-favorite="favoritesEnabled"
                                @click="submitAction(item.value)"
                                @set-is-favorite="toggleFavourite"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ay-modal__footer">
            <span class="btn" @click="emit('update:visible')">{{ t('modal.cancel') }}</span>
        </div>
    </ModalTemplate>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref, type PropType } from 'vue';
import IconPanelListView from '~icons/panel/list-view';
import IconPanelStar from '~icons/panel/star';
import EmptyState from '../EmptyState/EmptyState.vue';
import Spinner from '../Spinner/Spinner.vue';
import ModalTemplate from '../Modal/components/ModalTemplate/ModalTemplate.vue';
import CategoryItem from './CategoryItem.vue';
import ListItem from './ListItem.vue';
import ListHeader from './ListHeader.vue';
import helpers from './helper';
import useTranslation from '@/composables/useTranslation';

export type DataSelectionModalItem = {
    value: string;
    label: string;
    description: string;
    isFavorite?: boolean;
};

export type DataSelectionModalGroup = {
    value: string;
    label: string;
    icon: Function;
    items: DataSelectionModalItem[];
};

const props = defineProps({
    /**
     * For an example of entry source format, see:
     * @see module:import-types-list
     */
    itemsForSelection: {
        type: Array as PropType<DataSelectionModalGroup[]>,
        default: () => [],
    },
    visible: {
        type: Boolean,
    },
    title: {
        type: String,
        default: '',
    },
    allItemsTitle: {
        type: String,
        default: '',
    },
    loading: {
        type: Boolean,
        default: false,
    },
    favoritesEnabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:visible', 'submitAction', 'toggleFavourite']);

const { t } = useTranslation();

const search = ref('');
const activeCategory = ref('all');

const sidebarFavorite = computed(() => {
    return {
        value: 'favorites',
        label: t('favorites'),
        icon: IconPanelStar,
        items: [],
        itemsCount: props.itemsForSelection.reduce((count, group) => {
            return count + group.items.filter(item => item.isFavorite).length;
        }, 0),
    };
});

const totalItemsCount = computed(() => {
    // return the total items count for the first item (all results)
    return props.itemsForSelection.reduce((acc: number, item: any) => {
        return acc + (item.items?.length || 0);
    }, 0);
});

const sidebarAllResults = computed(() => {
    return {
        label: props.allItemsTitle,
        icon: IconPanelListView,
        iconClass: 'p-0.5',
        value: 'all',
        itemsCount: totalItemsCount.value,
    };
});

const sidebarMenuItems = computed(() => {
    return props.itemsForSelection.map(item => {
        return {
            ...item,
            label: item.label,
            itemsCount: item.items?.length || 0,
            items:
                item.items?.map((childItem: any) => {
                    return {
                        ...childItem,
                        icon: item.icon,
                    };
                }) || [],
        };
    });
});

const showFavouritesOnly = computed(() => {
    return activeCategory.value === sidebarFavorite.value.value;
});

const filteredItems = computed(() => {
    // search by category and searchQuery
    const searchedData = helpers.searchCategoryFilter(sidebarMenuItems.value, search.value, showFavouritesOnly.value);

    // if no category or "favourites" category is selected, return the searched data
    if (activeCategory.value === sidebarAllResults.value.value || showFavouritesOnly.value) {
        return searchedData;
    }

    // otherwise, return only the selected category
    return searchedData.filter((item: any) => item.value === activeCategory.value) || [];
});

const sectionTitle = computed(() => {
    if (activeCategory.value === sidebarFavorite.value.value) {
        return sidebarFavorite.value.label;
    }

    if (activeCategory.value === sidebarAllResults.value.value) {
        return sidebarAllResults.value.label;
    }

    const selectedItem = sidebarMenuItems.value.find((item: any) => item.value === activeCategory.value);
    return selectedItem?.label;
});

const isEmptyList = computed(() => {
    // if search is applied and nothing was found, show the empty state
    if (!filteredItems.value.length) {
        return true;
    }

    const filteredCount = filteredItems.value.reduce((acc: number, item: any) => {
        return acc + (item.items?.length || 0);
    }, 0);

    return !filteredCount;
});

const submitAction = (value: any) => {
    emit('submitAction', value);
    emit('update:visible');
};

const toggleFavourite = async (value: any, isFavorite: boolean) => {
    emit('toggleFavourite', { value, isFavorite });
};

const setActiveCategory = () => {
    // if there are no favorites, leave "all items" tab active
    if (!props.favoritesEnabled) {
        return;
    }

    // if there are favorites, make the "favorites" tab active
    activeCategory.value = sidebarFavorite.value.value;
};

const changeCategory = (category: any) => {
    activeCategory.value = category;
    search.value = '';
};

onBeforeMount(() => {
    setActiveCategory();
});
</script>

<style scoped>
.content-wrapper {
    /* 95vh (estimated/safe window height without browser tools)
    - 10vh (top margin of modal)
    - 50px (bottom margin of modal)
    - 120px (modal header + footer heights)
    - 80px (search bar + header height)*/
    height: calc(95vh - 10vh - 50px - 120px - 80px);
    width: calc(100% + 20px);
}
</style>
