/**
 * External dependencies.
 */
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import usePaginationMeta from '@/components/Pagination/composables/usePaginationMeta';

describe('usePaginationMeta.ts', () => {
    describe('returns an object', () => {
        describe('with paginationInfo prop', () => {
            it('that contains text that is not broken when total is 0', () => {
                const { paginationInfo } = usePaginationMeta({
                    total: ref(0),
                    pageSize: ref(15),
                    currentPage: ref(1),
                });

                expect(paginationInfo.value).toEqual('Showing 0 of 0');
            });

            it('that contains text of what range of items we are showing', () => {
                const { paginationInfo } = usePaginationMeta({
                    total: ref(15),
                    pageSize: ref(15),
                    currentPage: ref(1),
                });

                expect(paginationInfo.value).toEqual('Showing 1-15 of 15');
            });

            it('that contains text of what range of items we are showing at any point', () => {
                const { paginationInfo } = usePaginationMeta({
                    total: ref(100),
                    pageSize: ref(15),
                    currentPage: ref(4),
                });

                expect(paginationInfo.value).toEqual('Showing 46-60 of 100');
            });

            it('it shows that total when pageSize is greater than total', () => {
                const { paginationInfo } = usePaginationMeta({
                    total: ref(100),
                    pageSize: ref(1000),
                    currentPage: ref(1),
                });

                expect(paginationInfo.value).toEqual('Showing 1-100 of 100');
            });
        });
    });
});
