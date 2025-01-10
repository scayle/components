<template>
    <CurrencyBehavior
        v-slot="{ componentBindings }"
        v-model="value"
        :currency="currency"
        :minor-unit="minorUnit"
        :round="round"
    >
        <Input v-bind="componentBindings" />
    </CurrencyBehavior>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import Input from '../Input/Input.vue';
import CurrencyBehavior from './CurrencyBehavior.vue';

export default defineComponent({
    name: 'CurrencyInput',
    components: {
        /* eslint-disable */
        Input,
        CurrencyBehavior,
    },
    props: {
        modelValue: {
            type: Number as PropType<number | null>,
            default: 0,
        },
        currency: {
            type: String as PropType<string | null>,
            default: '',
        },
        round: {
            type: Boolean,
            default: false,
        },
        minorUnit: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        ['update:modelValue'](_payload: String) {
            return true;
        },
    },
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(val: string) {
                this.$emit('update:modelValue', val);
            },
        },
    },
});
</script>
