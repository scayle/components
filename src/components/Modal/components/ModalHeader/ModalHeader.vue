<template>
    <div class="ay-modal__header">
        <span class="ay-modal__header-title">{{ title }}</span>

        <button class="ay-modal__close-btn" @click="$emit('click', $event)">
            <IconPanelClose class="icon-md" />
        </button>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */

export default defineComponent({
    name: 'ModalHeader',

    props: {
        title: {
            type: String,
            required: true,
        },
    },

    emits: {
        click(_event: Event) {
            return true;
        },
    },
});
</script>
