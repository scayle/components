import { ref } from 'vue';
import Tag from './Tag.vue';

export default {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        closable: {
            description: 'If `true` an x-button is shown at the end of every tag which triggers an event on click',
        },

        close: {
            description: 'Event fired after the x-button of a tag was clicked',
        },
    },
};

export const Default = (args: any) => ({
    components: { Tag },
    setup() {
        return { args };
    },
    template: `<div class="space-x-2">
        <Tag>Default</Tag>
        <Tag type="info">Info</Tag>
        <Tag type="success">Success</Tag>
        <Tag type="warning">Warning</Tag>
        <Tag type="danger">Danger</Tag>
    </div>`,
});

Default.args = {
    closable: false,
};

export const Closable = (args: any) => ({
    components: { Tag },
    setup() {
        const visible = ref(true);
        return { args, visible };
    },
    template: `<div>
        <input type="checkbox" v-model="visible" class="mr-2">
        <Tag v-if="visible" closable @close="visible = false">Moin</Tag>
    </div>`,
});

Closable.args = {
    closable: true,
};
