<template>
    <span v-if="hasIcon" v-sanitize-html="flagSvg" :title="formattedCountryCode" class="ay-country-flag" />
    <span v-else class="ay-country-flag ay-country-flag--empty">
        <IconPanelWorld />
    </span>
</template>

<script lang="ts">
import './CountryFlag.css';
import { defineComponent, type PropType } from 'vue';
import { hasFlag } from 'country-flag-icons';

/* eslint import/namespace: ['error', { allowComputed: true }] */
import * as svg from 'country-flag-icons/string/3x2';

import sanitizeHtmlDirective from '@/directives/sanitize-html';

export default defineComponent({
    name: 'CountryFlag',

    directives: {
        'sanitize-html': sanitizeHtmlDirective,
    },

    props: {
        /**
         * 2 digit country code
         */
        countryCode: {
            type: String as PropType<string>,
            validator: (value: string) => value.length === 2,
            required: true,
        },
    },

    computed: {
        formattedCountryCode() {
            return this.countryCode?.toUpperCase();
        },
        hasIcon() {
            return this.formattedCountryCode ? hasFlag(this.formattedCountryCode) : false;
        },
        flagSvg() {
            //  @ts-ignore
            return svg?.[this.formattedCountryCode];
        },
    },
});
</script>
