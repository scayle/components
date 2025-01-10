<template>
    <BaseSelect
        v-model="value"
        :store="store"
        :disabled="disabled"
        class="ay-select ay-multiselect"
        popper-class="ay-select__listbox"
        v-bind="baseSelectProps"
        @open="onOpen"
    >
        <template #button="{ currentValue, click, isOpen, removeValue }">
            <MultiSelectTagInput
                :clearable="tagClearable"
                :get-label="getLabel"
                :is-open="isOpen"
                :max-tags="maxTags"
                :placeholder="placeholder"
                :tags="currentValue"
                :disabled="disabled"
                @click="click"
                @remove-tag="removeValue"
            />
        </template>

        <template #listbox="{ count }">
            <div>
                <SearchInput v-if="searchable" ref="searchInput" v-model="query" />
                <div class="ay-select__option-scroll-container">
                    <div class="ay-select__option-container">
                        <slot :query="query" />
                    </div>
                </div>
                <SelectEmpty v-if="count === 0" />
            </div>
        </template>
    </BaseSelect>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import BaseSelect from '../../BaseSelect.vue';
import SearchInput from '../../../SearchInput/SearchInput.vue';
import SelectEmpty from '../../SelectEmpty.vue';

import './MultiSelect.css';

import getCommonSelectProps from '../../SelectProps';
import useSelectBasics from '../../composables/useSelectBasics';
import type { MultiSelectValueType } from '@/components/Select/BaseSelectTypes';
import MultiSelectStore from '@/components/Select/stores/MultiSelectStore';
import MultiSelectTagInput from '@/components/Select/components/MultiSelect/MultiSelectTagInput.vue';

export default defineComponent({
    name: 'MultiSelect',

    components: {
        MultiSelectTagInput,
        BaseSelect,
        SelectEmpty,
        SearchInput,
    },

    props: {
        ...getCommonSelectProps<MultiSelectValueType>(),

        tagClearable: {
            type: Boolean,
            default: false,
        },

        maxTags: {
            type: Number,
            default: 2,
        },
    },

    emits: {
        ['update:modelValue'](_payload: MultiSelectValueType) {
            return true;
        },
    },

    setup(props) {
        const store = new MultiSelectStore();
        const basics = useSelectBasics({ props });

        return {
            store,
            ...basics,
        };
    },
});
</script>
