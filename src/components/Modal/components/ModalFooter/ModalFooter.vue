<template>
    <div class="ay-modal__footer">
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
    name: 'ModalFooter',
});
</script>
