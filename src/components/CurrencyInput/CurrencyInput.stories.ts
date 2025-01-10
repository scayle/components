import { provide } from 'vue';
import CurrencyInput from './CurrencyInput.vue';
import readme from './README.md';

export default {
    title: 'Components/CurrencyInput',
    component: CurrencyInput,
    argTypes: {
        locale: {
            name: 'Locale',
            type: { name: 'string', required: false },
            defaultValue: 'de-DE',
        },

        modelValue: {
            description: 'The value of the field. Supports v-model binding',
        },

        currency: {
            description: 'The 3-letter currency code',
        },

        round: {
            description:
                'If true, the value will be rounded after input. (e.g. 1.009 EUR will become 1.01 EUR and 100.9 ISK will become 101 ISK)',
        },

        minorUnit: {
            description:
                'If true, then it’s assumed that the minor unit of the selected currency is being used. (e.g. the value represents EUR cents, not EUR). This only affects the value, the major unit is always displayed. So if value=10000 and this prop is set, then ‘100.00 EUR’ will be displayed in the field. If the user changes the value to 120, then 12000 will be emitted in the update. If the currency has no minor unit such as ISK, then this prop has no effect.',
        },
    },
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
};

const Template = (args: any) => ({
    components: { CurrencyInput },
    setup() {
        provide('locale', args.locale);

        return { args };
    },
    template: '<CurrencyInput v-bind="args" />',
});

export const Euro = Template.bind({});
Euro.args = {
    modelValue: 100,
    currency: 'EUR',
};

export const USDollar = Template.bind({});
USDollar.args = {
    locale: 'en-US',
    modelValue: 100,
    currency: 'USD',
};
