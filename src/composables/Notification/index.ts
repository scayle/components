import './style.css';
import { useCurrentElement } from '@vueuse/core';
import { getCurrentInstance } from 'vue';
import Notification from './Notification.vue';
import { createComponent } from '@/utils';
import type { NotificationProps, NotificationType } from '@/composables/Notification/NotificationTypes';
import useInternalBusEvent from '@/composables/useInternalBusEvent';
import { InternalBusEvent } from '@/enums/InternalBusEvent';
import useNodeRootElement from '@/composables/useNodeRootElement';

interface NotificationPropsWithData extends NotificationProps {
    title: string;
    subtitle?: string;
}

const useNotificationController = (globalProps = {}) => {
    const { trigger } = useInternalBusEvent();
    const component = getCurrentInstance();

    // We need the composable to be used inside a component, or we will have problems if people use Shadow DOM
    // This is due to that we rely on the current component's HTMLElement to determine the root of the DOM tree.
    if (!component) {
        throw new Error('Notificator can only be used inside components!');
    }

    const currentElement = useCurrentElement<HTMLElement>();
    const { rootElement } = useNodeRootElement(currentElement);
    const open = (options: NotificationPropsWithData) => {
        const props = {
            ...globalProps,
            ...options,
        };
        const instance = createComponent({
            props,
            component: Notification,
            attachTo: rootElement.value || document.body,
        });

        if (!instance) {
            throw new Error('Failed to create notification instance!');
        }

        return {
            dismiss: (instance as any)?.ctx?.dismiss,
        };
    };
    const createShortcut =
        (type: NotificationType) =>
        (title: string, subtitle: string = '', options: NotificationProps) =>
            open({
                ...options,
                title,
                subtitle,
                type,
            });

    return {
        open,
        success: createShortcut('success'),
        error: createShortcut('error'),
        info: createShortcut('info'),
        warning: createShortcut('warning'),
        default: createShortcut('default'),
        clear: () => trigger(InternalBusEvent.CLOSE_NOTIFICATIONS),
    };
};

export const useNotification = () => {
    const toast = useNotificationController();

    const createShortcut =
        (type: NotificationType) =>
        (title: string, subtitle: string, config: NotificationProps = {}) =>
            toast[type](title, subtitle, config);

    return {
        info: createShortcut('info'),
        success: createShortcut('success'),
        warning: createShortcut('warning'),
        error: createShortcut('error'),
        clear: toast.clear,
    };
};
