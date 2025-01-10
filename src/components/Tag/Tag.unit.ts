import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Tag from './Tag.vue';

describe('Tag.vue', () => {
    it('renders the slot content', () => {
        const wrapper = mount(Tag, {
            slots: {
                default: 'Moin',
            },
        });

        expect(wrapper.text()).toBe('Moin');
    });

    it('shows a close button when the prop is enabled', async () => {
        const wrapper = mount(Tag, {
            props: {
                closable: true,
            },
        });

        expect(wrapper.find('.ay-tag__close-btn').exists()).toBe(true);

        await wrapper.setProps({ closable: false });

        expect(wrapper.find('.ay-tag__close-btn').exists()).toBe(false);
    });

    it('emits an event when clicking the close button', () => {
        const wrapper = mount(Tag, {
            props: {
                closable: true,
            },
        });

        wrapper.find('.ay-tag__close-btn').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('close');
    });

    it('adds the correct class based on the tag type', async () => {
        const wrapper = mount(Tag);

        expect(wrapper.find('.ay-tag--default').exists()).toBe(true);

        for (const type of ['info', 'success', 'warning', 'danger']) {
            await wrapper.setProps({ type });
            expect(wrapper.find('.ay-tag--' + type).exists()).toBe(true);
        }
    });
});
