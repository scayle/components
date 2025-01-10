<template>
    <div class="ay-entity-list__item-badge-container">
        <Badges>
            <slot />
        </Badges>
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
import Badges from '@/components/Badges/Badges.vue';

export default defineComponent({
    name: 'EntityListItemBadges',
    components: { Badges },
});
</script>
