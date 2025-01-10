/* istanbul ignore file */

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import _Pagination from './Pagination.vue';
import _PaginationLayout from './PaginationLayout.vue';
import { withPlugin } from '@/utils';

export const Pagination = withPlugin(_Pagination);
export const PaginationLayout = withPlugin(_PaginationLayout);
