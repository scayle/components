import FormField from './FormField.vue';

export default {
    title: 'Components/FormField',
    component: FormField,
};

const components = {
    FormField,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                modelValue: 42,
                name: 'Answer to the Ultimate Question of Life, the Universe, and Everything',
            },
        };
    },
    template: '<FormField v-bind="args" ></FormField>',
});

export const HelpText = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                component: 'input',
                helpText: 'This is a help text for the input field',
                placeholder: 'User Id',
            },
        };
    },
    template: '<FormField v-bind="args" ></FormField>',
});

export const Errors = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                modelValue: 41,
                errors: ['The given value is invalid'],
            },
        };
    },
    template: '<FormField v-bind="args" ></FormField>',
});

export const Textarea = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                component: 'textarea',
                modelValue: 'The description of a very well known product!\nA must have!',
                name: 'Description',
                rules: 'required',
            },
        };
    },
    template: '<FormField v-bind="args" ></FormField>',
});

export const Disabeld = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                component: 'textarea',
                name: 'Description',
                disabled: true,
            },
        };
    },
    template: '<FormField v-bind="args" ></FormField>',
});
