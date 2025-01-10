import { ref } from 'vue';
import DoughnutChart from './DoughnutChart.vue';

export default {
    title: 'Statistics/DoughnutChart',
    component: DoughnutChart,
    argTypes: {
        chartData: {
            description:
                'An array containing the items of the chart. Every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)',
        },

        title: {
            description: 'The title to be displayed inside of the doughnut',
        },

        heading: {
            description: 'A heading text above the title inside of the doughnut',
        },

        width: {
            description: 'The width of the doughnut (e.g. `200px`)',
        },

        activeIndex: {
            description: 'The index of the element that should be highlighted (manual hover effect)',
        },
    },
};

const components = {
    DoughnutChart,
};

const chartData = [
    {
        x: 'Female',
        y: 66,
    },
    {
        x: 'Male',
        y: 34,
    },
];

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                chartData,
            },
        };
    },
    template: '<DoughnutChart v-bind="args"></DoughnutChart>',
});

export const CenterLabel = (args: any = {}) => Default({ ...args, title: '100 Customers' });
export const CenterLabelDifferentColor = (args: any = {}) =>
    Default({ ...args, title: '100 Customers', titleColor: '#ff0000' });
export const LongLabelWithLineBreak = (args: any = {}) => Default({ ...args, title: '10.000 \nCustomers' });

export const CenterHeading = (args: any = {}) => Default({ ...args, heading: 'Customers' });
export const CenterHeadingDifferentColor = (args: any = {}) =>
    Default({ ...args, heading: 'Customers', headingColor: '#ff0000' });
export const CenterHeadingWithLabel = (args: any = {}) => Default({ ...args, title: '10.000', heading: 'Customers' });
export const ActiveIndex = (args: any = {}) => ({
    components,
    setup() {
        const reactiveArgs = ref({
            ...args,
            activeIndex: -1,
            chartData,
        });
        const updateActiveIndex = (index: number) => (reactiveArgs.value.activeIndex = index);
        return {
            args: reactiveArgs,
            updateActiveIndex,
        };
    },
    template: `
         <div class="inline-block">
            <DoughnutChart v-bind="args"></DoughnutChart>
            <div class="flex items-center justify-center gap-2 p-6">
                Hover:
                <button @mouseenter="updateActiveIndex(0)" @mouseleave="updateActiveIndex(-1)">Female</button>
                /
                <button @mouseenter="updateActiveIndex(1)" @mouseleave="updateActiveIndex(-1)">Male</button>
            </div>
        </div>
    `,
});
