<template>
    <span class="block text-base"> {{ label }}: {{ value }}</span>
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
    name: 'EntityListItemKeyValue',

    props: {
        label: {
            type: String,
            required: true,
        },

        value: {
            type: [String, Number],
            required: true,
        },
    },
});
</script>
