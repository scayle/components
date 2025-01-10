<template>
    <div class="ay-entity-container">
        <div class="ay-entity-container__header">
            <slot name="before-tabs" />
        </div>

        <Tabs v-if="$slots.default" :selected-tab="defaultTab" hide-on-single-tab>
            <slot />
        </Tabs>

        <slot name="after-tabs" />
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './EntityContainer.css';
import Tabs from '@/components/Tabs/Tabs.vue';

export default defineComponent({
    name: 'EntityContainer',

    components: {
        Tabs,
    },

    props: {
        defaultTab: {
            type: String,
            default: null,
        },
    },
});
</script>
