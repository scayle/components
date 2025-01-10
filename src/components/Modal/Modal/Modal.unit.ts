/**
 * External dependencies.
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';

/**
 * Internal dependencies.
 */
import Modal from './Modal.vue';

describe('Modal.vue', () => {
    beforeEach(() => {
        HTMLDialogElement.prototype.show = vi.fn();
        HTMLDialogElement.prototype.showModal = vi.fn();
        HTMLDialogElement.prototype.close = function() {
            this.dispatchEvent(new Event('cancel'));
        };
    });

    it('renders to the default slot', () => {
        const wrapper = mount(Modal, {
            props: {
                visible: true,
            },
            slots: {
                default: '<p>Some Text</p>',
            },
        });

        expect(wrapper.find('.ay-modal__body').element.innerHTML).toEqual('<p>Some Text</p>');
    });

    describe('emits update visible event', () => {
        it('when close button is clicked', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('update:visible');

            wrapper.find('.ay-modal__close-btn').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('update:visible');
            expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
        });

        it('when cancel button is clicked', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('update:visible');

            wrapper.find('.ay-modal__cancel-button').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('update:visible');
            expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
        });

        it('when submit button is clicked', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('update:visible');

            wrapper.find('.ay-modal__submit-button').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('update:visible');
            expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
        });
    });

    describe('emits cancel event', () => {
        it('when close button is clicked', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('cancel');

            wrapper.find('.ay-modal__close-btn').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('cancel');
        });

        it('when cancel button is clicked', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('cancel');

            wrapper.find('.ay-modal__cancel-button').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('cancel');
            expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
        });
    });

    describe('emits submit event', () => {
        it('when submit button is clicked', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('submit');

            wrapper.find('.ay-modal__submit-button').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('submit');
        });
    });

    describe('has a title prop', () => {
        it('that can be set', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                    title: 'Some title',
                },
            });

            expect(wrapper.find('.ay-modal__header-title').text()).toEqual('Some title');
        });

        it('that shows a default if not set', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.find('.ay-modal__header-title').text()).toEqual('Title');
        });

        it('that shows the title element even when it is empty', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                    title: '',
                },
            });

            expect(wrapper.find('.ay-modal__header-title').exists()).toBeTruthy();
        });
    });

    describe('has a cancelText prop', () => {
        it('that can be set', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                    cancelText: 'Cancel text',
                },
            });

            expect(wrapper.find('.ay-modal__cancel-button span').text()).toEqual('Cancel text');
        });

        it('that shows default if not set', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.find('.ay-modal__cancel-button span').text()).toEqual('Cancel');
        });

        it('that shows the button element even when it is empty', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                    cancelText: '',
                },
            });

            expect(wrapper.find('.ay-modal__cancel-button span').exists()).toBeTruthy();
        });
    });

    describe('has a submitText prop', () => {
        it('that can be set', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                    submitText: 'Submit text',
                },
            });

            expect(wrapper.find('.ay-modal__submit-button span').text()).toEqual('Submit text');
        });

        it('that shows a default if not set', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.find('.ay-modal__submit-button span').text()).toEqual('Submit');
        });

        it('that shows the button element even when it is empty', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                    submitText: '',
                },
            });

            expect(wrapper.find('.ay-modal__submit-button span').exists()).toBeTruthy();
        });
    });

    describe('has a submitting prop', () => {
        it('that defaults to false', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                },
            });

            expect(wrapper.find('.ay-modal__submit-button > span:not(.spinner)').exists()).toBeTruthy();
            expect(wrapper.find('.ay-modal__submit-button > span.spinner').exists()).toBeFalsy();
        });

        it('that can be set and shows spinner on submit button', () => {
            const wrapper = mount(Modal, {
                props: {
                    visible: true,
                    submitting: true,
                },
            });

            expect(wrapper.find('.ay-modal__submit-button > span:not(.spinner)').exists()).toBeFalsy();
            expect(wrapper.find('.ay-modal__submit-button > span.spinner').exists()).toBeTruthy();
        });
    });
});
