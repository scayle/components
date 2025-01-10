/**
 * External dependencies.
 */
import { ref } from 'vue';
import IconPanelExternal from '~icons/panel/external';

/**
 * Internal dependencies.
 */
import Select from './Select.vue';
import Option from './components/Option/Option.vue';
import { fruitOptions, testOptions } from './CommonStoryData';
import OptionGroup from './components/Option/OptionGroup.vue';
import readme from './README.md';

export default {
    title: 'Components/Select',
    component: Select,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        default: {
            description:
                'Use the default slot to control the available options. All Option components within this slot will be rendered as options. For searchable selects, the query will be passed as a slot prop.',
        },

        modelValue: {
            description: 'The value of the select control.',
        },

        placeholder: {
            description:
                "The default text to show in the input when no value is selected. Defaults to 'Select an option'",
        },

        disabled: {
            description: 'Control whether the input is disabled. Defaults to false.',
        },

        clearable: {
            description:
                'When enabled a clear button will appear in the input that can be used to clear the value. Defaults to false.',
        },

        searchable: {
            description: 'Enable or disable the search functionality. Defaults to false.',
        },

        getLabel: {
            description:
                'A function `((string | object) => string)` to map the current modelValue to a label to display in the input. Used when the options are no simply strings.',
        },
    },
};

const Template = ({ options, ...args }) => ({
    components: { Select, Option },

    setup() {
        return {
            args,
            options,
        };
    },

    template: `
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    `,
});

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    options: testOptions,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
    options: testOptions,
    multiple: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    options: testOptions,
    label: 'Select Field',
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: testOptions,
    disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    options: testOptions,
    placeholder: 'Custom Placeholder',
};

export const WithClearOption = Template.bind({});
WithClearOption.args = {
    options: testOptions,
    modelValue: testOptions[0].name,
    clearable: true,
};

export const WithClearOptionDisabled = Template.bind({});
WithClearOptionDisabled.args = {
    options: testOptions,
    modelValue: testOptions[0].name,
    clearable: true,
    disabled: true,
};

export const WithDescription = (args: any) => ({
    components: { Select, Option },
    setup() {
        return {
            args,
            testOptions,
        };
    },
    template: `
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
                :description="option.description"
            />
        </Select>
    `,
});

export const WithCustomPlaceholder = (args: any) => ({
    components: { Select, Option },
    setup() {
        return {
            args,
            testOptions,
        };
    },
    template: `
        <Select placeholder="Custom placeholder">
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
            />
        </Select>
    `,
});

export const WithLeadingIcon = (args: any) => ({
    components: { Select, Option, IconPanelExternal },
    setup() {
        return {
            args,
            testOptions,
        };
    },
    template: `
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            >
                <template #icon>
                    <IconPanelExternal class="icon icon-xs" />
                </template>
            </Option>
        </Select>
    `,
});

export const WithLeadingIconAndDescription = (args: any) => ({
    components: { Select, Option, IconPanelExternal },
    setup() {
        return {
            args,
            testOptions,
        };
    },
    template: `
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
                :description="option.description"
            >
                <template #icon>
                    <IconPanelExternal class="icon icon-xs" />
                </template>
            </Option>
        </Select>
    `,
});

export const Searching = (args: any) => ({
    components: { Select, Option },
    setup() {
        const selectValue = ref('Coats');
        return {
            args,
            selectValue,
            selectOptions: ['Coats', 'Blouses', 'Accessories'],
        };
    },
    template: `
        <p class="mb-2">Selected Value: {{selectValue}}</p>
        <Select searchable v-model="selectValue">
            <template #default="{ query }">
                <Option
                    v-for="option in selectOptions.filter(o => o.toLowerCase().includes(query.toLowerCase()))"
                    :value="option"
                    :key="option"
                >
                    {{ option }}
                </Option>
            </template>
        </Select>
    `,
});

export const UsingGetLabel = (args: any) => ({
    components: { Select, Option },
    setup() {
        return {
            args,
            selectValue: null,
            selectOptions: [
                { id: 1, label: 'Coats', modifiedLabel: 'modified Coats' },
                { id: 2, label: 'Blouses', modifiedLabel: 'modified Blouses' },
                { id: 3, label: 'Accessories', modifiedLabel: 'modified Accessories' },
            ],
        };
    },
    template: `
        <Select v-model="selectValue" :get-label="value => value?.modifiedLabel">
            <Option v-for="option in selectOptions" :value="option" :key="option.id">
                {{ option.label }}
            </Option>
        </Select>
    `,
});

const GroupedTemplate = ({ options, ...args }: any) => ({
    components: { Select, Option, OptionGroup },
    setup() {
        return {
            args,
            options,
        };
    },
    template: `
        <Select v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </Select>
    `,
});

const KeepDropdownOpenedTemplate = ({ options, ...args }: any) => ({
    components: { Select, Option, OptionGroup },
    setup() {
        return {
            args,
            options,
        };
    },
    template: `
        <Select v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name" :close-on-select="false">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </Select>
    `,
});

export const KeepDropdownOpened = KeepDropdownOpenedTemplate.bind({});
KeepDropdownOpened.args = {
    options: fruitOptions,
};

export const Grouped = GroupedTemplate.bind({});
Grouped.args = {
    options: fruitOptions,
};

export const WhenDropdownNotMountedToBody = GroupedTemplate.bind({});
WhenDropdownNotMountedToBody.args = {
    options: fruitOptions,
    appendDropdownToBody: false,
};
