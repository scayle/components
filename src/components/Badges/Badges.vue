<template>
    <div class="ay-badges">
        <slot />
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
import './Badges.css';

export default defineComponent({
    name: 'Badges',
});
</script>
