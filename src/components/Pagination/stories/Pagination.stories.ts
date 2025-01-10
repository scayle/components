/**
 * External dependencies.
 */
import { ref } from 'vue';

/**
 * Internal dependencies.
 */
import Pagination from '../Pagination.vue';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    excludeStories: /.*Data$/,
    argTypes: {},
};

const Template = (args: any) => ({
    components: { Pagination },

    setup() {
        const currentPage = ref(args.currentPage || 1);

        return {
            args,
            currentPage,
        };
    },
    template: '<Pagination v-bind="args" v-on="args" v-model:current-page="currentPage" />',
});

export const Default = Template.bind({});
Default.args = {
    pageSize: 15,
    total: 120,
};

export const WithCollapsedPagesDisabled = Template.bind({});
WithCollapsedPagesDisabled.args = {
    pageSize: 15,
    total: 120,
    disableCollapsedPages: true,
};
