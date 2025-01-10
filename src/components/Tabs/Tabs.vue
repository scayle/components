<template>
    <div ref="tabsEl" :class="tabsModifierClass" class="ay-tabs">
        <div v-if="canDisplayTabHeader" class="ay-tabs__header">
            <component :is="tabLayout" :tabs="tabs" @click="onTabClick" />
        </div>

        <slot />
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { computed, type Ref } from 'vue';
import { ref, nextTick, watch, defineComponent, onMounted, toRefs } from 'vue';

/**
 * Internal dependencies.
 */
import './styles/Tabs.css';
import { TabLayout } from '@/components/Tabs/TabsTypes';
import useTabsProvider from '@/components/Tabs/composables/useTabsProvider';
import TabsSimpleLayout from '@/components/Tabs/components/TabsSimpleLayout/TabsSimpleLayout.vue';
import TabsButtonLayout from '@/components/Tabs/components/TabsButtonLayout/TabsButtonLayout.vue';

export default defineComponent({
    name: 'Tabs',
    components: { TabsButtonLayout, TabsSimpleLayout },

    props: {
        /**
         * Set the tab that you want to be active.
         */
        selectedTab: {
            type: String,
            default: null,
        },

        hideOnSingleTab: {
            type: Boolean,
            default: false,
        },
    },

    emits: {
        click(_name: string) {
            return true;
        },
    },

    setup(props, { emit }) {
        const tabsEl: Ref<HTMLDivElement | null> = ref(null);
        const indicatorEl: Ref<HTMLDivElement | null> = ref(null);
        const { selectedTab, hideOnSingleTab } = toRefs(props);
        const { tabs, tabsType, setActiveTab } = useTabsProvider({
            selectedTab,
        });
        const canDisplayTabHeader = computed(() => {
            if (!tabs.value.length) {
                return false;
            }

            if (tabs.value.length === 1 && hideOnSingleTab.value) {
                return false;
            }

            return true;
        });
        const onTabClick = (name: string) => {
            setActiveTab(name);
            emit('click', name);
        };
        const updateIndicator = async () => {
            // wait for the UI to reflect changes
            await nextTick();

            if (!indicatorEl.value || !tabsEl.value) {
                return;
            }

            const activeTab = tabsEl.value.querySelector('.ay-tabs__tab--active') as HTMLDivElement | null;

            if (!activeTab) {
                return;
            }

            const boundingRect = activeTab.getBoundingClientRect();

            indicatorEl.value.style.transform = `translateX(${activeTab.offsetLeft}px)`;
            indicatorEl.value.style.width = `${boundingRect.width}px`;
        };

        watch(tabs, updateIndicator);
        onMounted(updateIndicator);

        return {
            tabs,
            tabsEl,
            tabsType,
            onTabClick,
            indicatorEl,
            canDisplayTabHeader,
            tabLayout: computed(() => {
                const component = {
                    [TabLayout.SIMPLE]: TabsSimpleLayout,
                    [TabLayout.BUTTON]: TabsButtonLayout,
                };

                return component[tabsType.value] || TabsSimpleLayout;
            }),
            tabsModifierClass: computed(() => {
                const classes = {
                    [TabLayout.SIMPLE]: 'ay-tabs--type-simple',
                    [TabLayout.BUTTON]: 'ay-tabs--type-button',
                };

                return classes[tabsType.value] || '';
            }),
        };
    },
});
</script>
