import { ref } from 'vue';
import CountrySelect from './CountrySelect.vue';

export default {
    title: 'Components/CountrySelect',
    component: CountrySelect,
};

const Template = (args: any) => ({
    components: { CountrySelect },
    setup() {
        return { args };
    },
    template: '<CountrySelect v-bind="args"></CountrySelect>',
});

const TemplateWithModel = (args: any) => ({
    components: { CountrySelect },
    setup() {
        const valueModel = ref('DE');
        return { args, valueModel };
    },
    template: `
        <div>
          <p class="mb-2">Selected value: <span id="selected">{{ valueModel }}</span></p>
          <CountrySelect v-model="valueModel" v-bind="args"></CountrySelect>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    countries: ['DE', 'US', 'BG', 'RO'],
};

export const WithGermanLabels = Template.bind({});
WithGermanLabels.args = {
    countries: ['DE', 'GE', 'DK'],
    languageTag: 'de',
    modelValue: 'de',
};

export const WithSelectedValue = TemplateWithModel.bind({});
WithSelectedValue.args = {
    countries: ['DE', 'GE', 'DK'],
    languageTag: 'es',
};

export const WithDropdownNotMountedToBody = Template.bind({});
WithDropdownNotMountedToBody.args = {
    ...Default.args,
    appendDropdownToBody: false,
};
