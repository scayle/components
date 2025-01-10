/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import { ref } from 'vue';
import Option from '../Option/Option.vue';
import OptionGroup from '../Option/OptionGroup.vue';
import { fruitOptions, testOptions } from '../../CommonStoryData';
import MultiSelect from './MultiSelect.vue';

export default {
    title: 'Components/Multiselect',
    component: MultiSelect,
    argTypes: {
        tagClearable: {
            description: 'If `true` an x-button is shown at the end of every tag which removes it on click',
        },

        maxTags: {
            description: 'The maximum amount of tags that are displayed outside of the `+n` summary tag',
        },
    },
};

const Template = ({ options, ...args }) => ({
    components: { MultiSelect, Option },

    setup() {
        return {
            args,
            options,
        };
    },

    template: `
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    `,
});

const TemplateWithAddButton = ({ options, ...args }) => ({
    components: { MultiSelect, Option },

    setup() {
        const modelValue = ref(args.modelValue || []);
        const onClick = () => {
            modelValue.value = [...modelValue.value, Math.round(Math.random() * 100)];
        };
        return {
            args,
            modelValue,
            options,
            onClick,
        };
    },

    template: `
        <div class="flex">
            <MultiSelect v-bind="args" v-model="modelValue">
                <Option
                    v-for="option in options"
                    :value="option.name"
                    :key="option"
                    :label="option.name"
                    :hint="option.hint"
                />
            </MultiSelect>

            <div class="flex items-end">
              <button :disabled="args.disabled" class="btn btn-primary ml-2" @click="onClick">Add random number</button>
            </div>
        </div>
    `,
});

const GroupedTemplate = ({ options, ...args }: any) => ({
    components: { MultiSelect, Option, OptionGroup },
    setup() {
        return {
            args,
            options,
        };
    },
    template: `
        <MultiSelect v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </MultiSelect>
    `,
});

export const Default = Template.bind({});
Default.args = {
    options: testOptions,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    options: testOptions,
    label: 'MultiSelect Field',
};

export const WithClearOption = Template.bind({});
WithClearOption.args = {
    options: testOptions,
    label: 'MultiSelect Field',
    modelValue: [testOptions[0].name],
    clearable: true,
};

export const WithTagClearOption = Template.bind({});
WithTagClearOption.args = {
    options: testOptions,
    modelValue: [testOptions[0].name],
    tagClearable: true,
};

export const WithTagClearOptionDisabled = Template.bind({});
WithTagClearOptionDisabled.args = {
    options: testOptions,
    modelValue: [testOptions[0].name],
    tagClearable: true,
    disabled: true,
};

export const WithGetLabel = Template.bind({});
WithGetLabel.args = {
    options: testOptions,
    getLabel: (value: string) => {
        return 'Testing - ' + value;
    },
};

export const WithCustomTagAmount = Template.bind({});
WithCustomTagAmount.args = {
    options: testOptions,
    modelValue: testOptions.slice(0, 3).map(option => option.name),
    maxTags: 3,
};

export const WithAddingNewElements = TemplateWithAddButton.bind({});
WithAddingNewElements.args = {
    options: testOptions,
    label: 'MultiSelect Field',
    modelValue: [testOptions[0].name],
    clearable: true,
    tagClearable: true,
};

export const WithAddingNewElementsDisabled = TemplateWithAddButton.bind({ disabled: true });
WithAddingNewElementsDisabled.args = {
    options: testOptions,
    label: 'MultiSelect Field',
    modelValue: [testOptions[0].name],
    clearable: true,
    tagClearable: true,
    disabled: true,
};

export const Grouped = GroupedTemplate.bind({});
Grouped.args = {
    options: fruitOptions,
};
