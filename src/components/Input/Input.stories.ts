import Input from './Input.vue';
import readme from './README.md';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        size: {
            options: ['small', 'normal'],
            description: 'The size of the spinner',
        },

        modelValue: {
            description: "The input's value. Supports v-model",
        },

        prepend: {
            description: 'Content that appears before the input but within its borders',
        },

        append: {
            description: 'Content that appears after the input but within its borders',
        },

        prefix: {
            description: 'Content that appears inside the input before its value',
        },

        suffix: {
            description: 'Content that appears inside the input after its value',
        },

        onInput: {},
    },
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
};

const Template = (args: any) => ({
    components: { Input },
    setup() {
        return { args };
    },
    template: '<Input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    size: 'normal',
    modelValue: 'Default Input',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    modelValue: 'Small Input',
};
