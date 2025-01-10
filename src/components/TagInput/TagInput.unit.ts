import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import TagInput from './TagInput.vue';

describe('TagInput.vue', () => {
    it('should render a tag for each value', async () => {
        const wrapper = mount(TagInput, {
            props: {
                modelValue: ['1', '2', '3'],
            },
        });

        expect(wrapper.findAll('.ay-tag').length).toBe(3);

        await wrapper.setProps({ modelValue: [] });

        expect(wrapper.findAll('.ay-tag').length).toBe(0);
    });

    it('should render tags with the specified type class', async () => {
        const wrapper = mount(TagInput, {
            props: {
                modelValue: ['1', '2', '3'],
                tagType: 'danger',
            },
        });

        expect(wrapper.findAll('.ay-tag.ay-tag--danger').length).toBe(3);
    });

    it('should show more or fewer items when clicking the see-more toggle', async () => {
        const limit = 15;
        const items = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
        ];

        const wrapper = mount(TagInput, {
            props: {
                modelValue: items,
            },
        });

        expect(wrapper.findAll('.ay-tag').length).toBe(limit + 1);

        await wrapper.find('.ay-tag:last-child').trigger('click');

        expect(wrapper.findAll('.ay-tag').length).toBe(items.length + 1);

        await wrapper.find('.ay-tag:last-child').trigger('click');

        expect(wrapper.findAll('.ay-tag').length).toBe(limit + 1);
    });

    it('should add tags from the text field (comma-separated)', async () => {
        const wrapper = mount(TagInput, {
            props: {
                modelValue: [],
            },
        });

        const input = wrapper.find('input');

        await input.setValue('1,2,3');

        const emittedEvents = wrapper.emitted('update:modelValue');

        expect(emittedEvents?.length).toBe(1);
        expect(emittedEvents?.[0]).toEqual([['1', '2', '3']]);
    });

    it('should add tags from the text field (space-separated)', async () => {
        const wrapper = mount(TagInput, {
            props: {
                modelValue: [],
            },
        });

        const input = wrapper.find('input');

        await input.setValue('1 2 3');

        const emittedEvents = wrapper.emitted('update:modelValue');

        expect(emittedEvents?.length).toBe(1);
        expect(emittedEvents?.[0]).toEqual([['1', '2', '3']]);
    });

    it('should remove a tag when clicking the close button', async () => {
        const wrapper = mount(TagInput, {
            props: {
                modelValue: ['1', '2', '3'],
            },
        });

        await wrapper.find('.ay-tag:last-child .ay-tag__close-btn').trigger('click');

        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['1', '2']]);
    });
});
