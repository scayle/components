import readme from './README.md';
import { useNotification } from '.';

export default {
    title: 'Composables/useNotification',
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
};

export const Default = (args: any) => ({
    setup() {
        const notificator = useNotification();
        const showInfo = () => {
            notificator.info('Info', 'The export has been started and might take some minutes.');
        };

        const showSuccess = () => {
            notificator.success('Success', 'Field was saved successfully.');
        };

        const showWarning = () => {
            notificator.warning('Warning', 'Please make sure that every field is valid.');
        };

        const showError = () => {
            notificator.error('Error', 'Internal server error.');
        };

        const clear = () => {
            notificator.clear();
        };

        return {
            args: {
                ...args,
            },
            clear,
            showError,
            showSuccess,
            showWarning,
            showInfo,
        };
    },
    template: `
        <div class="p-16 flex flex-col items-start space-y-6">
            <button class="btn btn-primary" @click="showInfo">Show info</button>
            <button class="btn btn-primary" @click="showSuccess">Show success</button>
            <button class="btn btn-primary" @click="showWarning">Show warning</button>
            <button class="btn btn-primary" @click="showError">Show error</button>
            <button class="btn btn-primary" @click="clear">Clear notifications</button>
        </div>
    `,
});
