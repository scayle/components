/**
 * External dependencies.
 */
import { ref, computed, defineComponent } from 'vue';
import { faker } from '@faker-js/faker';
import IconStar from '~icons/panel/star';
import IconMore from '~icons/panel/more';
import IconCopy from '~icons/panel/copy';
import IconBasket from '~icons/panel/basket';
import IconStarFill from '~icons/panel/star-fill';

/**
 * Internal dependencies.
 */
import Badge from '../Badges/Badge.vue';
import Dropdown from '../Dropdown/Dropdown.vue';
import DropdownMenu from '../Dropdown/DropdownMenu.vue';
import DropdownItem from '../Dropdown/DropdownItem.vue';
import SearchInput from '../SearchInput/SearchInput.vue';
import AppHeader from '../AppHeader/AppHeader.vue';
import EntityTab from './EntityTab.vue';
import EntityContainer from './EntityContainer.vue';
import EntityList from './EntityList/EntityList.vue';
import EntityListItem from './EntityListItem/EntityListItem.vue';
import EntityListItemAvatar from './EntityListItem/EntityListItemAvatar.vue';
import EntityListItemContent from './EntityListItem/EntityListItemContent.vue';
import EntityListItemKeyValue from './EntityListItem/EntityListItemKeyValue.vue';
import EntityListItemBadges from './EntityListItem/EntityListItemBadges.vue';
import EntityListItemActions from './EntityListItem/EntityListItemActions.vue';

import readme from './README.md';

export default {
    title: 'Components/EntityListing',
    component: EntityContainer,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
};

const EntityTabHelper = defineComponent({
    components: {
        Badge,
        IconStar,
        IconBasket,
        IconMore,
        IconCopy,
        IconStarFill,
        Dropdown,
        EntityTab,
        EntityList,
        DropdownItem,
        DropdownMenu,
        EntityListItem,
        EntityListItemBadges,
        EntityListItemAvatar,
        EntityListItemContent,
        EntityListItemActions,
        EntityListItemKeyValue,
    },

    props: {
        name: {
            type: String,
            default: '',
        },

        label: {
            type: String,
            default: '',
        },

        title: {
            type: String,
            default: '',
        },

        shops: {
            type: Array,
            default: () => [],
        },

        hasFavorites: {
            type: Boolean,
            default: false,
        },

        favorites: {
            type: Array,
            default: () => [],
        },

        loading: {
            type: Boolean,
            default: false,
        },

        hasMore: {
            type: Boolean,
            default: false,
        },
    },

    setup(props) {
        const inFavorites = (shop: any) => {
            const foundIndex = props.favorites.findIndex((s: any) => s.id === shop.id);

            return foundIndex >= 0;
        };

        return {
            inFavorites,
        };
    },

    template: `
        <EntityTab :name="name" :tab-label="label" :badge-text="shops.length">
            <template #header>
              <h4>{{ title }} {{ shops.length }}</h4>
            </template>

            <EntityList v-if="shops.length" :loading="loading" :can-load-more="hasMore" @load-more="$emit('load-more')">
              <EntityListItem :key="shop.id" v-for="shop in shops">
                  <EntityListItemAvatar :title="shop.title" :subtitle="shop.subtitle" :avatar-initials="shop.initials" />
                  <EntityListItemContent>
                      <EntityListItemKeyValue label="ID" :value="shop.id"/>
                      <EntityListItemKeyValue label="key" :value="shop.key"/>
                  </EntityListItemContent>

                  <EntityListItemBadges>
                      <Badge v-if="!shop.isActive" label="Closed" type="danger"/>
                      <Badge v-else label="Active"/>

                      <Badge v-if="shop.isShared" label="Shared Tree" type="secondary"/>
                  </EntityListItemBadges>

                  <EntityListItemActions>
                      <button v-if="hasFavorites" class="p-2" type="button" @click.prevent.stop="$emit('favorite', shop)">
                          <IconStarFill v-if="inFavorites(shop)" class="icon text-yellow"/>
                          <IconStar v-else class="icon text-secondary"/>
                      </button>

                      <Dropdown trigger="click">
                          <button class="p-2" type="button">
                              <IconMore class="icon text-dark-grey"/>
                          </button>

                          <template #dropdown="{ onClick }">
                              <DropdownMenu>
                                  <DropdownItem>
                                      <IconCopy class="icon icon-sm" />
                                      <span class="icon-label">Copy</span>
                                  </DropdownItem>
                              </DropdownMenu>
                          </template>
                      </Dropdown>
                  </EntityListItemActions>
              </EntityListItem>
            </EntityList>

            <div v-else class="flex flex-col items-center py-8 m-0 text-center">
                <IconBasket class="icon icon-xl mb-2 w-full text-primary"/>
                <h4>No Shops</h4>
            </div>
        </EntityTab>
    `,
});

