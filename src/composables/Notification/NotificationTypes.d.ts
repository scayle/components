export type NotificationType = 'success' | 'info' | 'error' | 'warning' | 'default';

export interface NotificationProps {
    type?: NotificationType;
    duration?: number;
    dismissible?: boolean;
    queue?: boolean;
    pauseOnHover?: boolean;
    onClick?: () => any;
    onDismiss?: () => any;
}
