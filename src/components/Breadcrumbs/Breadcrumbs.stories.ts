/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import Breadcrumbs from './Breadcrumbs.vue';

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        breadcrumbs: {
            description: 'The array containing the breadcrumbs.',
        },

        collapseAtSize: {
            description:
                'The amount of items which makes the breadcrumbs collapse. In the collapsed state, only the first and last item are shown. The ones inbetween are hidden under a dropdown.',
        },
    },
};

const Template = ({ collapsed, notCollapsed, ...args }) => ({
    components: { Breadcrumbs },
    setup() {
        return {
            args,
            collapsed,
            notCollapsed,
        };
    },
    template: `
        <Breadcrumbs v-bind="args">

        </Breadcrumbs>
    `,
});

export const Collapsed = Template.bind({});
Collapsed.args = {
    breadcrumbs: [
        {
            href: '#',
            name: 'With link 1',
        },
        {
            name: 'Without link',
        },
        {
            href: '#',
            name: 'With link 2',
        },
        {
            name: 'Current page',
        },
    ],
};

export const NotCollapsed = Template.bind({});
NotCollapsed.args = {
    collapseAtSize: 5,
    breadcrumbs: [
        {
            name: 'With link 1',
            href: '#',
        },
        {
            name: 'Without link',
        },
        {
            name: 'With link 2',
            href: '#',
        },
        {
            name: 'Current page',
            href: '#',
        },
    ],
};
