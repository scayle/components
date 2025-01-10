/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.vue';
import AppHeader from './AppHeader.vue';

export default {
    title: 'Components/AppHeader',
    component: AppHeader,
    argTypes: {
        title: {
            description: 'The title of the app header',
        },

        avatar: {
            description: 'The slot before the title',
        },

        breadcrumbs: {
            description: 'The slot for the breadcrumbs (below the title)',
        },

        default: {
            description: 'The slot on the right of the app header',
        },
    },
};

const Template = ({ withBeforeTitle, withBreadcrumbs, withDefaultSlot, ...args }) => ({
    components: { AppHeader, Breadcrumbs },
    setup() {
        return {
            args,
            withBeforeTitle,
            withBreadcrumbs,
            withDefaultSlot,
        };
    },
    template: `
        <AppHeader v-bind="args">
          <template v-if="withBeforeTitle" #avatar>
              <div class="w-12 h-12 bg-gray rounded-full bg-black mr-4"/>
          </template>

          <template v-if="withBreadcrumbs" #breadcrumbs>
              <Breadcrumbs v-bind="args">

              </Breadcrumbs>
          </template>

          <template v-if="withDefaultSlot" #default>
              <button class="btn btn-primary inline-flex items-center">
                  Demo
              </button>
          </template>
        </AppHeader>
    `,
});

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
};

export const BeforeTitle = Template.bind({});
BeforeTitle.args = {
    title: 'Title',
    withBeforeTitle: true,
};

export const WithBreadcrumbs = Template.bind({});
WithBreadcrumbs.args = {
    title: 'Title',
    withBreadcrumbs: true,
    breadcrumbs: [
        {
            href: '#',
            name: 'Test',
        },
        {
            href: '#',
            name: 'Test 2',
        },
        {
            href: '#',
            name: 'Test 3',
        },
        {
            name: 'Test 4',
        },
    ],
};

export const DefaultSlot = Template.bind({});
DefaultSlot.args = {
    title: 'Title',
    withDefaultSlot: true,
};

export const AllOptions = Template.bind({});
AllOptions.args = {
    title: 'Title',
    withBeforeTitle: true,
    withBreadcrumbs: true,
    withDefaultSlot: true,
};
