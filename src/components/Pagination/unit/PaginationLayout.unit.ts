/**
 * External dependencies.
 */
import merge from 'lodash.merge';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

/**
 * Internal dependencies.
 */
import PaginationLayout from '../PaginationLayout.vue';

type PaginationLayoutType = InstanceType<typeof PaginationLayout>;

const mountPaginationLayout = (
    options: MountingOptions<Partial<PaginationLayoutType['$props']>> = {}
): VueWrapper<PaginationLayoutType, any> => {
    const defaultOptions = {
        props: {
            total: 30,
            pageSize: 5,
        },
    };

    return mount(PaginationLayout as any, merge(defaultOptions, options) as any);
};

describe('PaginationLayout.vue', () => {
    describe('has pagination', () => {
        it('is visible', () => {
            const wrapper = mountPaginationLayout({});

            expect(wrapper.find('.ay-pagination').exists()).toBeTruthy();
        });

        it('that emits change events when clicked on a page', () => {
            const wrapper = mountPaginationLayout({});
            const paginationWrapper = wrapper.findComponent('.ay-pagination') as any;

            expect(wrapper.emitted('change')).toBeUndefined();
            expect(wrapper.emitted('update:currentPage')).toBeUndefined();

            paginationWrapper.componentVM.$emit('change', 2);
            paginationWrapper.componentVM.$emit('update:currentPage', 2);

            expect(wrapper.emitted('change')).toEqual([[2]]);
            expect(wrapper.emitted('update:currentPage')).toEqual([[2]]);
        });
    });

    describe('has a total prop', () => {
        it('that does not allow an pagination info to be shown when it is 0', () => {
            const wrapper = mountPaginationLayout({
                props: {
                    total: 0,
                },
            });

            expect(wrapper.find('.ay-pagination-layout__info').exists()).toBeFalsy();
        });
    });

    describe('has a withoutPageSizeSelector prop', () => {
        it('that does nothing by default', () => {
            const wrapper = mountPaginationLayout();

            expect(wrapper.find('.ay-select').exists()).toBeTruthy();
        });

        it('that hides the select field for pageSize', () => {
            const wrapper = mountPaginationLayout({
                props: {
                    withoutPageSizeSelector: true,
                },
            });

            expect(wrapper.find('.ay-select').exists()).toBeFalsy();
        });
    });

    describe('has an info element', () => {
        it('that displays info about the current shown items and the total', () => {
            const wrapper = mountPaginationLayout();
            const paginationInfoWrapper = wrapper.find('.ay-pagination-layout__info');

            expect(paginationInfoWrapper.text()).toEqual('Showing 1-5 of 30');
        });

        it('that displays info based on the current page', () => {
            const wrapper = mountPaginationLayout({
                props: {
                    currentPage: 3,
                },
            });
            const paginationInfoWrapper = wrapper.find('.ay-pagination-layout__info');

            expect(paginationInfoWrapper.text()).toEqual('Showing 11-15 of 30');
        });

        it('that can display up until the last page', () => {
            const wrapper = mountPaginationLayout({
                props: {
                    currentPage: 6,
                },
            });
            const paginationInfoWrapper = wrapper.find('.ay-pagination-layout__info');

            expect(paginationInfoWrapper.text()).toEqual('Showing 26-30 of 30');
        });

        it('that displays total when pageSize is greater than total', () => {
            const wrapper = mountPaginationLayout({
                props: {
                    pageSize: 45,
                },
            });
            const paginationInfoWrapper = wrapper.find('.ay-pagination-layout__info');

            expect(paginationInfoWrapper.text()).toEqual('Showing 1-30 of 30');
        });
    });

    describe('has page size prop', () => {
        it('that is visible on select field as selected', async () => {
            const wrapper = mountPaginationLayout({
                props: {
                    pageSize: 3,
                },
            });
            const inputElement = wrapper.find('.ay-select .ay-input__inner .ay-select__input')
                .element as HTMLInputElement;

            expect(inputElement.value).toEqual('3');

            await wrapper.setProps({
                pageSize: 15,
            });

            expect(inputElement.value).toEqual('15');
        });

        it('that affects how pagination info works', async () => {
            const wrapper = mountPaginationLayout();
            const paginationInfoWrapper = wrapper.find('.ay-pagination-layout__info');

            expect(paginationInfoWrapper.text()).toEqual('Showing 1-5 of 30');

            await wrapper.setProps({
                pageSize: 15,
            });

            expect(paginationInfoWrapper.text()).toEqual('Showing 1-15 of 30');
        });
    });

    describe('has select field', () => {
        it('that emits event to change pageSize', () => {
            const wrapper = mountPaginationLayout();
            const selectWrapper = wrapper.findComponent('.ay-select') as any;

            expect(wrapper.emitted('update:pageSize')).toBeUndefined();

            selectWrapper.componentVM.$emit('update:modelValue', 3);

            expect(wrapper.emitted('update:pageSize')).toEqual([[3]]);
        });
    });
});
