import CountryFlag from './CountryFlag.vue';

export default {
    title: 'Components/CountryFlag',
    component: CountryFlag,
};

const Template = (args: any) => ({
    components: { CountryFlag },
    setup() {
        return { args };
    },
    template: '<CountryFlag v-bind="args"></CountryFlag>',
});

export const Default = Template.bind({});

Default.args = {
    countryCode: '',
};

export const WithSelectedValue = Template.bind({});

WithSelectedValue.args = {
    countryCode: 'de',
};
