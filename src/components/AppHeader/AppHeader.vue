<template>
    <div class="ay-app-content-header" data-e2e="ay-app-header">
        <slot name="avatar" />

        <div class="ay-app-content-header__head">
            <h2 data-e2e="ay-app-header-title">{{ title }}</h2>

            <slot name="breadcrumbs" />
        </div>

        <div v-if="$slots.default" class="ay-app-content-header__content">
            <slot />
        </div>
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
import './AppHeader.css';

export default defineComponent({
    name: 'AppHeader',

    props: {
        title: {
            type: String,
            required: true,
        },
    },
});
</script>
