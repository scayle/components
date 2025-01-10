<template>
    <label class="label">
        <span v-if="hasLabel" class="label-text" :class="isRequired ? 'is-required' : ''">{{ name }}</span>

        <!-- V-Model doesn't work when combining native elements and :is, so we use a v-if -->
        <!-- https://github.com/vuejs/vue/issues/11639 -->

        <input
            v-if="component === 'input'"
            v-model="inputValue"
            class="form-control"
            :name="name"
            :class="{ 'is-invalid': errors.length }"
            :placeholder="placeholder"
            :type="type"
            :disabled="disabled"
        >

        <textarea
            v-else-if="component === 'textarea'"
            v-model="inputValue"
            class="form-control"
            :name="name"
            :class="{ 'is-invalid': errors.length }"
            :placeholder="placeholder"
            :type="type"
            :disabled="disabled"
        />

        <span v-if="errors.length" class="invalid-feedback">
            {{ errors[0] }}
        </span>

        <span v-else-if="helpText" class="label-hint mb-0">
            {{ helpText }}
        </span>
    </label>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed } from 'vue';

export type FormFieldComponent = 'input' | 'textarea';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: null,
    },
    name: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: null,
    },
    rules: {
        type: [String, Object],
        default: null,
    },
    errors: {
        type: Array,
        default: () => [],
    },
    component: {
        type: String as PropType<FormFieldComponent>,
        default: 'input',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    helpText: {
        type: String,
        default: null,
    },
    hasLabel: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val),
});

const isRequired = computed(() => {
    if (!props.rules) {
        return false;
    }

    if (typeof props.rules === 'string') {
        return props.rules.includes('required');
    }

    return !!props.rules.required;
});
</script>
