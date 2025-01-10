import DashboardList from './DashboardList.vue';
import DashboardListItem from './DashboardListItem.vue';

export default {
    title: 'Dashboard/DashboardList',
    component: DashboardList,
};

export const Default = () => ({
    components: { DashboardList, DashboardListItem },
    setup() {
        return {
            items: [
                {
                    value: '60,445',
                    label: 'Mapper ServiceProvider DCI',
                    initials: 'MSD',
                },
                {
                    value: '13,754',
                    label: 'Mapper_ServiceProvider_Wisebase',
                    initials: 'M',
                },
                {
                    value: '1,731',
                    label: 'Partner Role 11 (Direct Shipping)',
                    initials: 'PR1',
                },
                {
                    value: '1,731',
                    label: 'Partner Role 11 (Direct Shipping)',
                    initials: 'PR1',
                },
                {
                    value: '1,731',
                    label: 'Partner Role 11 (Direct Shipping)',
                    initials: 'PR1',
                },
                {
                    value: '1,731',
                    label: 'Partner Role 11 (Direct Shipping)',
                    initials: 'PR1',
                },
                {
                    value: '1,731',
                    label: 'Partner Role 11 (Direct Shipping)',
                    initials: 'PR1',
                },
                {
                    value: '1,731',
                    label: 'Partner Role 11 (Direct Shipping)',
                    initials: 'PR1',
                    color: 'blue',
                },
            ],
        };
    },
    template: `<DashboardList title="Simple Title" subtitle="Simple Subtitle">
        <DashboardListItem v-for="item in items" v-bind="item" />
        </DashboardList>`,
});

Default.args = [
    {
        value: '60,445',
        label: 'Mapper ServiceProvider DCI',
        initials: 'MSD',
    },
    {
        value: '13,754',
        label: 'Mapper_ServiceProvider_Wisebase',
        initials: 'M',
    },
    {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1',
    },
    {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1',
    },
    {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1',
    },
    {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1',
    },
    {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1',
    },
    {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1',
        color: 'blue',
    },
];

const Template = (args: any = {}) => ({
    components: { DashboardList },
    setup() {
        return {
            args: {
                title: 'Simple Title',
                subtitle: 'Simple Subtitle',
                ...args,
            },
        };
    },
    template: '<DashboardList v-bind="args"></DashboardList>',
});

export const Empty = Template.bind({});

export const Loading = Template.bind({});

Loading.args = {
    title: 'Simple Title',
    subtitle: 'Simple Subtitle',
    isLoading: true,
};
