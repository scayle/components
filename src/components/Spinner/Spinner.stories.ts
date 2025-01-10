import Spinner from './Spinner.vue';
import readme from './README.md';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
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
    components: { Spinner },
    setup() {
        return { args };
    },
    template: '<Spinner v-bind="args" :class="args.class" />',
});

export const Default = Template.bind({});
Default.args = {};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
};

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    size: 'xl',
};

export const DifferentColor = Template.bind({});
DifferentColor.args = {
    class: 'spinner-current text-red',
};
