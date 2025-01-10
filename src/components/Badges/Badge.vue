<template>
    <span :class="className" class="ay-badge" v-text="label || type" />
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { PropType } from 'vue';
import { computed, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './Badge.css';
import type { BadgeType } from '@/components/Badges/BadgeTypes';

export const badgeTypes = ['primary', 'secondary', 'info', 'warning', 'danger'];

export default defineComponent({
    name: 'Badge',

    props: {
        type: {
            type: String as PropType<BadgeType>,
            default: 'primary',
        },

        label: {
            type: String,
            default: null,
        },
    },

    setup(props) {
        return {
            className: computed(() => {
                if (!badgeTypes.includes(props.type)) {
                    return 'ay-badge--primary';
                }

                return `ay-badge--${props.type}`;
            }),
        };
    },
});
</script>
