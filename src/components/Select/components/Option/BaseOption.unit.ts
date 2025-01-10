import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import createStore from '../../stores/BaseSelectStore';
import BaseOption from './BaseOption.vue';
import SingleSelectStore from '@/components/Select/stores/SingleSelectStore';

describe('BaseOption.vue', () => {
    let selectStore: any;

    beforeEach(() => {
        selectStore = createStore(new SingleSelectStore());
    });

    it('should render based on the tag prop (or div by default)', async () => {
        const wrapper = mount(BaseOption, {
            props: {
                value: 'None',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        expect(wrapper.element.nodeName).toBe('DIV');

        await wrapper.setProps({
            tag: 'span',
        });

        expect(wrapper.element.nodeName).toBe('SPAN');
    });

    it('should add the option on mount', async () => {
        const addOptionSpy = vi.spyOn(selectStore, 'addOption');

        mount(BaseOption, {
            props: {
                value: 'None',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        expect(addOptionSpy).toHaveBeenCalled();
    });

    it('should remove the option on unmount', async () => {
        const removeOptionSpy = vi.spyOn(selectStore, 'removeOption');

        const wrapper = mount(BaseOption, {
            props: {
                value: 'None',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        await wrapper.unmount();

        expect(removeOptionSpy).toHaveBeenCalled();
    });

    it('should call select on click', async () => {
        const spy = vi.spyOn(selectStore, 'selectOption');

        const wrapper = mount(BaseOption, {
            props: {
                value: 'None',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        await wrapper.trigger('click');

        expect(spy).toHaveBeenCalled();
    });

    it('should call setActive on mouseenter', async () => {
        const spy = vi.spyOn(selectStore, 'setActive');

        const wrapper = mount(BaseOption, {
            props: {
                value: 'None',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        await wrapper.trigger('mouseenter');

        expect(spy).toHaveBeenCalled();
    });
});
