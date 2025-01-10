/**
 * External dependencies.
 */
import { mount } from '@vue/test-utils';
import { it, describe, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import EntityList from './EntityList.vue';

describe('EntityList.vue', () => {
    it('does not show load more section when prop is set to false', () => {
        const wrapper = mount(EntityList);

        expect(wrapper.find('.ay-entity-list__load-more').exists()).toBeFalsy();
    });

    it('shows load more section when prop is set to true', () => {
        const wrapper = mount(EntityList, {
            props: {
                canLoadMore: true,
            },
        });

        expect(wrapper.find('.ay-entity-list__load-more').exists()).toBeTruthy();
    });

    it('shows load more button when we are not loading', () => {
        const wrapper = mount(EntityList, {
            props: {
                canLoadMore: true,
                loading: false,
            },
        });

        expect(wrapper.find('.ay-entity-list__button').exists()).toBeTruthy();
        expect(wrapper.find('.spinner').exists()).toBeFalsy();
    });

    it('shows load more button when we are not loading', () => {
        const wrapper = mount(EntityList, {
            props: {
                canLoadMore: true,
                loading: true,
            },
        });

        expect(wrapper.find('.ay-entity-list__button').exists()).toBeFalsy();
        expect(wrapper.find('.spinner').exists()).toBeTruthy();
    });
});
