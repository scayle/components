<template>
    <div class="ay-search">
        <Input ref="searchInput" v-model="query" :placeholder="placeholderLabel" :size="size" class="ay-search__input">
            <template #prefix>
                <IconPanelRefresh v-if="loading" class="ay-search__loading-icon" />
                <IconPanelSearch v-else class="ay-search__search-icon" />
            </template>
        </Input>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { useVModel } from '@vueuse/core';
import type { PropType } from 'vue';
import { toRefs, computed, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './SearchInput.css';
import Input, { type InputSize } from '@/components/Input/Input.vue';
import useTranslation from '@/composables/useTranslation';

export default defineComponent({
    name: 'SearchInput',

    components: {
        /* eslint-disable */
        Input,
    },

    props: {
        loading: {
            type: Boolean,
            default: false,
        },

        modelValue: {
            type: String,
            default: '',
        },

        placeholder: {
            type: String,
            default: null,
        },

        size: {
            type: String as PropType<InputSize>,
            default: 'normal',
        },
    },

    emits: {
        ['update:modelValue'](_payload: string) {
            return true;
        },
    },

    setup(props, { emit }) {
        const { t } = useTranslation();
        const { placeholder } = toRefs(props);
        const query = useVModel(props, 'modelValue', emit);

        return {
            query,
            placeholderLabel: computed(() => placeholder.value || t('select.search-placeholder')),
        };
    },
});
</script>
