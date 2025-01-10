<template>
    <div class="py-8 m-0 text-center">
        <component :is="icon" v-if="icon" class="icon icon-xl mb-2 w-full text-primary" />

        <h4 v-if="!!textTitle">
            {{ textTitle }}
        </h4>

        <h5 v-if="!!textHint" class="mx-auto mt-3 mb-0 max-w-90 font-normal text-dark-grey">
            {{ textHint }}
        </h5>

        <div v-if="$slots.button || textButton" class="mt-4">
            <slot v-if="$slots.button" name="button" />

            <button
                v-else
                class="btn btn-primary"
                data-e2e="add-first-entry-button"
                @click="$emit('primaryBtnClicked')"
            >
                {{ textButton }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmptyState',

    props: {
        icon: null,
        textTitle: {
            type: String,
            default: null,
        },
        textHint: {
            type: String,
            default: null,
        },
        textButton: {
            type: String,
            default: null,
        },
    },

    emits: ['primaryBtnClicked'],
};
</script>
