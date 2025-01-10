<template>
    <div class="ay-entity-list__item">
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

export default defineComponent({
    name: 'EntityListItem',
});
</script>
