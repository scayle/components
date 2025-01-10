<template>
    <div class="ay-pagination-layout">
        <div class="ay-pagination-layout__group">
            <Select
                v-if="!withoutPageSizeSelector"
                v-model="currentPageSize"
                :append-dropdown-to-body="appendSelectDropdownToBody"
            >
                <Option v-for="size in totalPageSizes" :key="size" :label="size.toString()" :value="size" />
            </Select>

            <slot :pagination-info="paginationInfo" name="info">
                <div v-if="total > 0" class="ay-pagination-layout__info">
                    {{ paginationInfo }}
                </div>
            </slot>

            <slot name="after-info" />
        </div>

        <div class="ay-pagination-layout__group">
            <Pagination
                :current-page="currentPage"
                :disable-collapsed-pages="disableCollapsedPages"
                :page-size="currentPageSize"
                :total="total"
                @change="$emit('change', $event)"
                @update:current-page="$emit('update:currentPage', $event)"
            >
                <template v-if="$slots['prev-page-button']" #prev-page-button="props">
                    <slot name="prev-page-button" v-bind="props" />
                </template>

                <template v-if="$slots['pages-container']" #pages-container="props">
                    <slot name="pages-container" v-bind="props" />
                </template>

                <template v-if="$slots['page-button']" #page-button="props">
                    <slot name="page-button" v-bind="props" />
                </template>

                <template v-if="$slots['next-page-button']" #next-page-button="props">
                    <slot name="next-page-button" v-bind="props" />
                </template>

                <template v-if="$slots['separator-btn']" #separator-btn="props">
                    <slot name="separator-btn" v-bind="props" />
                </template>
            </Pagination>
        </div>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { ComputedRef } from 'vue';
import { useVModel } from '@vueuse/core';
import { computed, toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './css/PaginationLayout.css';
import PaginationProps from '@/components/Pagination/PaginationProps';
import usePaginationMeta from '@/components/Pagination/composables/usePaginationMeta';
import Pagination from '@/components/Pagination/Pagination.vue';
import Select from '@/components/Select/Select.vue';
import Option from '@/components/Select/components/Option/Option.vue';

export default defineComponent({
    name: 'PaginationLayout',

    /* eslint-disable */
    components: { Option, Select, Pagination },

    props: {
        ...PaginationProps,

        appendSelectDropdownToBody: {
            type: Boolean,
            default: true,
        },

        withoutPageSizeSelector: {
            type: Boolean,
            default: false,
        },

        pageSizes: {
            type: Array,
            default: () => [15, 30, 45, 60],
        },
    },

    emits: {
        ['change'](_newPage: number) {
            return true;
        },

        ['update:currentPage'](_newPage: number) {
            return true;
        },

        ['update:pageSize'](_newSize: number) {
            return true;
        },
    },

    setup(props, { emit }) {
        const { total, pageSizes, currentPage } = toRefs(props);
        const currentPageSize = useVModel(props, 'pageSize', emit);

        // combine the page size with all the page sizes,
        // so we can see that it is the current selected
        // if it is non-standard from our defaults above
        const totalPageSizes = computed(() => {
            if (pageSizes.value.includes(currentPageSize.value)) {
                return pageSizes.value;
            }

            return [currentPageSize.value, ...pageSizes.value].sort();
        }) as ComputedRef<number[]>;
        const { paginationInfo } = usePaginationMeta({
            total,
            pageSize: currentPageSize,
            currentPage,
        });

        return {
            paginationInfo,
            totalPageSizes,
            currentPageSize,
        };
    },
});
</script>
