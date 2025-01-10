<template>
    <div :data-select-option-group-id="groupId" class="ay-option-group">
        <slot name="title">
            <div class="ay-option-group__title">{{ title }}</div>
        </slot>
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useOptionGroupProvider from '@/components/Select/composables/useOptionGroupProvider';

export default defineComponent({
    name: 'OptionGroup',

    props: {
        title: {
            type: String,
            default: '',
        },
    },

    setup() {
        return useOptionGroupProvider();
    },
});
</script>
