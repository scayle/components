import StatisticsLegendWrapper from './StatisticsLegendStorybookWrapper.vue';

export default {
    title: 'Statistics/StatisticsLegend',
    component: StatisticsLegendWrapper,
    argTypes: {
        items: {
            description:
                'An array containing the items of the legend. Every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)',
        },

        border: {
            description: 'To show a border around the legend',
        },

        twoCols: {
            description: 'To display the legend in 2 instead of 1 column',
        },

        activeIndex: {
            description: 'The index of the element that should be highlighted (manual hover effect)',
        },

        hover: {
            description:
                'The event is triggered upon mouseenter in one element - its index is being emitted. On mouseleave, `-1` is being emitted',
        },

        toggle: {
            description: 'The event is triggered after an item was (un)selected. It emits the index of the item',
        },

        useSlot: {
            description: 'This prop does only exist in Storybook',
        },
    },
};

const components = {
    StatisticsLegendWrapper,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
            },
        };
    },
    template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>',
});

export const NoBorder = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                border: false,
            },
        };
    },
    template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>',
});

export const OneColumn = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                twoCols: false,
            },
        };
    },
    template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>',
});

export const UseLabelSlot = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                twoCols: false,
                useSlot: true,
            },
        };
    },
    template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>',
});
