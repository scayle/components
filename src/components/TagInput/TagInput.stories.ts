import TagInput from './TagInput.vue';

export default {
    title: 'Components/TagInput',
    component: TagInput,
    argTypes: {
        modelValue: {
            description: 'Represents an array of the selected tags',
        },

        disabled: {
            description: 'Prop to disable the tags input and prevent interaction',
        },

        placeholder: {
            description: 'The placeholder is shown after focusing the tags input',
        },

        clearable: {
            description: 'If `true` an x-button is shown at the end of every tag which triggers an event on click',
        },

        tagType: {
            description: 'The type determines the color of the tags',
        },

        limit: {
            description: 'The amount of tags shown before summarizing them under the `+n` tag',
        },

        focus: {
            description: 'The event triggered after the user focused the tags input',
        },

        change: {
            description: 'Triggered after the `modelValue` changes',
        },

        blur: {
            description: 'The event triggered after the tags input lost focus',
        },

        removedTag: {
            description: 'Event fired after the x-button of a tag was clicked',
        },
    },
};

const Template = (args: any) => ({
    components: { TagInput },
    setup() {
        return { args };
    },
    data: () => ({ tagValues: args.tags }),
    template: '<TagInput v-model="tagValues" v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    tags: ['1', '3', '5'],
};

export const Disabled = Template.bind({});
Disabled.args = {
    tags: ['1', '2', '3'],
    disabled: true,
};

export const Limit = Template.bind({});
Limit.args = {
    tags: ['1', '2', '3', '4', '5'],
    limit: 5,
};

export const TagType = Template.bind({});
TagType.args = {
    tags: ['1', '2', '3', '4', '5'],
    tagType: 'danger',
};
