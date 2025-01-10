import Card from './Card.vue';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        header: {
            description: 'The slot at the top of the Card',
        },

        default: {
            description: 'The content slot of the Card',
        },

        footer: {
            description: 'The slot at the bottom of the Card',
        },
    },
};

const Template = (args: any) => ({
    components: { Card },
    setup() {
        return { args };
    },
    template: `<Card v-bind="args">
      <template #header>
          <h4>Header</h4>
      </template>

      <template #default>
          <p>Body</p>
      </template>

      <template #footer>
          <p>Footer</p>
      </template>
    </Card>`,
});

export const Default = Template.bind({});

Default.args = {};
