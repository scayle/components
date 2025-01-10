<template>
    <label
        :class="{
            'ay-checkbox--checked': modelValue,
            'flex items-center': !label && $slots.default,
            'ay-checkbox--disabled': disabled,
        }"
        class="ay-checkbox"
    >
        <span class="ay-checkbox__input">
            <span class="ay-checkbox__inner" :class="{ 'dark-check': darkCheck }" :style="style" />

            <input
                :checked="modelValue"
                aria-hidden="false"
                class="ay-checkbox__original"
                type="checkbox"
                :disabled="disabled"
                @change="onChange"
            >
        </span>

        <span v-if="label && !$slots.default" class="ay-checkbox__label">
            {{ label }}
        </span>

        <slot />
    </label>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './Checkbox.css';

export default defineComponent({
    name: 'Checkbox',

    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: null,
        },
        backgroundColor: {
            type: String,
            default: null,
        },
        darkCheck: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    emits: {
        'update:modelValue'(_checked: boolean) {
            return true;
        },

        change(_checked: boolean) {
            return true;
        },
    },

    setup(_, { emit }) {
        const onChange = (event: Event) => {
            const checked = (event.target as HTMLInputElement).checked;

            emit('update:modelValue', checked);
            emit('change', checked);
        };

        return {
            onChange,
        };
    },

    computed: {
        style() {
            return this.disabled
                ? undefined
                : {
                      backgroundColor: this.backgroundColor,
                      borderColor: this.backgroundColor,
                  };
        },
    },
});
</script>
