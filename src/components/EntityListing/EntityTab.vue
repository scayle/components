<template>
    <TabButton :badge-text="badgeText" :label="tabLabel" :name="name">
        <Card>
            <template #header>
                <slot name="header" />
            </template>

            <slot />
        </Card>
    </TabButton>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import TabButton from '@/components/Tabs/TabButton.vue';
import Card from '@/components/Card/Card.vue';

export default defineComponent({
    name: 'EntityTab',

    components: {
        Card,
        TabButton,
    },

    props: {
        name: {
            type: String,
            required: true,
        },

        tabLabel: {
            type: String,
            default: null,
        },

        badgeText: {
            type: [String, Number],
            default: () => null,
        },
    },

    setup() {},
});
</script>
