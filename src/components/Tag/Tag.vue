<template>
    <span :class="typeClass" class="ay-tag">
        <slot />
        <IconPanelClose
            v-if="closable"
            class="ay-tag__close-btn"
            :class="{ disabled: disabled }"
            @click="!disabled ? $emit('close', $event) : null"
        />
    </span>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import './Tag.css';

export default defineComponent({
    name: 'Tag',
    props: {
        closable: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<'info' | 'warning' | 'danger' | 'success' | null>,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        close(_event: Event) {
            return true;
        },
    },
    computed: {
        typeClass() {
            if (!this.type) {
                return 'ay-tag--default';
            }

            return {
                info: 'ay-tag--info',
                warning: 'ay-tag--warning',
                success: 'ay-tag--success',
                danger: 'ay-tag--danger',
            }[this.type];
        },
    },
});
</script>
