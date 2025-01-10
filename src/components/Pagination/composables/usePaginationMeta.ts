/**
 * External dependencies.
 */
import { computed } from 'vue';
import type { PaginationComposableOptions } from '@/components/Pagination/types';

export default function usePaginationMeta({ total, pageSize, currentPage }: PaginationComposableOptions) {
    // TODO: Refactor `toLocaleString` to use new internalization functions, after below mentioned PR is merged
    // @link: https://gitlab.com/aboutyou/cloud-panel/panel-packages/-/merge_requests/121
    const formatNumber = (value: number) => value?.toLocaleString();
    const paginationShowFrom = computed(() => (currentPage.value - 1) * pageSize.value + 1);
    const paginationShowTo = computed(() => currentPage.value * pageSize.value);
    const paginationInfo = computed(() => {
        const to = formatNumber(paginationShowTo.value);
        const from = formatNumber(paginationShowFrom.value);
        const totalFormatted = formatNumber(total.value);

        if (total.value <= 0) {
            return `Showing ${formatNumber(0)} of ${totalFormatted}`;
        } else if (paginationShowTo.value > total.value) {
            // show up to total when page size is greater than total
            return `Showing ${from}-${totalFormatted} of ${totalFormatted}`;
        }

        return `Showing ${from}-${to} of ${totalFormatted}`;
    });

    return {
        paginationInfo,
    };
}
