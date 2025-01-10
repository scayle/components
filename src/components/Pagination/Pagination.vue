<template>
    <div class="ay-pagination">
        <slot
            :current-page="currentPage"
            :next-page="nextPage"
            :pages="pagesToShow"
            :prev-page="prevPage"
            name="pages-container"
        >
            <div class="ay-btn-group">
                <slot :click="prevPage" :disabled="isPrevDisabled" name="prev-page-button">
                    <button :disabled="isPrevDisabled" class="ay-btn ay-pagination__prev-btn" @click="prevPage">
                        <IconPanelChevronLeft />
                    </button>
                </slot>

                <template v-if="isCollapsedPagesEnabled && isFirstPageForCollapseVisible">
                    <slot
                        :click="() => onPageChange(1)"
                        :disabled="false"
                        :page="1"
                        :selected="false"
                        name="page-button"
                    >
                        <button class="ay-btn" @click="onPageChange(1)">1</button>
                    </slot>

                    <slot name="separator-btn">
                        <button class="ay-btn ay-pagination__separator" disabled>...</button>
                    </slot>
                </template>

                <slot
                    v-for="page in pagesToShow"
                    :key="page"
                    :click="() => onPageChange(page)"
                    :disabled="isPageDisabled(page)"
                    :page="page"
                    :selected="page === currentPage"
                    name="page-button"
                >
                    <button
                        :class="{ 'ay-pagination__btn--selected': page === currentPage }"
                        :disabled="isPageDisabled(page)"
                        class="ay-btn"
                        @click="onPageChange(page)"
                    >
                        {{ page }}
                    </button>
                </slot>

                <template v-if="isCollapsedPagesEnabled && !isLastPageIncludedInCollapsedPages">
                    <slot name="separator-btn">
                        <button class="ay-btn ay-pagination__separator" disabled>...</button>
                    </slot>

                    <slot
                        :click="() => onPageChange(maxPages)"
                        :disabled="false"
                        :page="maxPages"
                        :selected="false"
                        name="page-button"
                    >
                        <button class="ay-btn" @click="onPageChange(maxPages)">
                            {{ maxPages }}
                        </button>
                    </slot>
                </template>

                <slot :click="nextPage" :disabled="isNextDisabled" name="next-page-button">
                    <button :disabled="isNextDisabled" class="ay-btn ay-pagination__next-btn" @click="nextPage">
                        <IconPanelChevronRight />
                    </button>
                </slot>
            </div>
        </slot>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { watch, computed, toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './css/Pagination.css';
import PaginationProps from '@/components/Pagination/PaginationProps';
import usePagination from '@/components/Pagination/composables/usePagination';

export default defineComponent({
    name: 'Pagination',

    props: {
        ...PaginationProps,
    },

    emits: {
        ['change'](_newPage: number) {
            return true;
        },

        ['update:currentPage'](_newPage: number) {
            return true;
        },
    },

    setup(props, { emit }) {
        const { total, pageSize, currentPage, disableCollapsedPages } = toRefs(props);

        const { maxPages, doWeHaveMorePagesThanCollapsedOnes, pagesToShow, isPageDisabled } = usePagination({
            total,
            pageSize,
            currentPage,
            disableCollapsedPages,
        });
        const isLastPageIncludedInCollapsedPages = computed(() => pagesToShow.value.includes(maxPages.value));
        const isFirstPageForCollapseVisible = computed(
            () => isLastPageIncludedInCollapsedPages.value && !pagesToShow.value.includes(1)
        );
        const isCollapsedPagesEnabled = computed(
            () => !disableCollapsedPages.value && doWeHaveMorePagesThanCollapsedOnes.value
        );
        const isPrevDisabled = computed(() => currentPage.value === 1);
        const isNextDisabled = computed(() => currentPage.value === maxPages.value);

        const onPageChange = (page: number) => {
            emit('change', page);
            emit('update:currentPage', page);
        };
        const prevPage = () => {
            // if we are on the first page do nothing
            if (currentPage.value === 1) {
                return;
            }

            onPageChange(currentPage.value - 1);
        };
        const nextPage = () => {
            // if we are on the last page do nothing
            if (currentPage.value === maxPages.value) {
                return;
            }

            onPageChange(currentPage.value + 1);
        };

        // reset to first page when page size is changed
        watch(pageSize, () => onPageChange(1));

        return {
            nextPage,
            prevPage,
            maxPages,
            pagesToShow,
            onPageChange,
            isPageDisabled,
            isPrevDisabled,
            isNextDisabled,
            isCollapsedPagesEnabled,
            isFirstPageForCollapseVisible,
            isLastPageIncludedInCollapsedPages,
        };
    },
});
</script>
