import EmptyState from './EmptyState.vue';

export default {
    title: 'Components/EmptyState',
    component: EmptyState,
    argTypes: {
        icon: {
            description: 'The icon to display on top of the empty state',
        },

        textTitle: {
            description: 'The title of the empty state',
        },

        textHint: {
            description: 'A descriptive text under the title',
        },

        textButton: {
            description: 'The text inside of the action button',
        },

        primaryBtnClicked: {
            description: 'An event emitted after the button was clicked (only if the button was not overridden)',
        },

        button: {
            description: 'The slot to override the button which is rendered by `textButton` prop',
        },
    },
};

const components = {
    EmptyState,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                textTitle: 'No products found',
                textHint: 'We could not find any products.',
            },
        };
    },
    template: '<EmptyState v-bind="args"></EmptyState>',
});
