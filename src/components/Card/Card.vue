<template>
    <div class="ay-card">
        <div v-if="$slots.header" class="ay-card__header">
            <slot name="header" />
        </div>

        <div v-if="$slots.default" class="ay-card__body">
            <slot />
        </div>

        <div v-if="$slots.footer" class="ay-card__footer">
            <slot name="footer" />
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
import './Card.css';

export default defineComponent({
    name: 'Card',
});
</script>
