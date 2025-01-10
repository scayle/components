<template>
    <BaseSelect
        v-model="value"
        :store="store"
        :disabled="disabled"
        class="ay-select"
        popper-class="ay-select__listbox"
        v-bind="baseSelectProps"
        @open="onOpen"
    >
        <template #button="{ currentValue, click, isOpen }">
            <SelectInput
                :is-open="isOpen"
                :label="getLabel(currentValue)"
                :placeholder="placeholder"
                :value="currentValue"
                :disabled="disabled"
                @click="click"
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
import { defineComponent } from 'vue';

import BaseSelect from '../../BaseSelect.vue';
import SearchInput from '../../../SearchInput/SearchInput.vue';
import SelectEmpty from '../../SelectEmpty.vue';
import SelectInput from '../../SelectInput.vue';

import getCommonSelectProps from '../../SelectProps';
import type { ValueType } from '@/components/Select/BaseSelectTypes';
import useSelectBasics from '@/components/Select/composables/useSelectBasics';
import SingleSelectStore from '@/components/Select/stores/SingleSelectStore';

export default defineComponent({
    name: 'SimpleSelect',

    components: {
        BaseSelect,
        SearchInput,
        SelectEmpty,
        SelectInput,
    },

    props: {
        ...getCommonSelectProps<ValueType>(),
    },

    emits: {
        ['update:modelValue'](_payload: ValueType) {
            return true;
        },
    },

    setup(props) {
        const store = new SingleSelectStore();
        const basics = useSelectBasics({ props });

        return {
            store,
            ...basics,
        };
    },
});
</script>
