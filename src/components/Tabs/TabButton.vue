<template>
    <div v-if="isActive" class="ay-tabs__content">
        <slot />
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent, toRefs, watch, onUnmounted } from 'vue';

/**
 * Internal dependencies.
 */
import { TabLayout } from '@/components/Tabs/TabsTypes';
import useTabsInjector from '@/components/Tabs/composables/useTabsInjector';

export default defineComponent({
    name: 'TabButton',

    props: {
        name: {
            type: String,
            required: true,
        },

        label: {
            type: String,
            default: () => '',
        },

        badgeText: {
            type: [String, Number],
            default: () => null,
        },
    },

    setup(props) {
        const { name, label, badgeText } = toRefs(props);
        const { isTabActive, updateTab, registerTab, deregisterTab } = useTabsInjector();

        watch(
            [name, label, badgeText],
            ([newName, newLabel, newBadgeText], [oldName]) => {
                if (newName && oldName) {
                    updateTab(oldName, newName, { label: newLabel, badgeText: newBadgeText });

                    return;
                }

                registerTab(newName, { type: TabLayout.BUTTON, label: newLabel, badgeText: newBadgeText });
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
