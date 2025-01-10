/**
 * External dependencies.
 */
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';

/**
 * Internal dependencies.
 */
import BaseModal from './BaseModal.vue';

describe('BaseModal.vue', () => {
    beforeEach(() => {
        HTMLDialogElement.prototype.show = vi.fn();
        HTMLDialogElement.prototype.showModal = vi.fn();
        HTMLDialogElement.prototype.close = function() {
            this.dispatchEvent(new Event('cancel'));
        };
    });

    it('renders to the default slot', () => {
        const wrapper = mount(BaseModal, {
            slots: {
                default: '<p>Some Text</p>',
            },
            props: {
                visible: true,
            },
        });

        expect(wrapper.element.innerHTML).toEqual('<p>Some Text</p>');
    });

    it('emits update:visible when something happens to the dialog', () => {
        const wrapper = mount(BaseModal, {
            props: {
                visible: true,
            },
        });

        expect(wrapper.emitted()['update:visible']).toBeFalsy();

        wrapper.trigger('cancel');

        expect(wrapper.emitted()['update:visible']).toBeTruthy();
        expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
    });

    it('emits events when the dialog is being closed', () => {
        const wrapper = mount(BaseModal, {
            props: {
                visible: true,
            },
        });

        expect(wrapper.emitted().cancel).toBeFalsy();
        expect(wrapper.emitted()['update:visible']).toBeFalsy();

        wrapper.trigger('cancel');

        expect(wrapper.emitted().cancel).toBeTruthy();
        expect(wrapper.emitted()['update:visible']).toBeTruthy();
        expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
    });

    it('emits events when submit function is called from the scoped slot', () => {
        const wrapper = mount(BaseModal, {
            slots: {
                default: `
                    <template #default="{ submit }">
                        <button class="submit" @click="submit">Submit</button>
                    </template>
                `,
            },
            props: {
                visible: true,
            },
        });

        expect(wrapper.emitted().submit).toBeFalsy();
        expect(wrapper.emitted()['update:visible']).toBeFalsy();

        wrapper.find('.submit').trigger('click');

        expect(wrapper.emitted().submit).toBeTruthy();
        expect(wrapper.emitted()['update:visible']).toBeTruthy();
        expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
    });

    it('emits events when cancel function is called from the scoped slot', () => {
        const wrapper = mount(BaseModal, {
            slots: {
                default: `
                    <template #default="{ cancel }">
                        <button class="cancel" @click="cancel">Cancel</button>
                    </template>
                `,
            },
            props: {
                visible: true,
            },
        });

        expect(wrapper.emitted().cancel).toBeFalsy();
        expect(wrapper.emitted()['update:visible']).toBeFalsy();

        wrapper.find('.cancel').trigger('click');

        expect(wrapper.emitted().cancel).toBeTruthy();
        expect(wrapper.emitted()['update:visible']).toBeTruthy();
        expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
    });

    describe('has disableCancelling prop', () => {
        it('that is off by default', () => {
            const wrapper = mount(BaseModal, {
                slots: {
                    default: `
                    <template #default="{ cancel }">
                        <button class="cancel" @click="cancel">Cancel</button>
                    </template>
                `,
                },
                props: {
                    visible: true,
                },
            });

            expect(wrapper.emitted().cancel).toBeFalsy();
            expect(wrapper.emitted()['update:visible']).toBeFalsy();

            wrapper.find('.cancel').trigger('click');

            expect(wrapper.emitted().cancel).toBeTruthy();
            expect(wrapper.emitted()['update:visible']).toBeTruthy();
            expect(wrapper.emitted()['update:visible']).toEqual([[false]]);
        });

        it('that does not allow to emit cancel event if true', () => {
            const wrapper = mount(BaseModal, {
                slots: {
                    default: `
                    <template #default="{ cancel }">
                        <button class="cancel" @click="cancel">Cancel</button>
                    </template>
                `,
                },
                props: {
                    visible: true,
                    disableCancelling: true,
                },
            });

            expect(wrapper.emitted().cancel).toBeFalsy();
            expect(wrapper.emitted()['update:visible']).toBeFalsy();

            wrapper.find('.cancel').trigger('click');

            expect(wrapper.emitted().cancel).toBeFalsy();
            expect(wrapper.emitted()['update:visible']).toBeFalsy();
        });
    });
});
