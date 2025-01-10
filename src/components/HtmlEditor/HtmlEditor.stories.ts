/**
 * External dependencies.
 */
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

/**
 * Internal dependencies.
 */
import HtmlEditor from './HtmlEditor.vue';

export default {
    title: 'Components/HtmlEditor',
    component: HtmlEditor,
    excludeStories: /.*Data$/,
    argTypes: {
        input: { action: 'input' },
        tabClick: { action: 'tab-click' },
    },
};

const Template = (args: any) => ({
    components: { HtmlEditor },

    setup() {
        const modelValue = ref(args.modelValue);
        const onModelValueUpdate = (v: string) => {
            modelValue.value = v;
            action('update:modelValue')(v);
        };

        return {
            modelValue,
            args: { ...args, 'update:modelValue': onModelValueUpdate },
        };
    },
    template: '<HtmlEditor v-bind="args" v-on="args" :model-value="modelValue" />',
});

export const Default = Template.bind({});

export const PreviewOpenFirst = Template.bind({});
PreviewOpenFirst.args = {
    modelValue: '<b>Hello World!</b>',
    selectedTab: 'preview',
};

export const EditorDisabled = Template.bind({});
EditorDisabled.args = {
    modelValue: '<b>Hello World!</b>',
    disabled: true,
};
