import IconPanelUsers from '~icons/panel/users';
import VerticalBarChartWrapper from './VerticalBarChartWrapper.vue';

export default {
    title: 'Statistics/VerticalBarChart',
    component: VerticalBarChartWrapper,
    argTypes: {
        chartData: {
            description:
                'An array containing the items of the chart. Every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)',
        },

        tooltipPrefix: {
            description: 'The prefix to display in front of every item name (x) within the chart',
        },

        unit: {
            description: 'The unit string to display as suffix of every item value (y) within the chart',
        },

        showAverage: {
            description: 'This prop does only exist in Storybook',
        },

        title: {
            description: 'This prop does only exist in Storybook',
        },

        averageLabel: {
            description: 'This prop does only exist in Storybook',
        },

        averageValue: {
            description: 'This prop does only exist in Storybook',
        },

        icon: {
            description: 'This prop does only exist in Storybook',
        },
    },
};

const components = {
    VerticalBarChartWrapper,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                chartData: {
                    '< 18': 10,
                    '18 - 24': 20,
                    '25 - 34.': 5,
                    '35 - 44': 38,
                    '45 - 54': 30,
                    '55 - 64': 12,
                    '65+': 3,
                },
                title: 'Age',
                averageValue: '16.8',
                averageLabel: 'percentage',
                unit: '%',
                tooltipPrefix: 'Age',
                icon: IconPanelUsers,
            },
        };
    },
    template: '<VerticalBarChartWrapper v-bind="args"></VerticalBarChartWrapper>',
});
