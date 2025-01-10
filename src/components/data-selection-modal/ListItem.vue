<template>
    <div class="cursor-pointer rounded border p-5 hover:border-primary" :data-e2e="`import-${item.value}`">
        <div class="mb-5 flex items-center justify-between">
            <div class="border rounded p-1">
                <component :is="item.icon" class="icon text-primary" />
            </div>

            <template v-if="canBeSavedAsFavorite">
                <IconPanelStarFill
                    v-if="item.isFavorite"
                    class="icon text-yellow"
                    @click.stop="emit('setIsFavorite', item.value, false)"
                />
                <IconPanelStar
                    v-else
                    class="icon text-secondary"
                    @click.stop="emit('setIsFavorite', item.value, true)"
                />
            </template>
        </div>

        <p class="mb-1 pb-0.5 font-bold" :class="{ truncate: !/\s/g.test(item.label) }">
            {{ item.label }}
        </p>

        <p class="text-sm text-secondary" :class="{ truncate: !/\s/g.test(item.description) }">
            {{ item.description }}
        </p>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
    canBeSavedAsFavorite: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['setIsFavorite']);
</script>
