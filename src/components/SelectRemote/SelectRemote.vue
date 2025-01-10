<template>
    <BaseSelect
        v-model="value"
        class="ay-select"
        :disabled="disabled"
        popper-class="ay-select__listbox"
        v-bind="baseSelectProps"
        @open="onOpen"
    >
        <template #button="{ currentValue, click, isOpen, clearValue }">
            <SelectInput
                :is-open="isOpen"
                :label="getLabel(currentValue)"
                :placeholder="placeholder"
                :value="currentValue"
                :disabled="disabled"
                @clear="clearValue"
                @click="click"
            />
        </template>

        <template #listbox="{ count }">
            <div>
                <SearchInput v-if="searchable" ref="searchInput" v-model="query" :loading="loading" />
                <div ref="scroller" class="ay-select__option-scroll-container">
                    <div class="ay-select__option-container">
                        <template v-for="option in data">
                            <slot :option="option" name="option" />
                        </template>
                        <Spinner v-if="loading" />
                        <div ref="sentinel" style="height: 1px; width: 100%; background: transparent" />
                    </div>
                </div>
                <SelectEmpty v-if="count === 0 && !loading" />
            </div>
        </template>
    </BaseSelect>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, toRefs, watch } from 'vue';

import { useIntersectionObserver, useDebounceFn } from '@vueuse/core';

import getCommonSelectProps from '../Select/SelectProps';
import type { SearchableDataProvider, PaginationDataProvider } from './DataProvider';
import BaseSelect from '@/components/Select/BaseSelect.vue';
import SearchInput from '@/components/SearchInput/SearchInput.vue';
import SelectInput from '@/components/Select/SelectInput.vue';
import SelectEmpty from '@/components/Select/SelectEmpty.vue';
import Spinner from '@/components/Spinner/Spinner.vue';
import type { ValueType } from '@/components/Select/BaseSelectTypes';
import useSelectBasics from '@/components/Select/composables/useSelectBasics';

export default defineComponent({
    name: 'SelectRemote',
    components: {
        BaseSelect,
        SearchInput,
        SelectEmpty,
        SelectInput,
        Spinner,
    },
    props: {
        ...getCommonSelectProps<ValueType>(),

        provider: {
            type: Object as PropType<SearchableDataProvider<ValueType> & PaginationDataProvider<ValueType>>,
            required: true,
        },

        debounceThreshold: {
            type: Number,
            default: 175,
        },
    },
    emits: {
        ['update:modelValue'](_payload: ValueType) {
            return true;
        },
    },
    setup(props) {
        const { data, loadPage, currentPage, loading, search } = toRefs(props).provider.value;
        const { query, ...basics } = useSelectBasics({ props });

        const sentinel = ref(null);
        const scroller = ref(null);

        const sentinelIsVisible = ref(false);

        useIntersectionObserver(
            sentinel,
            ([{ isIntersecting }]) => {
                sentinelIsVisible.value = isIntersecting;
            },
            // TODO: Add a threshold
            { root: scroller }
        );

        watch(sentinelIsVisible, val => {
            if (val) {
                loadPage();
            }
        });

        const debouncedSearch = useDebounceFn(() => {
            search(query.value);
        }, props.debounceThreshold);

        watch(
            () => query.value,
            () => {
                debouncedSearch();
            },
            {
                immediate: true,
            }
        );

        return {
            data,
            query,
            loadPage,
            currentPage,
            scroller,
            sentinel,
            loading,
            ...basics,
        };
    },
    computed: {
        value: {
            get(): ValueType {
                return this.modelValue;
            },
            set(val: ValueType) {
                this.$emit('update:modelValue', val);
            },
        },
    },
});
</script>
