<template>
    <BaseOption :value="value">
        <template #default="{ selected, active }">
            <div
                :class="{
                    'ay-option--selected': selected,
                    'ay-option--active': active,
                    'ay-option--icon': $slots.icon,
                    'ay-option--with-hint': hint || $slots.hint,
                }"
                class="ay-option"
            >
                <slot v-if="$slots.icon" class="ay-option__icon" name="icon" />
                <div class="ay-option__label">
                    <slot>{{ label }}</slot>
                </div>
                <div v-if="hint || $slots.hint" class="ay-option__hint">
                    <slot name="hint">{{ hint }}</slot>
                </div>
                <div v-if="description || $slots.description" class="ay-option__description">
                    <slot name="description">{{ description }}</slot>
                </div>
            </div>
        </template>
    </BaseOption>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BaseOption from './BaseOption.vue';

export default defineComponent({
    /* eslint-disable */
    name: 'Option',
    components: {
        BaseOption,
    },
    props: {
        value: {
            type: [String, Number, Object],
            required: true,
        },
        label: {
            type: String,
            default: null,
        },
        description: {
            type: String,
            default: null,
        },
        hint: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        closeOnSelect: {
            type: Boolean,
            default: true,
        },
    },
});
</script>
