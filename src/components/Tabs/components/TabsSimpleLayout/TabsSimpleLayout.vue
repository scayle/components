<template>
    <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ 'ay-tabs__tab--active': tab.isActive }"
        class="ay-tabs__tab"
        @click.prevent="$emit('click', tab.name)"
    >
        <h6 class="ay-tabs__tab-title">
            {{ tab.options?.label || tab.name }}
        </h6>
    </div>

    <div ref="indicatorEl" class="ay-tabs__indicator" />
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { PropType, Ref } from 'vue';
import { nextTick, toRefs, watch, defineComponent, ref, getCurrentInstance } from 'vue';

/**
 * Internal dependencies.
 */
import type { Tabs } from '@/components/Tabs/TabsTypes';

export default defineComponent({
    name: 'TabsSimpleLayout',

    props: {
        tabs: {
            type: Array as PropType<Tabs>,
            required: true,
        },
    },

    emits: {
        click(_tabName: string) {
            return true;
        },
    },

    setup(props) {
        const component = getCurrentInstance();
        const indicatorEl: Ref<HTMLDivElement | null> = ref(null);
        const { tabs } = toRefs(props);
        const updateIndicator = async () => {
            // wait for the UI to reflect changes
            await nextTick();
            const tabsEl = component?.parent?.refs?.tabsEl as HTMLElement | null;

            if (!indicatorEl.value || !tabsEl) {
                return;
            }

            const activeTab = tabsEl.querySelector('.ay-tabs__tab--active') as HTMLDivElement | null;

            if (!activeTab) {
                return;
            }

            const boundingRect = activeTab.getBoundingClientRect();

            indicatorEl.value.style.transform = `translateX(${activeTab.offsetLeft}px)`;
            indicatorEl.value.style.width = `${boundingRect.width}px`;
        };

        watch(tabs, updateIndicator, { immediate: true });

        return {
            indicatorEl,
        };
    },
});
</script>
