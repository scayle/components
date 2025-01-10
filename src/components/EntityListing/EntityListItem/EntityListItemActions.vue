<template>
    <div class="ay-entity-list__item-actions-container">
        <div class="ay-entity-list__item-actions-inner">
            <slot />
        </div>
    </div>
</template>

<script langs="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */

export default defineComponent({
    name: 'EntityListItemActions',
});
</script>
