import Textarea from './Textarea.vue';

export default {
    title: 'Components/Textarea',
    component: Textarea,
    argTypes: {
        prepend: {
            description: 'Slot for displaying something on the left of the textarea (outside)',
        },

        append: {
            description: 'Slot for displaying something on the right of the textarea (outside)',
        },

        prefix: {
            description: 'Slot for displaying something on the left of the textarea (inside)',
        },

        suffix: {
            description: 'Slot for displaying something on the right of the textarea (inside)',
        },
    },
};

const components = {
    Textarea,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
            },
        };
    },
    template: '<Textarea v-bind="args" rows="6" placeholder="Default Textarea"></Textarea>',
});
