/**
 * External dependencies.
 */
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

/**
 * Internal dependencies.
 */
import Checkbox from './Checkbox.vue';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            description: 'The text to display on the right of the Checkbox',
        },

        modelValue: {
            description: 'The boolean value representing whether the checkbox is checked or not',
        },

        backgroundColor: {
            description: 'The background color of the checkbox (only visible if checked)',
        },

        darkCheck: {
            description: 'Turns the color of the check mark icon from white to black',
        },

        disabled: {
            description: 'Prevents interaction with the Checkbox if set to `true`',
        },

        change: { action: 'change' },
    },
};

const Template = (args: any) => ({
    components: { Checkbox },

    setup() {
        const modelValue = ref(args.modelValue);
        const onModelValueUpdate = (value: boolean) => {
            modelValue.value = value;
            action('update:modelValue')(value);
        };

        return {
            args,
            modelValue,
            onModelValueUpdate,
        };
    },
    template: `<Checkbox
        v-bind="args"
        v-on="args"
        :modelValue="modelValue"
        @update:modelValue="onModelValueUpdate"
    />`,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
    label: 'Checkbox',
    modelValue: true,
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
    label: 'Checkbox',
    disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    label: 'Checkbox',
    modelValue: true,
    disabled: true,
};