const generateShop = () => ({
    title: `Shop ${faker.datatype.number()}`,
    subtitle: faker.datatype.number() + ' Products',
    initials: faker.name.firstName().slice(0, 3),
    id: faker.database.mongodbObjectId(),
    key: faker.word.adverb(),
    isShared: faker.datatype.boolean(),
});

const generateShops = (count = 3, modifier = shop => shop) => {
    return Array.from({ length: count }).map(() => modifier(generateShop()));
};

const Template = (args: any) => ({
    components: {
        SearchInput,
        AppHeader,
        EntityTabHelper,
        EntityContainer,
    },

    setup() {
        const shops = ref(generateShops(50, shop => ({ ...shop, isActive: faker.datatype.boolean() })));
        const activeShops = computed(() => shops.value.filter(shop => shop.isActive));
        const inactiveShops = computed(() => shops.value.filter(shop => !shop.isActive));
        const favorites = ref([]);
        const search = ref('');
        const isLoadingMoreShops = ref(false);

        const inFavorites = (shop: any) => {
            const foundIndex = favorites.value.findIndex(s => s.id === shop.id);

            return foundIndex >= 0;
        };

        const foundShops = computed(() => {
            if (!search.value) {
                return [];
            }

            return shops.value.filter(shop => shop.title.includes(search.value));
        });

        const toggleFavorite = (shop: any) => {
            if (inFavorites(shop)) {
                favorites.value = favorites.value.filter(s => s.id !== shop.id);

                return;
            }

            favorites.value.push(shop);
        };

        const loadMoreActiveShops = () => {
            if (isLoadingMoreShops.value) {
                return;
            }

            isLoadingMoreShops.value = true;

            setTimeout(() => {
                shops.value = [...shops.value, ...generateShops(10, shop => ({ ...shop, isActive: true }))];
                isLoadingMoreShops.value = false;
            }, 3000);
        };

        return {
            args,
            search,
            activeShops,
            inactiveShops,
            favorites,
            toggleFavorite,
            inFavorites,
            foundShops,
            isLoadingMoreShops,
            loadMoreActiveShops,
        };
    },

    template: `<EntityContainer v-bind="args" default-tab="active-shops">
        <template #before-tabs>
            <AppHeader title="Entity List">
                <div class="flex self-center mis-auto">
                    <SearchInput v-model="search" size="small" />

                    <button class="ay-entity-container__button">+ New</button>
                </div>
            </AppHeader>
        </template>

        <template v-if="search.length <= 0">
            <EntityTabHelper
                name="favorites"
                title="Favorites"
                label="Favorites"
                :shops="favorites"
            />

            <EntityTabHelper
                has-favorites
                has-more
                name="active-shops"
                label="Active Shops"
                title="Active Shops"
                :shops="activeShops"
                :favorites="favorites"
                :loading="isLoadingMoreShops"
                @load-more="loadMoreActiveShops"
                @favorite="toggleFavorite"
            />

            <EntityTabHelper
                has-favorites
                name="inactive-shops"
                title="Inactive Shops"
                label="Inactive Shops"
                :shops="inactiveShops"
                :favorites="favorites"
                @favorite="toggleFavorite"
            />
        </template>

        <template v-else>
            <EntityTabHelper
                has-favorites
                name="search"
                label="Search"
                title="Search"
                :shops="foundShops"
                :favorites="favorites"
                @favorite="toggleFavorite"
            />
        </template>
    </EntityContainer>`,
});

export const Default = Template.bind({});

Default.args = {
    title: '',
};
