import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import OffCanvas from './OffCanvas.vue';
import readme from './README.md';

export default {
    title: 'Components/OffCanvas',
    component: OffCanvas,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        visible: {
            description: 'Controls the visibility of the OffCanvas',
        },

        title: {
            description: 'The title shown in the default header',
        },

        default: {
            description: 'The content of the dialog',
        },

        header: {
            description: 'Override the header content with this slot',
        },

        footer: {
            description: 'Override the footer content with this slot',
        },
    },
};

const Template = (args: any) => ({
    components: { OffCanvas },
    setup() {
        const visible = ref(args.visible);
        const onVisibleUpdate = action('update:visible');

        return {
            args,
            visible,
            onVisibleUpdate,
        };
    },
    template: '<OffCanvas v-bind="args">Off Canvas Body</OffCanvas>',
});

export const Default = Template.bind({});
