import { describe, expect, it } from 'vitest';
import { defineComponent, onBeforeUnmount } from 'vue';
import { mount } from '@vue/test-utils';
import { useNotification } from '.';

const component = defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },

        subtitle: {
            type: String,
            default: '',
        },

        type: {
            type: String,
            default: 'info',
        },
    },

    setup(props) {
        const notificator = useNotification();
        const trigger = () => {
            notificator[props.type as keyof typeof notificator](props.title, props.subtitle);
        };

        onBeforeUnmount(() => notificator.clear());

        return {
            trigger,
            clear: () => notificator.clear(),
        };
    },

    template: `
        <div class="p-16 flex flex-col items-start space-y-6">
            <button class="btn-trigger" @click="trigger">Trigger</button>
            <button class="btn-clear" @click="clear">Clear notifications</button>
        </div>
    `,
});

describe('Notification.vue', () => {
    const toastSelector = '.ay-notification__item';

    it('should display an notification popup containing the title', async () => {
        const wrapper = mount(component, {
            props: {
                title: 'Info',
                subtitle: 'Hello world',
            },
        });

        await wrapper.find('.btn-trigger').trigger('click');

        const toastContainer = document.querySelector(toastSelector);
        expect(toastContainer?.querySelector('.ay-notification__title')?.textContent).toEqual('Info');
    });

    it('should display an notification popup containing the message', async () => {
        const wrapper = mount(component, {
            props: {
                title: 'Info',
                subtitle: 'Hello world',
            },
        });

        await wrapper.find('.btn-trigger').trigger('click');

        const toastContainer = document.querySelector(toastSelector);
        expect(toastContainer?.querySelector('.ay-notification__subtitle')?.textContent).toEqual('Hello world');
    });

    [
        {
            type: 'info',
            expectedClasses: ['bg-blue', 'shadow-blue'],
        },

        {
            type: 'success',
            expectedClasses: ['bg-success', 'shadow-success'],
        },

        {
            type: 'warning',
            expectedClasses: ['bg-warning', 'shadow-warning'],
        },

        {
            type: 'error',
            expectedClasses: ['bg-danger', 'shadow-danger'],
        },
    ].forEach(({ type, expectedClasses }) => {
        it(`should display the correct icon for type ${type}`, async () => {
            const wrapper = mount(component, {
                props: {
                    title: 'Info',
                    subtitle: 'Hello world',
                    type,
                },
            });

            await wrapper.find('.btn-trigger').trigger('click');

            const toastContainer = document.querySelector(toastSelector);
            const iconClass = '.ay-notification__icon.' + expectedClasses.join('.');
            const icon = toastContainer?.querySelector(iconClass);

            expect(icon).toBeTruthy();
        });
    });
});
