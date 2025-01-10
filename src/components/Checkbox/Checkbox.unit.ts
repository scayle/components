/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import Checkbox from './Checkbox.vue';

describe('Checkbox.vue', () => {
    describe('has modelValue prop', () => {
        it('that is false by default', () => {
            const wrapper = mount(Checkbox);

            expect(wrapper.find('.ay-checkbox').classes()).not.toContain('ay-checkbox--checked');
        });

        it('that sets the checked class to the container when true', () => {
            const wrapper = mount(Checkbox, {
                propsData: {
                    modelValue: true,
                },
            });

            expect(wrapper.find('.ay-checkbox').classes()).toContain('ay-checkbox--checked');
        });

        it("that doesn't set the checked class to the container when false", () => {
            const wrapper = mount(Checkbox, {
                propsData: {
                    modelValue: false,
                },
            });

            expect(wrapper.find('.ay-checkbox').classes()).not.toContain('ay-checkbox--checked');
        });

        it('that sets the input element checked attribute to true when true', () => {
            const wrapper = mount(Checkbox, {
                propsData: {
                    modelValue: true,
                },
            });
            const checkboxElement = wrapper.find('.ay-checkbox__original').element as HTMLInputElement;

            expect(checkboxElement.checked).toBeTruthy();
        });

        it('that sets the input element checked attribute to true when false', () => {
            const wrapper = mount(Checkbox);
            const checkboxElement = wrapper.find('.ay-checkbox__original').element as HTMLInputElement;

            expect(checkboxElement.checked).toBeFalsy();
        });

        it('that is reactive and can set the input element checked attribute after some time', async () => {
            const wrapper = mount(Checkbox);
            const checkboxElement = wrapper.find('.ay-checkbox__original').element as HTMLInputElement;

            expect(checkboxElement.checked).toBeFalsy();

            wrapper.setProps({
                modelValue: true,
            });

            await nextTick();

            expect(checkboxElement.checked).toBeTruthy();
        });
    });

    describe('has label prop', () => {
        it('that is empty by default', () => {
            const wrapper = mount(Checkbox);

            expect(wrapper.find('.ay-checkbox__label').exists()).toBeFalsy();
        });

        it('that can be set', () => {
            const wrapper = mount(Checkbox, {
                propsData: {
                    label: 'Testing',
                },
            });
            const labelWrapper = wrapper.find('.ay-checkbox__label');

            expect(labelWrapper.exists()).toBeTruthy();
            expect(labelWrapper.text()).toEqual('Testing');
        });
    });

    describe('has default slot', () => {
        it('that is empty by default', () => {
            const wrapper = mount(Checkbox);

            expect(wrapper.find('.ay-checkbox__label').exists()).toBeFalsy();
        });

        it('that can be set', () => {
            const slotContent = '<p>Testing</p>';
            const wrapper = mount(Checkbox, {
                slots: {
                    default: slotContent,
                },
            });
            const labelWrapper = wrapper.find('.ay-checkbox__label');

            // Label wrapper disappears because it is only for showing the label prop
            expect(labelWrapper.exists()).toBeFalsy();
            // check if the checkbox wrapper contains the default slot
            expect(wrapper.html()).toContain(slotContent);
        });

        it('that takes precedence over label prop', () => {
            const slotContent = '<p>Testing</p>';
            const wrapper = mount(Checkbox, {
                propsData: {
                    label: 'Hello',
                },

                slots: {
                    default: slotContent,
                },
            });
            const labelWrapper = wrapper.find('.ay-checkbox__label');

            expect(labelWrapper.exists()).toBeFalsy();
            expect(wrapper.html()).toContain(slotContent);
        });
    });

    describe('emits', () => {
        it('update:modelValue and change event when checkbox is clicked', () => {
            const wrapper = mount(Checkbox);
            const inputWrapper = wrapper.find('.ay-checkbox__original');

            (inputWrapper.element as HTMLInputElement).checked = true;
            inputWrapper.trigger('change');

            expect(wrapper.emitted('update:modelValue')).not.toBeUndefined();
            expect(wrapper.emitted('change')).not.toBeUndefined();

            expect(wrapper.emitted('update:modelValue')).toEqual([[true]]);
            expect(wrapper.emitted('change')).toEqual([[true]]);
        });
    });
});
