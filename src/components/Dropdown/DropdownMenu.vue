<template>
    <ul class="ay-dropdown-menu">
        <slot />
    </ul>
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
    name: 'DropdownMenu',
});
</script>
