/**
 * Internal dependencies.
 */
import Badge from './Badge.vue';
import Badges from './Badges.vue';

export default {
    title: 'Components/Badges',
    component: Badges,
    argTypes: {
        default: {
            description: 'The slot to provide the Badges you want to group',
        },
    },
};

const Template = ({ ...args }) => ({
    components: { Badge, Badges },

    setup() {
        return {
            args,
        };
    },

    template: `<Badges>
      <Badge label="test"/>
      <Badge type="warning" label="test2"/>
      <Badge type="info" label="test3"/>
    </Badges>`,
});

export const Default = Template.bind({});
Default.args = {};
