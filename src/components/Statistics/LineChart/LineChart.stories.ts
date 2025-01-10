import LineChart from './LineChart.vue';

export default {
    title: 'Statistics/LineChart',
    component: LineChart,
    argTypes: {
        chartData: {
            description:
                'An array containing the items of the chart. Every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)',
        },

        unit: {
            description: 'The unit string to display as suffix of every item value (y) within the chart',
        },

        locale: {
            description: 'The locale used for formatting',
        },

        rtl: {
            description: 'To enable right-to-left display of the charts x-axis',
        },
    },
};

const components = {
    LineChart,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                chartData: {
                    '26.05.': 750,
                    '27.05.': 1050,
                    '28.05.': 900,
                    '29.05.': 800,
                    '30.05.': 1150,
                    '31.05.': 1100,
                    '01.06.': 1200,
                    '02.06.': 900,
                },
            },
        };
    },
    template: '<div class="max-w-2xl"><LineChart v-bind="args"></LineChart></div>',
});
