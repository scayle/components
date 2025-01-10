/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import Tab from './Tab.vue';
import Tabs from './Tabs.vue';
import TabButton from './TabButton.vue';

export default {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        tabs: {
            description: 'This is not a real prop, but is used for injecting content to the slot of tabs.',
        },
        click: {
            action: 'click',
        },
    },
};

const Template = ({ tabs, ...args }) => ({
    components: { Tab, Tabs },
    setup() {
        return {
            args,
            tabs,
        };
    },
    template: `
        <Tabs v-bind="args" v-on="args">
          <Tab v-for="tab in tabs" :key="tab.name" v-bind="tab">
              {{ tab.content }}
          </Tab>
        </Tabs>
    `,
});

const ButtonTabTemplate = ({ tabs, ...args }) => ({
    components: { TabButton, Tabs },
    setup() {
        return {
            args,
            tabs,
        };
    },
    template: `
        <Tabs v-bind="args" v-on="args">
          <TabButton v-for="tab in tabs" :key="tab.name" v-bind="tab">
              {{ tab.content }}
          </TabButton>
        </Tabs>
    `,
});

export const Default = Template.bind({});
Default.args = {
    tabs: [
        {
            name: 'tab-1',
            label: 'Tab 1',
            content: 'Test Tab 1',
        },
        {
            name: 'tab-2',
            label: 'Tab 2 long label',
            content: 'Test Tab 2',
        },
        {
            name: 'Tab 3',
            content: 'Test Tab 3',
        },
    ],
};

export const ButtonedTabs = ButtonTabTemplate.bind({});
ButtonedTabs.args = {
    tabs: [
        {
            name: 'tab-1',
            label: 'Tab 1',
            content: 'Test Tab 1',
        },
        {
            name: 'tab-2',
            label: 'Tab 2 long label',
            badgeText: 210,
            content: 'Test Tab 2',
        },
        {
            name: 'Tab 3',
            content: 'Test Tab 3',
            badgeText: 5,
        },
    ],
};
