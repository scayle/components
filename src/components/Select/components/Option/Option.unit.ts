import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';

import createStore from '../../stores/BaseSelectStore';
import Option from './Option.vue';
import SingleSelectStore from '@/components/Select/stores/SingleSelectStore';

describe('Option.vue', () => {
    let selectStore: any;

    beforeEach(() => {
        selectStore = createStore(new SingleSelectStore());
    });

    it('should render the label from the prop', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
                label: 'my option',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        expect(wrapper.find('.ay-option__label').text()).toBe('my option');
    });

    it('should render the label from the default slot', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
            slots: {
                default: '<span>My Label</span>',
            },
        });

        expect(wrapper.find('.ay-option__label').html()).toBe(
            '<div class="ay-option__label"><span>My Label</span></div>'
        );
    });

    it('should render the hint from the prop', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
                hint: 'my hint',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        expect(wrapper.find('.ay-option__hint').text()).toBe('my hint');
    });

    it('should render the hint from the slot', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
            slots: {
                hint: '<span>My Hint</span>',
            },
        });

        expect(wrapper.find('.ay-option__hint').html()).toBe('<div class="ay-option__hint"><span>My Hint</span></div>');
    });

    it('should not render the hint if none is provided', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        expect(wrapper.find('.ay-option__hint').exists()).toBe(false);
    });

    it('should render the description from the prop', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
                description: 'my description',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        expect(wrapper.find('.ay-option__description').text()).toBe('my description');
    });

    it('should render the description from the slot', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
            slots: {
                description: '<span>My Description</span>',
            },
        });

        expect(wrapper.find('.ay-option__description').html()).toBe(
            '<div class="ay-option__description"><span>My Description</span></div>'
        );
    });

    it('should not render the description if none is provided', async () => {
        const wrapper = mount(Option, {
            props: {
                value: 'Test',
            },
            global: {
                provide: {
                    selectStore,
                },
            },
        });

        expect(wrapper.find('.ay-option__description').exists()).toBe(false);
    });

    // TODO: Icons
});
