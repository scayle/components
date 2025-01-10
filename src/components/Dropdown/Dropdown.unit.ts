/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { it, describe, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import Dropdown from './Dropdown.vue';

describe('Dropdown.vue', () => {
    it('renders', async () => {
        const wrapper = mount(Dropdown, {
            props: {
                appendToBody: false,
            },
        });

        expect(wrapper.find('.ay-dropdown').exists()).toBeTruthy();
    });

    it('can render content on dropdown', async () => {
        const wrapper = mount(Dropdown, {
            props: {
                appendToBody: false,
            },

            slots: {
                dropdown: `
                    <div class="dropdown-content">
                          <li class="dropdown-item-1">
                              Item 1
                          </li>

                          <li class="dropdown-item-2">
                              Item 2
                          </li>
                    </div>
                `,
            },
        });

        expect(wrapper.find('.dropdown-content').exists()).toBeTruthy();
        expect(wrapper.find('.dropdown-item-1').exists()).toBeTruthy();
    });

    it('emits click event when any item is clicked in dropdown', async () => {
        const wrapper = mount(Dropdown, {
            props: {
                appendToBody: false,
            },

            slots: {
                dropdown: `
                    <div class="dropdown-content">
                      <li class="dropdown-item-1">
                          Item 1
                      </li>

                      <li class="dropdown-item-2">
                          Item 2
                      </li>
                    </div>
                `,
            },
        });

        wrapper.find('.dropdown-item-1').trigger('click');

        await nextTick();

        expect(wrapper.emitted('click')).not.toBeUndefined();
        expect(wrapper.emitted('click')).toEqual([[]]);

        wrapper.find('.dropdown-item-2').trigger('click');

        await nextTick();

        expect(wrapper.emitted('click')).not.toBeUndefined();
        expect(wrapper.emitted('click')).toEqual([[], []]);
    });

    it('has onClick handler on slot to trigger on click event if needed', async () => {
        const wrapper = mount(Dropdown, {
            props: {
                appendToBody: false,
            },

            slots: {
                dropdown: `
                    <template #dropdown="{ onClick }">
                        <div class="dropdown-content">
                          <li @click.prevent.stop class="dropdown-item-1">
                              Item 1
                          </li>

                          <li @click.prevent.stop="onClick" class="dropdown-item-2">
                              Item 2
                          </li>
                        </div>
                    </template>
                `,
            },
        });

        wrapper.find('.dropdown-item-1').trigger('click');

        await nextTick();

        expect(wrapper.emitted('click')).toBeUndefined();

        wrapper.find('.dropdown-item-2').trigger('click');

        await nextTick();

        expect(wrapper.emitted('click')).not.toBeUndefined();
    });
});
