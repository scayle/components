import IconPanelUsers from '~icons/panel/users';
import NumbersWidget from './NumbersWidget.vue';

export default {
    title: 'Statistics/NumbersWidget',
    component: NumbersWidget,
};

const components = {
    NumbersWidget,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                title: 'Active Customers',
                data: {
                    current: 56342,
                },
                icon: IconPanelUsers,
                locale: 'en',
            },
        };
    },
    template: '<NumbersWidget v-bind="args"></NumbersWidget>',
});

export const ShowIncrease = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                title: 'Active Customers',
                data: {
                    current: 56342,
                    previous: 42364,
                },
                icon: IconPanelUsers,
                locale: 'en',
            },
        };
    },
    template: '<NumbersWidget v-bind="args"></NumbersWidget>',
});

export const Loading = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                title: 'Active Customers',
                loading: true,
                icon: IconPanelUsers,
                locale: 'en',
            },
        };
    },
    template: '<NumbersWidget v-bind="args"></NumbersWidget>',
});
