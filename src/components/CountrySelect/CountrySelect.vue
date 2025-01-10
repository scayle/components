<template>
    <Select
        v-model="value"
        :append-dropdown-to-body="appendDropdownToBody"
        :get-label="(s: any) => s?.name"
        class="ay-country-select"
        searchable
    >
        <template #default="{ query }">
            <Option
                v-for="country in countryOptions.filter(s => s?.name?.toLowerCase().includes(query.toLowerCase()))"
                :key="country.code"
                :label="country.name"
                :value="country"
            >
                <template #icon>
                    <CountryFlag :country-code="country.code" />
                </template>
            </Option>
        </template>
    </Select>
</template>

<script lang="ts">
import './CountrySelect.css';
import type { PropType } from 'vue';
import { defineComponent, computed, toRefs } from 'vue';

import Select from '../Select/Select.vue';
import Option from '../Select/components/Option/Option.vue';
import CountryFlag from '../CountryFlag/CountryFlag.vue';
import useConfig from '@/composables/useConfig';

export default defineComponent({
    name: 'CountrySelect',

    components: {
        /* eslint-disable */
        Select,
        /* eslint-disable */
        Option,
        CountryFlag,
    },

    props: {
        /**
         * 2 digit country code
         */
        modelValue: {
            type: String as PropType<string>,
            validator: (value: string) => value.length === 2,
            default: null,
        },
        /**
         * Array of 2 digit country codes
         */
        countries: {
            type: Array as PropType<string[]>,
            validator: (value: string[]) => value.every(s => s.length === 2),
            default: () => [],
        },
        /**
         * Translation Language
         */
        languageTag: {
            type: String as PropType<string>,
            default: null,
        },

        /**
         * Whether the select dropdown should be part of the select itself or inserted in the body
         */
        appendDropdownToBody: {
            type: Boolean,
            default: true,
        },
    },

    emits: {
        ['update:modelValue'](_payload: String) {
            return true;
        },
    },

    setup(props) {
        const config = useConfig();
        const { languageTag } = toRefs(props);

        const locale = computed(() => languageTag.value ?? config.locale);

        return {
            locale,
        };
    },

    computed: {
        countryOptions() {
            return this.countries.map(code => ({
                code,
                name: this.translateCountryCode(code),
            }));
        },
        value: {
            get() {
                return this.countryOptions?.find(s => s.code === this.modelValue);
            },
            set(val: { code: string; name: string }) {
                this.$emit('update:modelValue', val.code);
            },
        },
    },

    methods: {
        translateCountryCode(code: string) {
            const regionNameTranslator = new Intl.DisplayNames([this.locale], { type: 'region' });

            try {
                const name = regionNameTranslator.of(code.toUpperCase());
                return name !== code.toUpperCase() ? name : '';
            } catch {
                return '';
            }
        },
    },
});
</script>
