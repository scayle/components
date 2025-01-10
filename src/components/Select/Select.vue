<template>
    <component :is="selectComponent" v-model="value" v-bind="$props">
        <template #default="{ query }">
            <slot :query="query" />
        </template>
    </component>
</template>

<script lang="ts">
import { useVModel } from '@vueuse/core';
import { computed, defineComponent } from 'vue';

import SimpleSelect from './components/SimpleSelect/SimpleSelect.vue';
import MultiSelect from './components/MultiSelect/MultiSelect.vue';

import getCommonSelectProps from './SelectProps';
import type { MultiSelectValueType, ValueType } from '@/components/Select/BaseSelectTypes';

export default defineComponent({
    /* eslint-disable */
    name: 'Select',

    components: {
        MultiSelect,
        SimpleSelect,
    },

    props: {
        ...getCommonSelectProps<ValueType | MultiSelectValueType>(),

        multiple: {
            type: Boolean,
            default: false,
        },
    },

    emits: {
        ['update:modelValue'](_payload: ValueType | MultiSelectValueType) {
            return true;
        },
    },

    setup(props, { emit }) {
        const value = useVModel(props, 'modelValue', emit);
        const selectComponent = computed(() => (props.multiple ? MultiSelect : SimpleSelect));

        return {
            value,
            selectComponent,
        };
    },
});
</script>
