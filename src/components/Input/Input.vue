<template>
    <div class="ay-input" :class="`ay-input--${size}`">
        <div v-if="$slots.prepend" class="ay-input__prepend">
            <slot name="prepend" />
        </div>

        <div v-if="$slots.append" class="ay-input__append">
            <slot name="append" />
        </div>

        <div class="ay-input__inner">
            <span v-if="$slots.prefix" class="ay-input__prefix">
                <slot name="prefix" />
            </span>

            <span v-if="$slots.suffix && !disabled" class="ay-input__suffix">
                <slot name="suffix" />
            </span>

            <input
                :disabled="disabled"
                v-bind="$attrs"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            >
        </div>
    </div>
</template>

<script lang="ts">
import './Input.css';

// Based on the element-ui input component
// https://github.com/ElemeFE/element/blob/dev/packages/input/src/input.vue
// Adapted for Vue 3 and based on our styleguide
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export type InputSize = 'small' | 'normal';

export default defineComponent({
    /* eslint-disable */
    name: 'Input',
    props: {
        size: {
            type: String as PropType<InputSize>,
            default: 'normal',
            validator: (value: string) => ['small', 'normal'].includes(value),
        },
        modelValue: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        ['update:modelValue'](_payload: string) {
            return true;
        },
    },
});
</script>
