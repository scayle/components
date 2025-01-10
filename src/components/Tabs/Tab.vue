<template>
    <div v-if="isActive" class="ay-tabs__content">
        <slot />
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent, onUnmounted, toRefs, watch } from 'vue';

/**
 * Internal dependencies.
 */
import useTabsInjector from '@/components/Tabs/composables/useTabsInjector';
import { TabLayout } from '@/components/Tabs/TabsTypes';

export default defineComponent({
    name: 'Tab',

    props: {
        name: {
            type: String,
            required: true,
        },

        label: {
            type: String,
            default: () => '',
        },
    },

    setup(props) {
        const { name, label } = toRefs(props);
        const { isTabActive, updateTab, registerTab, deregisterTab } = useTabsInjector();

        watch(
            [name, label],
            ([newName, newLabel], [oldName]) => {
                if (newName && oldName) {
                    updateTab(oldName, newName, { label: newLabel });

                    return;
                }

                registerTab(newName, { type: TabLayout.SIMPLE, label: newLabel });
            },
            { immediate: true }
        );

        onUnmounted(() => {
            deregisterTab(name.value);
        });

        return {
            isActive: isTabActive(name),
        };
    },
});
</script>
