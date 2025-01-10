<template id="spinner">
    <span :class="sizeClass" class="spinner"> <span /> <span /> <span /> </span>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { PropType } from 'vue';
import { computed, toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
type LoadingSpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default defineComponent({
    name: 'Spinner',

    props: {
        size: {
            type: String as PropType<LoadingSpinnerSize>,
            default: null,
        },
    },

    setup(props) {
        const { size } = toRefs(props);
        const sizeClass = computed(() => {
            if (!size.value) {
                return '';
            }

            return {
                xs: 'spinner-xs',
                sm: 'spinner-sm',
                md: 'spinner-md',
                lg: 'spinner-lg',
                xl: 'spinner-xl',
            }[size.value];
        });

        return {
            sizeClass,
        };
    },
});
</script>
