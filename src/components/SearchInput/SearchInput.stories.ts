/**
 * External dependencies.
 */

import { ref } from 'vue';
import { action } from '@storybook/addon-actions';

/**
 * Internal dependencies.
 */

import SearchInput from './SearchInput.vue';

export default {
    title: 'Components/SearchInput',
    component: SearchInput,
    argTypes: {
        'update:modelValue': { action: 'update:modelValue' },

        modelValue: {
            description: 'The value of the input (v-model)',
        },

        placeholder: {
            description: 'The placeholder of the input',
        },

        loading: {
            description: 'Replaces the search icon on the left with a rotating loading spinner',
        },

        size: {
            description: 'The size of the input',
        },
    },
};

const Template = ({ ...args }) => ({
    components: { SearchInput },

    setup() {
        const initialModelValue = ref(args.modelValue || '');
        const onUpdate = value => {
            initialModelValue.value = value;

            action('update:modelValue')(value);
        };

        return {
            args,
            onUpdate,
            initialModelValue,
        };
    },
    template: `
        <SearchInput v-bind="args" :model-value="initialModelValue" @update:modelValue="onUpdate"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
    modelValue: '',
    placeholder: '',
};

export const Loading = Template.bind({});
Loading.args = {
    modelValue: '',
    placeholder: '',
    loading: true,
};
