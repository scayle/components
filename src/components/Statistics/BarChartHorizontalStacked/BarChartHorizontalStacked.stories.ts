import BarChartHorizontalStacked from './BarChartHorizontalStacked.vue';

export default {
    title: 'Statistics/BarChartHorizontalStacked',
    component: BarChartHorizontalStacked,
    argTypes: {
        items: {
            description:
                'An array containing the items of the chart. every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)',
        },

        totalCount: {
            description:
                'The sum of every `y` property from the items used to calculate the percentual width of each item displayed',
        },

        activeIndex: {
            description: 'The index of the element that should be highlighted (manual hover effect)',
        },

        hover: {
            description:
                'The event is triggered upon mouseenter in one element - its index is being emitted. on mouseleave, `-1` is being emitted',
        },
    },
};

const components = {
    BarChartHorizontalStacked,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                items: [
                    { x: 'PayPal', y: 34 },
                    { x: 'Kreditkarte', y: 20 },
                    { x: 'Invoice', y: 16 },
                    { x: 'Paydirekt', y: 8 },
                    { x: 'Sofort', y: 9 },
                    { x: 'Lastschrift', y: 8 },
                    { x: 'Discover', y: 4 },
                    { x: 'DinersClub', y: 1 },
                ],
                totalCount: 100,
            },
        };
    },
    template: '<BarChartHorizontalStacked v-bind="args" class="pt-16 mx-6"></BarChartHorizontalStacked>',
    // pt-16 is to properly display the tooltips in storybook
});
