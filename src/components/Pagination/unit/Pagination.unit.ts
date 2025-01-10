/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import merge from 'lodash.merge';
import type { DOMWrapper, VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

/**
 * Internal dependencies.
 */
import Pagination from '../Pagination.vue';
import { fc, itProp } from '@/fast-check-utils';
import type { ComponentMountingOptions } from '@/test-utils';

type PaginationType = InstanceType<typeof Pagination>;

const mountPagination = (options: ComponentMountingOptions<PaginationType> = {}): VueWrapper<PaginationType, any> => {
    const defaultOptions = {
        props: {
            total: 9,
            pageSize: 3,
        },
    };

    return mount(Pagination as any, merge(defaultOptions, options) as any);
};
const findPageBtns = (wrapper: VueWrapper<any> | DOMWrapper<any>) =>
    wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn,.ay-pagination__separator)');

describe('Pagination.vue', () => {
    describe('has a pageSize prop', () => {
        itProp('that fails validation for negative values', [fc.integer({ min: -100, max: 0 })], value => {
            expect(Pagination.props.pageSize.validation(value)).toBeFalsy();
        });

        itProp('that passes validation for positive values', [fc.integer({ min: 1, max: 100 })], value => {
            expect(Pagination.props.pageSize.validation(value)).toBeTruthy();
        });

        it('that emits event to reset the page to the first one when changed', async () => {
            const wrapper = mountPagination({
                props: {
                    currentPage: 3,
                },
            });

            expect(wrapper.emitted('change')).toBeUndefined();

            await wrapper.setProps({
                pageSize: 1,
            });

            expect(wrapper.emitted('change')).toEqual([[1]]);
        });
    });

    describe('has a total prop', () => {
        itProp('that fails validation for negative values', [fc.integer({ min: -100, max: -1 })], value => {
            expect(Pagination.props.total.validation(value)).toBeFalsy();
        });

        itProp('that passes validation for positive values', [fc.nat()], value => {
            expect(Pagination.props.total.validation(value)).toBeTruthy();
        });

        it('that does not allow a pagination info to be shown when it is 0', () => {
            const wrapper = mount(Pagination, {
                props: {
                    total: 0,
                    pageSize: 1,
                },
            });

            expect(wrapper.find('.ay-pagination__info').exists()).toBeFalsy();
        });
    });

    describe('has a currentPage prop', () => {
        itProp('that fails validation for values below 1', [fc.integer({ min: -100, max: 0 })], value => {
            expect(Pagination.props.currentPage.validation(value)).toBeFalsy();
        });

        itProp('that passes validation for values above and equal to 1', [fc.integer({ min: 1, max: 100 })], value => {
            expect(Pagination.props.currentPage.validation(value)).toBeTruthy();
        });

        it('that changes the current active page element when it is changed externally', async () => {
            const wrapper = mountPagination();
            const groupWrapper = wrapper.find('.ay-btn-group');

            expect(groupWrapper.find('.ay-pagination__btn--selected').text()).toEqual('1');

            wrapper.setProps({
                currentPage: 2,
            });

            await nextTick();

            expect(groupWrapper.find('.ay-pagination__btn--selected').text()).toEqual('2');
        });
    });

    describe('has a disableCollapsedPages prop', () => {
        it('that disables margin pages from being used', () => {
            const wrapper = mountPagination({
                props: {
                    total: 12,
                    pageSize: 3,
                    disableCollapsedPages: true,
                },
            });
            expect(wrapper.find('.ay-pagination__separator').exists()).toBeFalsy();
        });

        it('that allows to show only one page at a time', () => {
            const wrapper = mountPagination({
                props: {
                    total: 12,
                    pageSize: 3,
                    disableCollapsedPages: true,
                },
            });
            const pageButtons = wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn)');

            expect(pageButtons.length).toEqual(1);
        });
    });

    describe('has pages element', () => {
        it('that shows the current selected page with two more pages to choose from', () => {
            const wrapper = mountPagination();
            const groupWrapper = wrapper.find('.ay-btn-group');
            const selected = groupWrapper.find('.ay-pagination__btn--selected');
            const allPages = findPageBtns(groupWrapper);

            expect(selected.text()).toEqual('1');

            // verify that active btn is in this group
            expect(allPages[0].text()).toEqual('1');
            expect(allPages[1].text()).toEqual('2');
            expect(allPages[2].text()).toEqual('3');
        });

        it('that shows the selected page plus the previous and next page buttons', () => {
            const wrapper = mountPagination({
                props: {
                    currentPage: 2,
                },
            });
            const groupWrapper = wrapper.find('.ay-btn-group');
            const selected = groupWrapper.find('.ay-pagination__btn--selected');
            const otherPages = findPageBtns(groupWrapper);

            expect(selected.text()).toEqual('2');

            // verify that active btn is in this group
            expect(otherPages[0].text()).toEqual('1');
            expect(otherPages[1].text()).toEqual('2');
            expect(otherPages[2].text()).toEqual('3');
        });

        it('that shows the last three pages including selected page and the previous page to the selected', () => {
            const wrapper = mountPagination({
                props: {
                    currentPage: 4,
                    total: 30,
                    pageSize: 5,
                },
            });
            const groupWrapper = wrapper.find('.ay-btn-group');
            const selected = groupWrapper.find('.ay-pagination__btn--selected');
            const otherPages = findPageBtns(groupWrapper);

            expect(selected.text()).toEqual('4');

            // verify that active btn is in this group
            // we start from 1 instead of 0, because 0 is the first page
            // when margin pages are active
            expect(otherPages[1].text()).toEqual('3');
            expect(otherPages[2].text()).toEqual('4');
            expect(otherPages[3].text()).toEqual('5');
            expect(otherPages[4].text()).toEqual('6');
        });

        it('that emit change events when we click on a page', () => {
            const wrapper = mountPagination();
            const groupWrapper = wrapper.find('.ay-btn-group');
            const otherPages = findPageBtns(groupWrapper);

            expect(wrapper.emitted('change')).toBeFalsy();
            expect(wrapper.emitted('update:currentPage')).toBeFalsy();

            // click on second page
            otherPages[1].trigger('click');

            expect(wrapper.emitted('change')).toEqual([[2]]);
            expect(wrapper.emitted('update:currentPage')).toEqual([[2]]);
        });

        it('which layout can be changed via slot', () => {
            const wrapper = mountPagination({
                slots: {
                    ['page-button']: `
                        <template #page-button="{ page }">
                            <div class="some-page-button">{{ page }}</div>
                        </template>
                    `,
                },
            });
            const groupWrapper = wrapper.find('.ay-btn-group');
            const customPageElements = groupWrapper.findAll('.some-page-button');

            expect(findPageBtns(groupWrapper).length).toEqual(0);
            expect(customPageElements.length).toEqual(3);
            expect(customPageElements[0].text()).toEqual('1');
            expect(customPageElements[1].text()).toEqual('2');
            expect(customPageElements[2].text()).toEqual('3');
        });

        it("which container's layout can be changed via slot", () => {
            const wrapper = mountPagination({
                slots: {
                    ['pages-container']: `
                        <template #pages-container="{ pages }">
                            <div class="pages-container">
                                <div v-for="page in pages" class="page">{{ page }}</div>
                            </div>
                        </template>
                    `,
                },
            });
            const groupWrapper = wrapper.find('.pages-container');
            const customPageElements = groupWrapper.findAll('.page');

            expect(wrapper.find('.ay-btn-group').exists()).toBeFalsy();
            expect(customPageElements.length).toEqual(3);
            expect(customPageElements[0].text()).toEqual('1');
            expect(customPageElements[1].text()).toEqual('2');
            expect(customPageElements[2].text()).toEqual('3');
        });
    });

    describe('has prev button', () => {
        it('that is disabled when we are on the first page', () => {
            const wrapper = mountPagination();
            const prevButton = wrapper.find('.ay-pagination__prev-btn');

            expect(prevButton.attributes()).toHaveProperty('disabled');
        });

        it('that is not disabled when we are not on the first page', () => {
            const wrapper = mountPagination({
                props: {
                    currentPage: 2,
                },
            });
            const prevButton = wrapper.find('.ay-pagination__prev-btn');

            expect(prevButton.attributes()).not.toHaveProperty('disabled');
        });

        it('that emits change events to the previous page when we click on it', () => {
            const currentPage = 2;
            const wrapper = mountPagination({
                props: {
                    currentPage,
                },
            });
            const prevButton = wrapper.find('.ay-pagination__prev-btn');

            expect(wrapper.emitted('change')).toBeFalsy();
            expect(wrapper.emitted('update:currentPage')).toBeFalsy();

            // click on second page
            prevButton.trigger('click');

            expect(wrapper.emitted('change')).toEqual([[currentPage - 1]]);
            expect(wrapper.emitted('update:currentPage')).toEqual([[currentPage - 1]]);
        });

        it('which layout can be changed via slot', () => {
            const wrapper = mountPagination({
                props: {
                    currentPage: 2,
                },
                slots: {
                    'prev-page-button': `<template #prev-page-button="{ click, disabled }">
                                            <div class="new-prev-page" :disabled="disabled" @click="click">Prev</div>
                                         </template>`,
                },
            });

            expect(wrapper.find('.ay-pagination__prev-btn').exists()).toBeFalsy();
            expect(wrapper.find('.new-prev-page').exists()).toBeTruthy();
        });
    });

    describe('has next button', () => {
        it('that is disabled when we are on the last page', () => {
            const wrapper = mountPagination({
                props: {
                    currentPage: 3,
                },
            });
            const nextButton = wrapper.find('.ay-pagination__next-btn');

            expect(nextButton.attributes()).toHaveProperty('disabled');
        });

        it('that is not disabled when we are not on the last page', () => {
            const wrapper = mountPagination();
            const nextButton = wrapper.find('.ay-pagination__next-btn');

            expect(nextButton.attributes()).not.toHaveProperty('disabled');
        });

        it('that emits change events to the next page when we click on it', () => {
            const currentPage = 2;
            const wrapper = mountPagination({
                props: {
                    currentPage,
                },
            });
            const nextButton = wrapper.find('.ay-pagination__next-btn');

            expect(wrapper.emitted('change')).toBeFalsy();
            expect(wrapper.emitted('update:currentPage')).toBeFalsy();

            // click on second page
            nextButton.trigger('click');

            expect(wrapper.emitted('change')).toEqual([[currentPage + 1]]);
            expect(wrapper.emitted('update:currentPage')).toEqual([[currentPage + 1]]);
        });

        it('which layout can be changed via slot', () => {
            const wrapper = mountPagination({
                props: {
                    currentPage: 2,
                },
                slots: {
                    'next-page-button': `<template #next-page-button="{ click, disabled }">
                                            <div class="new-next-page" :disabled="disabled" @click="click">Next</div>
                                         </template>`,
                },
            });

            expect(wrapper.find('.ay-pagination__next-btn').exists()).toBeFalsy();
            expect(wrapper.find('.new-next-page').exists()).toBeTruthy();
        });
    });

    describe('has last page button with separator', () => {
        it('visible when we have margin pages', () => {
            const wrapper = mountPagination({
                props: {
                    total: 15,
                    pageSize: 3,
                },
            });
            const pageButtons = wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn)');
            const lastPage = pageButtons.pop();

            // pop separator
            pageButtons.pop();

            expect(wrapper.find('.ay-pagination__separator').exists()).toBeTruthy();
            // we should have 3-page buttons visible without last page and separator
            expect(pageButtons.length).toEqual(3);

            // last page is 5. Ex: total / pageSize
            expect(lastPage?.text()).toEqual('5');
        });

        it.each([3, 4])('not visible when we are close to last page', currentPage => {
            const wrapper = mountPagination({
                props: {
                    currentPage,
                    total: 12,
                    pageSize: 3,
                },
            });
            const pageButtons = wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn)');
            const pageButtonsLength = pageButtons.length;

            expect(pageButtons[pageButtonsLength - 1].text()).toEqual('4');

            // expect no separator
            expect(pageButtons[pageButtonsLength - 2].text()).toEqual('3');
        });

        it('not visible when we do not have margin pages', () => {
            const wrapper = mountPagination();
            const pageButtons = wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn)');

            expect(wrapper.find('.ay-pagination__separator').exists()).toBeFalsy();
            expect(pageButtons.length).toEqual(3);
        });
    });

    describe('has first page with separator', () => {
        it.each([3, 4, 5])('visible when we have margin pages and are near the max page', currentPage => {
            const wrapper = mountPagination({
                props: {
                    currentPage,
                    total: 15,
                    pageSize: 3,
                },
            });
            const pageButtons = wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn)');

            // check last page is correct
            expect(pageButtons[pageButtons.length - 1].text()).toEqual('5');

            // check we see first page
            expect(pageButtons[0].text()).toEqual('1');

            expect(pageButtons[1].classes()).toContain('ay-pagination__separator');
        });

        it.each([1, 2])('not visible when we are close to first page', currentPage => {
            const wrapper = mountPagination({
                props: {
                    currentPage,
                    total: 15,
                    pageSize: 3,
                },
            });
            const pageButtons = wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn)');

            expect(pageButtons[0].text()).toEqual('1');
            expect(pageButtons[1].classes()).not.toContain('ay-pagination__separator');
        });

        it('not visible when we do not have margin pages', () => {
            const wrapper = mountPagination();
            const pageButtons = wrapper.findAll('.ay-btn:not(.ay-pagination__prev-btn,.ay-pagination__next-btn)');

            expect(wrapper.find('.ay-pagination__separator').exists()).toBeFalsy();
            expect(pageButtons.length).toEqual(3);
        });
    });

    describe('changes active page', () => {
        it('when the current page changes externally', async () => {
            const wrapper = mountPagination();
            const groupWrapper = wrapper.find('.ay-btn-group');

            expect(groupWrapper.find('.ay-pagination__btn--selected').text()).toEqual('1');

            wrapper.setProps({
                currentPage: 2,
            });

            await nextTick();

            expect(groupWrapper.find('.ay-pagination__btn--selected').text()).toEqual('2');
        });
    });
});
