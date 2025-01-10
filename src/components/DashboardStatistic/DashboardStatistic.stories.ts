import IconPanelWarningFill from '~icons/panel/warning-fill';
import DashboardStatistic from './DashboardStatistic.vue';

export default {
    title: 'Dashboard/DashboardStatistic',
    component: DashboardStatistic,
    argTypes: {
        value: {
            description: 'The title of the statistics panel',
        },

        label: {
            description: 'The subtitle of the statistics panel',
        },

        secondaryLabel: {
            description: 'The text underneath the label',
        },

        color: {
            description: 'The color of the icon provided by the default slot',
        },

        default: {
            description: 'The slot used to provide the icon on the right of the statistics panel',
        },
    },
};

const Template = (args: any) => ({
    components: { DashboardStatistic },
    setup() {
        return { args };
    },
    template: '<DashboardStatistic v-bind="args"></DashboardStatistic>',
});

const TemplateWithIcon = (args: any) => ({
    components: {
        DashboardStatistic,
        IconPanelWarningFill,
    },
    setup() {
        return { args };
    },
    template: `
        <DashboardStatistic v-bind="args">
            <IconPanelWarningFill />
        </DashboardStatistic>
    `,
});

export const Default = Template.bind({});

Default.args = {
    value: '99',
    label: 'Label',
};

export const WithSecondaryLabel = Template.bind({});
WithSecondaryLabel.args = {
    value: '99',
    color: 'red',
    label: 'Label',
    secondaryLabel: 'Secondary Label',
};

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
    value: '99',
    color: 'red',
    label: 'Label',
};

export const WithIconAndSecondaryLabel = TemplateWithIcon.bind({});
WithIconAndSecondaryLabel.args = {
    value: '99',
    color: 'red',
    label: 'Label',
    secondaryLabel: 'Secondary Label',
};
