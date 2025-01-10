<template>
    <div class="ay-textarea">
        <div v-if="$slots.prepend" class="ay-textarea__prepend">
            <slot name="prepend" />
        </div>

        <div v-if="$slots.append" class="ay-textarea__append">
            <slot name="append" />
        </div>

        <div class="ay-textarea__inner">
            <span v-if="$slots.prefix" class="ay-textarea__prefix">
                <slot name="prefix" />
            </span>

            <span v-if="$slots.suffix" class="ay-textarea__suffix">
                <slot name="suffix" />
            </span>

            <textarea
                v-bind="$attrs"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import './Textarea.css';

// Based on the element-ui input component
// https://github.com/ElemeFE/element/blob/dev/packages/input/src/input.vue
// Adapted for Vue 3 and based on our styleguide
import { defineComponent } from 'vue';

export default defineComponent({
    /* eslint-disable */
    name: 'Textarea',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: {
        ['update:modelValue'](_payload: string) {
            return true;
        },
    },
});
</script>
