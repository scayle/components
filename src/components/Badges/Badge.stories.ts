/**
 * Internal dependencies.
 */
import Badge from './Badge.vue';
import IconGitBranch from '~icons/panel/git-branch';

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        label: {
            description: 'The text to show inside of the badge',
        },
    },
};

const Template = ({ ...args }) => ({
    components: { Badge },

    setup() {
        return {
            args,
        };
    },

    template: '<Badge v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
    type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
};

export const Unknown = Template.bind({});
Unknown.args = {
    type: 'type-that-does-not-exist',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Test',
};
export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'Test',
    icon: IconGitBranch,
};
