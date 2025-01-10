/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { VueWrapper } from '@vue/test-utils';

/**
 * Internal dependencies.
 */
import DangerousActionModal from './DangerousActionModal.vue';

const setAcknowledgement = (wrapper: VueWrapper<any>, value: boolean) => {
    const checkboxInputWrapper = wrapper.find('.ay-dangerous-modal__acknowledge input');

    (checkboxInputWrapper.element as HTMLInputElement).checked = value;
    checkboxInputWrapper.trigger('change');

    return wrapper;
};

const setConfirmationInput = (wrapper: VueWrapper<any>, value: string) => {
    const checkboxInputWrapper = wrapper.find('.ay-dangerous-modal__confirm-input');

    (checkboxInputWrapper.element as HTMLInputElement).value = value;
    checkboxInputWrapper.trigger('input');

    return wrapper;
};

describe('DangerousActionModal.vue', () => {
    beforeEach(() => {
        HTMLDialogElement.prototype.show = vi.fn();
        HTMLDialogElement.prototype.showModal = vi.fn();
        HTMLDialogElement.prototype.close = function() {
            this.dispatchEvent(new Event('cancel'));
        };
    });

    describe('emits update visible event', () => {
        it('when close button is clicked', () => {
            const wrapper = mount(DangerousActionModal, {
                props: {
                    visible: true,
                    deletedItemName: 'test',
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('update:visible');

            wrapper.find('.ay-modal__close-btn').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('update:visible');
            expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
        });

        it('when back to safety button is clicked', () => {
            const wrapper = mount(DangerousActionModal, {
                props: {
                    visible: true,
                    deletedItemName: 'test',
                },
            });

            expect(wrapper.emitted()).not.toHaveProperty('update:visible');

            wrapper.find('.ay-modal__cancel-button').trigger('click');

            expect(wrapper.emitted()).toHaveProperty('update:visible');
            expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
        });
    });

    describe('has a title prop', () => {
        it('that can be set', () => {
            const wrapper = mount(DangerousActionModal, {
                props: {
                    visible: true,
                    title: 'Some title',
                    deletedItemName: 'test',
                },
            });

            expect(wrapper.find('.ay-modal__header-title').text()).toEqual('Some title');
        });

        it('that shows a default if not set', () => {
            const wrapper = mount(DangerousActionModal, {
                props: {
                    visible: true,
                    deletedItemName: 'test',
                },
            });

            expect(wrapper.find('.ay-modal__header-title').text()).toEqual('Danger!');
        });

        it('that shows the title element even when it is empty', () => {
            const wrapper = mount(DangerousActionModal, {
                props: {
                    title: '',
                    visible: true,
                    deletedItemName: 'test',
                },
            });

            expect(wrapper.find('.ay-modal__header-title').exists()).toBeTruthy();
        });
    });

    describe('has a deletedItemName prop', () => {
        it('that is required', () => {
            expect(DangerousActionModal.props.deletedItemName.required).toBeTruthy();
        });

        it('that when set is displayed in tip container', () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.find('.ay-dangerous-modal__confirm-tip strong').text()).toEqual('Testing');
        });

        it('that when set is displayed on the delete button', () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.find('.ay-modal__delete-button').text()).toEqual('Delete Testing');
        });
    });

    describe('has a hideItemName prop', () => {
        it('that hides the deletedItemName from the delete button', () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    hideItemName: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.find('.ay-modal__delete-button').text()).toEqual('Delete');
        });
    });

    describe('has delete confirmation logic', () => {
        it('that disables the button if none of the requirements are met', () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.find('.ay-modal__delete-button').attributes()).toHaveProperty('disabled');
        });

        it('that does not enable the button if the acknowledgement requirement is met, but not the input confirmation', async () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            setAcknowledgement(wrapper, true);

            await nextTick();

            setConfirmationInput(wrapper, 'Test');

            await nextTick();

            // only half of the requirements met, so we are still disabled
            expect(wrapper.find('.ay-modal__delete-button').attributes()).toHaveProperty('disabled');
        });

        it('that enables the button when all of the criteria are met', async () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.find('.ay-modal__delete-button').attributes()).toHaveProperty('disabled');

            setConfirmationInput(wrapper, 'Testing');

            await nextTick();

            // only half of the requirements met, so we are still disabled
            expect(wrapper.find('.ay-modal__delete-button').attributes()).toHaveProperty('disabled');

            setAcknowledgement(wrapper, true);

            await nextTick();

            // button should not be disabled anymore
            expect(wrapper.find('.ay-modal__delete-button').attributes()).not.toHaveProperty('disabled');
        });
    });

    describe('emits cancel event', () => {
        it('when back to safety button is clicked', () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.emitted('cancel')).toBeUndefined();

            wrapper.find('.ay-modal__cancel-button').trigger('click');

            expect(wrapper.emitted('cancel')).not.toBeUndefined();
        });

        it('when warning icon is clicked', () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.emitted('cancel')).toBeUndefined();

            wrapper.find('.ay-dangerous-modal__warning-header > div').trigger('click');

            expect(wrapper.emitted('cancel')).not.toBeUndefined();
        });
    });

    describe('emits confirm event', () => {
        it('when deleted button is clicked', async () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.emitted('confirm')).toBeUndefined();

            setAcknowledgement(wrapper, true);
            setConfirmationInput(wrapper, 'Testing');

            await nextTick();

            wrapper.find('.ay-modal__delete-button').trigger('click');

            expect(wrapper.emitted('confirm')).not.toBeUndefined();
        });
    });

    describe('emits hide event', () => {
        it('whenever cancel event is triggered', () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.emitted('hide')).toBeUndefined();

            wrapper.find('.ay-modal__cancel-button').trigger('click');

            expect(wrapper.emitted('hide')).not.toBeUndefined();
            expect(wrapper.emitted('hide')).toEqual([[false]]);
        });

        it('whenever confirm event is triggered', async () => {
            const wrapper = mount(DangerousActionModal, {
                propsData: {
                    visible: true,
                    deletedItemName: 'Testing',
                },
            });

            expect(wrapper.emitted('hide')).toBeUndefined();

            setAcknowledgement(wrapper, true);
            setConfirmationInput(wrapper, 'Testing');

            await nextTick();

            wrapper.find('.ay-modal__delete-button').trigger('click');

            expect(wrapper.emitted('hide')).not.toBeUndefined();
            expect(wrapper.emitted('hide')).toEqual([[true]]);
        });
    });
});
