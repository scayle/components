/**
 * External dependencies.
 */
import { ref } from 'vue';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import { fc, itProp } from '@/fast-check-utils';
import usePagination from '@/components/Pagination/composables/usePagination';

describe('usePagination.ts', () => {
    describe('has disableCollapsedPages prop', () => {
        it('that returns only the current page in an array', () => {
            const { pagesToShow } = usePagination({
                total: ref(9),
                currentPage: ref(1),
                pageSize: ref(3),
                disableCollapsedPages: ref(true),
            });

            expect(pagesToShow.value).toEqual([1]);
        });

        it('that returns the max page if we pass in a current page larger than the max one', () => {
            const { pagesToShow } = usePagination({
                total: ref(9),
                currentPage: ref(4),
                pageSize: ref(3),
                disableCollapsedPages: ref(true),
            });

            expect(pagesToShow.value).toEqual([3]);
        });
    });

    describe('returns an object', () => {
        describe('with maxPages prop', () => {
            itProp(
                'that is calculated based on total and pageSize',
                [fc.integer({ min: 0 }), fc.integer({ min: 1 })],
                (total, pageSize) => {
                    const maxPagesExpected = Math.ceil(total / pageSize) || 1;
                    const { maxPages } = usePagination({
                        total: ref(total),
                        currentPage: ref(1),
                        pageSize: ref(pageSize),
                    });

                    expect(maxPages.value).toEqual(maxPagesExpected);
                }
            );

            it('that is 1 when total is 0', () => {
                const { maxPages } = usePagination({
                    total: ref(0),
                    pageSize: ref(15),
                    currentPage: ref(1),
                });

                expect(maxPages.value).toEqual(1);
            });
        });

        describe('with doWeHaveMorePagesThanCollapsedOnes prop', () => {
            it('returns false if max pages is less than or equal to margin pages', () => {
                const { doWeHaveMorePagesThanCollapsedOnes, maxPages } = usePagination({
                    total: ref(30),
                    pageSize: ref(10),
                    currentPage: ref(1),
                });

                expect(maxPages.value).toEqual(3);
                expect(doWeHaveMorePagesThanCollapsedOnes.value).toBeFalsy();
            });

            it('returns true if value is more than margin pages', () => {
                const { doWeHaveMorePagesThanCollapsedOnes, maxPages } = usePagination({
                    total: ref(40),
                    pageSize: ref(10),
                    currentPage: ref(1),
                });

                expect(maxPages.value).toEqual(4);
                expect(doWeHaveMorePagesThanCollapsedOnes.value).toBeTruthy();
            });
        });

        describe('with pagesToShow prop', () => {
            itProp(
                'that returns all pages when we have equal to 4 pages for any page',
                [fc.integer({ min: 1, max: 4 })],
                currentPage => {
                    const total = ref(12);
                    const pageSize = ref(3); // 12 / 3 we get 4 max pages
                    const { pagesToShow } = usePagination({
                        total,
                        pageSize,
                        currentPage: ref(currentPage),
                    });

                    expect(pagesToShow.value).toEqual([1, 2, 3, 4]);
                }
            );

            itProp(
                'that returns all pages when we have equal less than 4 for any page',
                [fc.integer({ min: 1, max: 3 })],
                currentPage => {
                    const total = ref(9);
                    const pageSize = ref(3); // 9 / 3 we get 3 max pages
                    const { pagesToShow } = usePagination({
                        total,
                        pageSize,
                        currentPage: ref(currentPage),
                    });

                    expect(pagesToShow.value).toEqual([1, 2, 3]);
                }
            );

            it('that does not return the first page ', () => {
                const total = ref(24);
                const pageSize = ref(3); // 24 / 3 we get 8 max pages
                const { pagesToShow } = usePagination({
                    total,
                    pageSize,
                    currentPage: ref(2),
                });

                expect(pagesToShow.value).toEqual([1, 2, 3]);
            });

            it('that returns pages based on the current page', () => {
                const total = ref(24);
                const pageSize = ref(3); // 24 / 3 we get 8 max pages
                const { pagesToShow } = usePagination({
                    total,
                    pageSize,
                    currentPage: ref(3),
                });

                expect(pagesToShow.value).toEqual([2, 3, 4]);
            });

            it('that returns the previous page plus the last two pages when we are two before the max pages', () => {
                const total = ref(24);
                const pageSize = ref(3); // 24 / 3 we get 8 max pages
                const { pagesToShow } = usePagination({
                    total,
                    pageSize,
                    currentPage: ref(6),
                });

                expect(pagesToShow.value).toEqual([5, 6, 7, 8]);
            });

            it('that returns the last pages when the current page nears the end', () => {
                const total = ref(24);
                const pageSize = ref(3); // 24 / 3 we get 8 max pages
                const { pagesToShow } = usePagination({
                    total,
                    pageSize,
                    currentPage: ref(7),
                });

                expect(pagesToShow.value).toEqual([5, 6, 7, 8]);
            });
        });

        describe('with isPageDisabled function', () => {
            itProp('that returns true if the current page is the page we check', [fc.integer({ min: 1 })], page => {
                const { isPageDisabled } = usePagination({
                    total: ref(9),
                    pageSize: ref(3),
                    currentPage: ref(page),
                });

                expect(isPageDisabled(page)).toBeTruthy();
            });

            itProp(
                'that returns false if the current page is not the page we are checking',
                [fc.integer({ min: 2 })],
                page => {
                    const { isPageDisabled } = usePagination({
                        total: ref(9),
                        pageSize: ref(3),
                        currentPage: ref(1),
                    });

                    expect(isPageDisabled(page)).toBeFalsy();
                }
            );
        });
    });
});
