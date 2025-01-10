<template>
    <div class="ay-tabs__tab-button-container ay-btn-group">
        <button
            v-for="tab in tabs"
            :key="tab.name"
            :class="{ 'ay-tabs__tab--active': tab.isActive }"
            class="ay-tabs__tab ay-btn"
            @click.prevent="$emit('click', tab.name)"
        >
            <span>{{ tab.options?.label || tab.name }}</span>
            <span v-if="tab.options?.badgeText" class="ay-tabs__tab-badge">{{ tab.options.badgeText }}</span>
        </button>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import type { Tabs } from '@/components/Tabs/TabsTypes';

export default defineComponent({
    name: 'TabsButtonLayout',

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
});
</script>
