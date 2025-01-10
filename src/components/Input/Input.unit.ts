import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Input from './Input.vue';

describe('Input.vue', () => {
    it('should use the value from the value prop', async () => {
        const wrapper = await mount(Input, {
            props: {
                modelValue: 'test',
            },
        });

        expect(wrapper.element.querySelector('input')?.value).toBe('test');
    });

    it('should emit changes to value', async () => {
        const wrapper = await mount(Input, {
            props: {
                modelValue: 'test',
            },
        });

        const inputEl = wrapper.find('input');

        await inputEl.setValue('foo');

        const event = wrapper.emitted('update:modelValue');

        expect(event?.[0]).toEqual(['foo']);
    });

    it('should pass extra props to the <input> element', async () => {
        const wrapper = await mount(Input, {
            props: {
                modelValue: 'test',
                type: 'tel',
            },
        });

        expect(wrapper.html()).toContain('<input type="tel">');
    });

    it('should render prepend and append slots before and after the input', async () => {
        const wrapper = await mount(Input, {
            props: {
                modelValue: 'test',
            },
            slots: {
                prepend: '<span>before</span>',
                append: '<span>after</span>',
            },
        });

        expect(wrapper.html()).toContain('<div class="ay-input__append"><span>after</span></div>');
        expect(wrapper.html()).toContain('<div class="ay-input__prepend"><span>before</span></div>');
    });

    it('should render prefix and suffix slots', async () => {
        const wrapper = await mount(Input, {
            props: {
                modelValue: 'test',
            },
            slots: {
                prefix: 'prefix',
                suffix: 'suffix',
            },
        });

        expect(wrapper.html()).toContain(
            '<div class="ay-input__inner"><span class="ay-input__prefix">prefix</span><span class="ay-input__suffix">suffix</span><input></div>'
        );
    });

    it('should return false in the validator when we pass wrong size', async () => {
        expect(Input.props.size.validator('test')).toBeFalsy();
    });

    it.each(['small', 'normal'])('should return true in the validator when we pass correct size', size => {
        expect(Input.props.size.validator(size)).toBeTruthy();
    });
});
