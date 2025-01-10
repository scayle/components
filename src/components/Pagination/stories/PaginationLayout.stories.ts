/**
 * External dependencies.
 */
import { ref } from 'vue';

/**
 * Internal dependencies.
 */
import PaginationLayout from '../PaginationLayout.vue';

export default {
    title: 'Components/PaginationLayout',
    component: PaginationLayout,
    excludeStories: /.*Data$/,
    argTypes: {},
};

const Template = (args: any) => ({
    components: { PaginationLayout },

    setup() {
        const pageSize = ref(args.pageSize || 15);
        const currentPage = ref(args.currentPage || 1);

        return {
            args,
            pageSize,
            currentPage,
        };
    },
    template: `<PaginationLayout
        v-bind="args"
        v-on="args"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
    />`,
});

export const Default = Template.bind({});
Default.args = {
    pageSize: 15,
    total: 120,
};

export const WithCollapsedPagesDisabled = Template.bind({});
WithCollapsedPagesDisabled.args = {
    ...Default.args,
    disableCollapsedPages: true,
};

export const WithoutPageSizeSelector = Template.bind({});
WithoutPageSizeSelector.args = {
    ...Default.args,
    withoutPageSizeSelector: true,
};

export const WithSelectDropdownNotAppendedToBody = Template.bind({});
WithSelectDropdownNotAppendedToBody.args = {
    ...Default.args,
    appendSelectDropdownToBody: false,
};
