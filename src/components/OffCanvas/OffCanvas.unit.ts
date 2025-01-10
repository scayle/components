import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

import OffCanvas from './OffCanvas.vue';

const _close = HTMLDialogElement.prototype.close;
const _show = HTMLDialogElement.prototype.show;
const _showModal = HTMLDialogElement.prototype.showModal;

describe('OffCanvas.vue', () => {
    beforeAll(() => {
        HTMLDialogElement.prototype.close = () => {};
        HTMLDialogElement.prototype.show = () => {};
        HTMLDialogElement.prototype.showModal = () => {};
    });

    it('should populate the header title with the title prop', async () => {
        const wrapper = await mount(OffCanvas);

        expect(wrapper.find('.ay-off-canvas__header-title').text()).toEqual('Title');

        await wrapper.setProps({
            title: 'Hello, world!',
        });

        expect(wrapper.find('.ay-off-canvas__header-title').text()).toEqual('Hello, world!');
    });

    it('should render the default slot content', async () => {
        const wrapper = await mount(OffCanvas, {
            slots: {
                default: '<div class="px-4 py-2">Modal Body</div>',
            },
        });

        expect(wrapper.find('.ay-off-canvas__body').html()).toContain('<div class="px-4 py-2">Modal Body</div>');
    });

    it('should support replacing the header content via a slot', async () => {
        const wrapper = await mount(OffCanvas, {
            slots: {
                header: '<div>Footer</div>',
            },
        });

        expect(wrapper.find('.ay-off-canvas__header').html()).toContain('<div>Footer</div>');
    });

    it('should support replacing the footer content via a slot', async () => {
        const wrapper = await mount(OffCanvas, {
            slots: {
                footer: '<div>Footer</div>',
            },
        });

        expect(wrapper.find('.ay-off-canvas__footer').html()).toContain('<div>Footer</div>');
    });

    it('should not have a footer by default', async () => {
        const wrapper = await mount(OffCanvas);

        expect(wrapper.find('.ay-off-canvas__footer').exists()).toBe(false);
    });

    it('should close when the close button is clicked', async () => {
        const wrapper = await mount(OffCanvas, {
            props: {
                visible: true,
            },
        });

        await wrapper.find('.ay-off-canvas__close-btn').trigger('click');

        expect(wrapper.emitted('update:visible')?.[0]).toEqual([false]);
    });

    it('should close on an external cancel event', async () => {
        const wrapper = await mount(OffCanvas, {
            props: {
                visible: true,
            },
        });

        await wrapper.find('dialog').trigger('cancel');

        expect(wrapper.emitted('update:visible')?.[0]).toEqual([false]);
    });

    it('should close on a backdrop click event', async () => {
        const wrapper = await mount(OffCanvas, {
            props: {
                visible: true,
            },
        });

        await wrapper.find('dialog').trigger('click');

        expect(wrapper.emitted('update:visible')?.[0]).toEqual([false]);
    });

    afterAll(() => {
        HTMLDialogElement.prototype.close = _close;
        HTMLDialogElement.prototype.show = _show;
        HTMLDialogElement.prototype.showModal = _showModal;
    });
});
