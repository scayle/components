/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import ModalButton from './ModalButton.vue';

describe('ModalButton.vue', () => {
    describe('has a variant prop', () => {
        it('that should be either cancel or submit', () => {
            expect(ModalButton.props.variant.validation('cancel')).toBeTruthy();
            expect(ModalButton.props.variant.validation('submit')).toBeTruthy();
            expect(ModalButton.props.variant.validation('delete')).toBeTruthy();
        });

        it('that should fail if other values are passed', () => {
            expect(ModalButton.props.variant.validation('test')).toBeFalsy();
        });

        it('that is cancel by default', () => {
            const wrapper = mount(ModalButton);

            expect(wrapper.props().variant).toEqual('cancel');
        });

        it('that decides which class we use based on the variant', async () => {
            const wrapper = mount(ModalButton);

            expect(wrapper.classes()).toContain('ay-modal__cancel-button');

            wrapper.setProps({
                variant: 'submit',
            });

            await nextTick();

            expect(wrapper.classes()).toContain('ay-modal__submit-button');
        });
    });

    describe('has a text prop', () => {
        it('that has a default based on variant', async () => {
            const wrapper = mount(ModalButton);

            expect(wrapper.find('span').text()).toEqual('Cancel');

            wrapper.setProps({
                variant: 'submit',
            });

            await nextTick();

            expect(wrapper.find('span').text()).toEqual('Submit');

            wrapper.setProps({
                variant: 'delete',
            });

            await nextTick();

            expect(wrapper.find('span').text()).toEqual('Delete');
        });

        it('that can be set', () => {
            const wrapper = mount(ModalButton, {
                props: {
                    text: 'Hello World!',
                },
            });

            expect(wrapper.find('span').text()).toEqual('Hello World!');
        });
    });

    describe('has a submitting prop', () => {
        it('that defaults to false', () => {
            const wrapper = mount(ModalButton, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.find(':scope > span:not(.spinner)').exists()).toBeTruthy();
            expect(wrapper.find(':scope > span.spinner').exists()).toBeFalsy();
        });

        it('that can be set and shows a spinner', () => {
            const wrapper = mount(ModalButton, {
                props: {
                    submitting: true,
                },
            });

            expect(wrapper.find(':scope > span:not(.spinner)').exists()).toBeFalsy();
            expect(wrapper.find(':scope > span.spinner').exists()).toBeTruthy();
        });
    });
});
