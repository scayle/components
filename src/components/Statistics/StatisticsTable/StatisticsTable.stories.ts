import IconPanelShirt from '~icons/panel/shirt';
import IconPanelFolder from '~icons/panel/folder';
import StatisticsTable from './StatisticsTable.vue';

export default {
    title: 'Statistics/StatisticsTable',
    component: StatisticsTable,
    argTypes: {
        icon: {
            table: {
                disable: true,
            },
        },
        rowIcon: {
            table: {
                disable: true,
            },
        },
    },
};

const components = {
    StatisticsTable,
};

const data = [
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
    {
        image_url: '/mock-product.avif',
        name: 'Shirt',
        brand: 'Vero Moda',
        color: 'White',
        count: 20500,
    },
];

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                data,
                title: 'Top Products',
                icon: IconPanelShirt,
                filterOptions: [],
            },
        };
    },
    template: '<StatisticsTable v-bind="args"></StatisticsTable>',
});

export const WithIconsInsteadOfImages = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                data,
                title: 'Top Products',
                icon: IconPanelShirt,
                filterOptions: [],
                rowIcon: IconPanelFolder,
            },
        };
    },
    template: '<StatisticsTable v-bind="args"></StatisticsTable>',
});

export const WithFilter = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                data,
                title: 'Top Products',
                icon: IconPanelShirt,
                filterOptions: [
                    {
                        name: 'Count',
                    },
                    {
                        name: 'Revenue',
                    },
                ],
            },
        };
    },
    template: '<StatisticsTable v-bind="args"></StatisticsTable>',
});

export const WithUnit = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                data,
                title: 'Top Products',
                icon: IconPanelShirt,
                filterOptions: [
                    {
                        name: 'Count',
                    },
                    {
                        name: 'Revenue',
                    },
                ],
                initialFilter: 'Revenue',
                unit: '€',
            },
        };
    },
    template: '<StatisticsTable v-bind="args"></StatisticsTable>',
});

export const EmptyState = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                data: [],
                title: 'Top Products',
                icon: IconPanelShirt,
                emptyText: 'No products found',
                emptyHint: 'Please create some products first.',
            },
        };
    },
    template: '<StatisticsTable v-bind="args"></StatisticsTable>',
});

export const Loading = (args: any) => ({
    components,
    setup() {
        return {
            args: {
                ...args,
                data: [],
                title: 'Top Products',
                icon: IconPanelShirt,
                loading: true,
            },
        };
    },
    template: '<StatisticsTable v-bind="args"></StatisticsTable>',
});
