/**
 * External dependencies.
 */
import type { Ref } from 'vue';

export type PaginationComposableOptions = {
    total: Ref<number>;
    pageSize: Ref<number>;
    currentPage: Ref<number>;
    disableCollapsedPages?: Ref<boolean>;
};
