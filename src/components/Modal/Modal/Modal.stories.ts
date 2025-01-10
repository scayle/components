/**
 * External dependencies.
 */
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

/**
 * Internal dependencies.
 */
import readme from '../README.md';
import Modal from './Modal.vue';

export default {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        visible: {
            description: 'boolean value to show/hide the modal',
        },

        title: {
            description: 'the title of the modal',
        },

        cancelText: {
            description: 'used to override the text inside of the cancel button',
        },

        submitText: {
            description: 'used to override the text inside of the submit button',
        },

        width: {
            description: 'controls the width of the modal (for example `50%` or `200px`)',
        },

        submitting: {
            description: 'a boolean to control the loading state of the modal and prevent interaction/closing',
        },

        submit: {
            description: 'an event triggered after the user clicked on the submit button',
        },

        cancel: {
            description: 'an event triggered after the user clicked on the cancel button',
        },

        footer: {
            description: 'the slot used to override the content of the modal footer and provide custom buttons',
        },
    },
};

const Template = (args: any) => ({
    components: { Modal },

    setup() {
        const visible = ref(args.visible);
        const onVisibleUpdate = action('update:visible');

        return {
            args,
            visible,
            onVisibleUpdate,
        };
    },

    template: `
    <div class="flex items-center justify-center h-32">
        <button class="btn btn-primary" @click="visible = true">Open Modal</button>
        <Modal
            v-bind="args"
            v-on="args"
            v-model:visible="visible"
            @update:visible="onVisibleUpdate"
        >
        Modal Body
        </Modal>
    </div>`,
});

export const Default = Template.bind({});
