/**
 * External dependencies.
 */
import type { PropType } from 'vue';

/**
 * Internal dependencies.
 */
import type { ValueType } from '@/components/Select/BaseSelectTypes';

export function getBaseSelectProps<T extends ValueType>() {
    return {
        modelValue: {
            type: [String, Object, Number, Array] as PropType<T>,
            default: null,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        // This is the label for the whole select
        label: {
            type: String,
            default: null,
        },
        appendDropdownToBody: {
            type: Boolean,
            default: true,
        },

        required: {
            type: Boolean,
            default: false,
        },
    };
}

export default function getCommonSelectProps<T extends ValueType>() {
    return {
        ...getBaseSelectProps<T>(),
        placeholder: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        // this is to get the label for individual select option
        getLabel: {
            type: Function as PropType<(_: T) => string>,
            default: (value: T) => value?.toString(),
        },
        searchable: {
            type: Boolean,
            default: false,
        },
    };
}
