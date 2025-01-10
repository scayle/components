/**
 * External dependencies.
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import FormField from './FormField.vue';

describe('FormField.vue', () => {
    it('should display name and value properly', () => {
        const modelValue = '42';
        const name = 'Answer to the Ultimate Question of Life, the Universe, and Everything';
        const wrapper = mount(FormField, {
            props: {
                name,
                modelValue,
            },
        });

        expect(wrapper.find('.label-text').element.innerHTML).toEqual(name);
        expect(wrapper.find('input').element.value).toEqual(modelValue);
    });

    it('should display placeholder and help text properly', () => {
        const helpText = 'This is a help text for the input field';
        const placeholder = 'User Id';
        const wrapper = mount(FormField, {
            props: {
                helpText,
                placeholder,
            },
        });

        expect(wrapper.find('.label-hint').element.innerHTML).toEqual(helpText);
        expect(wrapper.find('input').element.placeholder).toEqual(placeholder);
    });

    it('should display errors properly', () => {
        const errors = ['The given value is invalid'];
        const modelValue = '42';
        const wrapper = mount(FormField, {
            props: {
                errors,
                modelValue,
            },
        });

        expect(wrapper.find('.invalid-feedback').element.innerHTML).toEqual(errors[0]);
        expect(wrapper.find('input').element.value).toEqual(modelValue);
    });

    it('should display name and textarea properly with required sign', () => {
        const component = 'textarea';
        const modelValue = 'The description of a very well known product!\nA must have!';
        const name = 'Description';
        const rules = 'required';
        const expectedClassList = 'label-text is-required';
        const wrapper = mount(FormField, {
            props: {
                component,
                modelValue,
                name,
                rules,
            },
        });

        expect(wrapper.find('span').element.innerHTML).toEqual(name);
        expect(wrapper.find('span').element.classList.value).toEqual(expectedClassList);
        expect(wrapper.find('textarea').element.value).toEqual(modelValue);
    });

    it('should display textarea as disabled', () => {
        const component = 'textarea';
        const name = 'Description';
        const disabled = true;

        const wrapper = mount(FormField, {
            props: {
                component,
                name,
                disabled,
            },
        });

        expect(wrapper.find('span').element.innerHTML).toEqual(name);
        expect(wrapper.find('textarea').element.hasAttribute('disabled')).toEqual(disabled);
    });
});
