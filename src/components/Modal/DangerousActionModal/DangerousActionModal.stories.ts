/**
 * External dependencies.
 */
import { ref } from 'vue';
import { userEvent } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';

/**
 * Internal dependencies.
 */
import DangerousActionModal from './DangerousActionModal.vue';

export default {
    title: 'Components/DangerousActionModal',
    component: DangerousActionModal,
    argTypes: {
        hide: { action: 'hide' },
        cancel: { action: 'cancel' },
        confirm: { action: 'confirm' },
    },
};

const Template = (args: any) => ({
    components: { DangerousActionModal },

    setup() {
        const visible = ref(args.visible);
        const onVisibleUpdate = action('update:visible');

        return {
            args,
            visible,
            onVisibleUpdate,
        };
    },

    template: `<DangerousActionModal
        v-bind="args"
        v-on="args"
        v-model:visible="visible"
        @update:visible="onVisibleUpdate"
    />`,
});

export const Default = Template.bind({});
Default.args = {
    visible: true,
    deletedItemName: 'Testing',
};

export const HiddenDeleteItemName = Template.bind({});
HiddenDeleteItemName.args = {
    visible: true,
    hideItemName: true,
    deletedItemName: 'Testing',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
    visible: true,
    title: 'Custom Title',
    deletedItemName: 'Testing',
};

export const AcknowledgedAndConfirmed = Template.bind({});
AcknowledgedAndConfirmed.args = {
    visible: true,
    deletedItemName: 'Testing',
};
AcknowledgedAndConfirmed.play = async () => {
    const confirmationInput = document.querySelector('.ay-dangerous-modal__confirm-input') as HTMLInputElement;
    const acknowledgeInput = document.querySelector('.ay-dangerous-modal__acknowledge label');

    await userEvent.type(confirmationInput, 'Testing');
    await userEvent.click(acknowledgeInput);
};
