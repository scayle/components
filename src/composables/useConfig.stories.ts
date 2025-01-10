/* eslint-disable vue/one-component-per-file */

import { defineComponent } from 'vue';

import useConfig from './useConfig';

export default {
    title: 'Composables/useConfig',
};

const ShowConfig = defineComponent({
    setup() {
        const config = useConfig();

        return { config };
    },
    template: '<div>Locale: {{config.locale}}</div>',
});

const GermanLocale = defineComponent({
    setup() {
        const config = useConfig({ locale: 'de' });

        return { config };
    },
    render() {
        return this.$slots.default();
    },
});

export const Default = (args: any) => ({
    components: { ShowConfig },
    setup() {
        return {
            args,
        };
    },
    template: '<ShowConfig/>',
});

export const OverrideConfig = (args: any) => ({
    components: { GermanLocale, ShowConfig },
    setup() {
        return {
            args,
        };
    },
    template: '<GermanLocale><ShowConfig/></GermanLocale>',
});
