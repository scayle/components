<template>
    <div class="ay-modal__body">
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
    name: 'ModalBody',
});
</script>
