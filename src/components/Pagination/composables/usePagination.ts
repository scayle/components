/**
 * External dependencies.
 */
import { ref, computed } from 'vue';

/**
 * Internal dependencies.
 */
import { rangeIncluded, wrapInComputed } from '@/utils';
import type { PaginationComposableOptions } from '@/components/Pagination/types';

export default function usePagination({
    total,
    pageSize,
    currentPage,
    disableCollapsedPages,
}: PaginationComposableOptions) {
    const collapsedPages = 3;
    const areCollapsedPagesDisabled = ref(disableCollapsedPages ?? false);
    const isPageDisabled = (page: number) => page === currentPage.value;
    const maxPages = computed(() => Math.ceil(total.value / pageSize.value) || 1);

    const pagesToShow = computed(() => {
        if (areCollapsedPagesDisabled.value) {
            return [
                // fallback to the max page if we pass in a current page larger than the max one
                currentPage.value > maxPages.value ? maxPages.value : currentPage.value,
            ];
        }

        // show all pages
        // when we have less or equal to 4 pages
        // since then the collapse doesn't make sense
        if (collapsedPages + 1 >= maxPages.value) {
            return rangeIncluded(1, maxPages.value);
        }

        const stop = currentPage.value + collapsedPages - 1;

        if (stop >= maxPages.value) {
            return rangeIncluded(maxPages.value - collapsedPages, maxPages.value);
        }

        // offset is to determine
        // whether we should show the selected page in the middle or not
        const offset = currentPage.value === 1 ? 0 : 1;

        return rangeIncluded(currentPage.value - offset, stop - offset);
    });
    const doWeHaveMorePagesThanCollapsedOnes = computed(() => maxPages.value > collapsedPages);

    return {
        maxPages,
        pagesToShow,
        isPageDisabled,
        doWeHaveMorePagesThanCollapsedOnes,
        collapsedPages: wrapInComputed(collapsedPages),
    };
}
