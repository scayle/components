import InfoBanner from './InfoBanner.vue';

export default {
    title: 'Components/InfoBanner',
    component: InfoBanner,
    argTypes: {},
};

const Template = (args: any) => ({
    components: { InfoBanner },
    setup() {
        return { args };
    },
    template: '<InfoBanner v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    title: 'This is the title',
    subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};

export const DefaultWithButton = Template.bind({});
DefaultWithButton.args = {
    buttonText: 'Button',
    title: 'This is the title',
    subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};

export const DefaultWithDateString = Template.bind({});
DefaultWithDateString.args = {
    dateString: '10.10.2023',
    title: 'This is the title',
    subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    title: 'This is the title',
    subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};

export const Info = Template.bind({});
Info.args = {
    type: 'info',
    title: 'This is the title',
    subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    title: 'This is the title',
    subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    title: 'This is the title',
    subtitle:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
};
