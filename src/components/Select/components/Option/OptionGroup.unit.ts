import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import OptionGroup from './OptionGroup.vue';

describe('OptionGroup.vue', () => {
    it('should render the title from the prop', async () => {
        const title = 'test title';
        const wrapper = mount(OptionGroup, {
            props: {
                title,
            },
        });

        expect(wrapper.find('.ay-option-group__title').text()).toEqual(title);
    });

    it('should render the title from the slot', async () => {
        const wrapper = mount(OptionGroup, {
            slots: {
                title: '<div class="my-title">test title</div>',
                default: '<ul><li>foo</li></ul>',
            },
        });

        expect(wrapper.find('.my-title').exists()).toBeTruthy();
        expect(wrapper.find('ul > li').text()).toEqual('foo');
    });
});
