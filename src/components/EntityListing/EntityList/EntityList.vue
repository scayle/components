<template>
    <div class="ay-entity-list">
        <slot />

        <div v-if="canLoadMore" class="ay-entity-list__load-more">
            <spinner v-if="loading" />

            <button v-else class="ay-entity-list__button" type="button" @click="$emit('load-more')">
                {{ loadMoreButtonLabel }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { computed, defineComponent, toRefs } from 'vue';

/**
 * Internal dependencies.
 */
import './EntityList.css';
import useTranslation from '@/composables/useTranslation';

export default defineComponent({
    name: 'EntityList',

    props: {
        loading: {
            type: Boolean,
            default: false,
        },

        buttonLabel: {
            type: String,
            default: null,
        },

        canLoadMore: {
            type: Boolean,
            default: false,
        },
    },

    emits: {
        ['load-more']() {
            return true;
        },
    },

    setup(props) {
        const { buttonLabel } = toRefs(props);
        const { t } = useTranslation();

        return {
            loadMoreButtonLabel: computed(() => buttonLabel.value || t('button.load_more')),
        };
    },
});
</script>
