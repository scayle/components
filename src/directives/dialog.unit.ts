/* eslint-disable vue/one-component-per-file */
import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, test } from 'vitest';

import { vDialog } from './dialog';

describe('v-dialog directive', () => {
    test('should open the dialog when the value is truthy', async () => {
        const component = defineComponent({
            directives: {
                dialog: vDialog,
            },
            data() {
                return { value: true };
            },
            template: '<dialog v-dialog="value"></dialog>',
        });

        const mockShow = vi.fn();
        HTMLDialogElement.prototype.show = mockShow;

        mount(component);
        expect(mockShow).toHaveBeenCalled();
    });

    test('should close the dialog when the value is is falsy', async () => {
        const component = defineComponent({
            directives: {
                dialog: vDialog,
            },
            data() {
                return { value: false };
            },
            template: '<dialog v-dialog="value"></dialog>',
        });

        const mockClose = vi.fn();
        HTMLDialogElement.prototype.close = mockClose;

        mount(component);
        expect(mockClose).toHaveBeenCalled();
    });

    test('should open the dialog with showModal when when the modifier is set', async () => {
        const component = defineComponent({
            directives: {
                dialog: vDialog,
            },
            data() {
                return { value: true };
            },
            template: '<dialog v-dialog.modal="value"></dialog>',
        });

        const mockShowModal = vi.fn();
        HTMLDialogElement.prototype.showModal = mockShowModal;

        mount(component);
        expect(mockShowModal).toHaveBeenCalled();
    });

    it('should open and close when the value changes', async () => {
        const component = defineComponent({
            directives: {
                dialog: vDialog,
            },
            data() {
                return { value: false };
            },
            template: '<dialog v-dialog.modal="value"></dialog>',
        });

        const mockShowModal = vi.fn();
        const mockClose = vi.fn();
        HTMLDialogElement.prototype.showModal = mockShowModal;
        HTMLDialogElement.prototype.close = mockClose;

        const wrapper = await mount(component);

        mockClose.mockReset();
        mockShowModal.mockReset();

        await wrapper.setData({ value: true });
        expect(mockShowModal).toHaveBeenCalled();

        await wrapper.setData({ value: false });
        expect(mockClose).toHaveBeenCalled();
    });
});
/* eslint-enable vue/one-component-per-file */
