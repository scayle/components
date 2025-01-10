<template>
    <div
        class="group flex cursor-pointer items-center justify-between rounded p-2 hover:bg-primary/10 hover:text-primary"
        :data-e2e="`sidebar-${category.icon}`"
    >
        <div class="flex items-center" :class="{ truncate: !/\s/g.test(category.label) }">
            <component
                :is="category.icon"
                class="icon text-secondary group-hover:text-primary"
                :data-e2e="`icon-${category.icon}`"
                :class="category.iconClass"
            />
            <span class="pl-3 font-bold" :class="{ truncate: !/\s/g.test(category.label) }">
                {{ category.label }}
            </span>
        </div>
        <div class="flex items-center">
            <span class="badge-secondary badge min-w-min group-hover:text-primary">
                {{ category.itemsCount || 0 }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    category: {
        type: Object,
        default: () => ({}),
    },
});
</script>

<style scoped>
.active .icon,
.active .badge {
    /* "@apply" can't overwrite ".badge-secondary"/".text-secondary", since they're defined as "!important"
    therefore, we need to use "!important" here as well */
    color: theme('colors.primary') !important;
}
</style>
