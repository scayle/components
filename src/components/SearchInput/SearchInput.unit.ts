import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import SearchInput from './SearchInput.vue';

describe('SearchInput.vue', () => {
    it('should fill the search field with the value prop', () => {
        const wrapper = mount(SearchInput, {
            props: {
                modelValue: 'Hello',
            },
        });

        expect(wrapper.find('input').element.value).toBe('Hello');
    });

    it('should update the modelValue when entering text', () => {
        const wrapper = mount(SearchInput);

        wrapper.find('input').setValue('foo');

        const updateEvent = wrapper.emitted('update:modelValue');

        expect(updateEvent).toHaveLength(1);
        expect(updateEvent?.[0]).toEqual(['foo']);
    });

    it('should show the loading icon when searching', async () => {
        const wrapper = mount(SearchInput, {
            props: {
                loading: true,
            },
        });

        expect(wrapper.find('.ay-search__loading-icon').exists()).toBe(true);
        expect(wrapper.find('.ay-search__search-icon').exists()).toBe(false);

        await wrapper.setProps({ loading: false });

        expect(wrapper.find('.ay-search__loading-icon').exists()).toBe(false);
        expect(wrapper.find('.ay-search__search-icon').exists()).toBe(true);
    });
});
