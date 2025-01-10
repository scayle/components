<template>
    <ol
        v-if="localBreadcrumbs.length"
        class="flex pie-4 text-base bg-transparent rounded"
        aria-label="app-header-breadcrumb"
    >
        <BreadcrumbItem
            v-for="(crumb, index) in computedList"
            :key="index"
            :index="index"
            :crumb="crumb"
            :collapsed-items="collapsedItems"
            :is-last="index === computedList.length - 1"
        />
    </ol>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './Breadcrumbs.css';
import BreadcrumbItem from './BreadcrumbItem.vue';

export type Breadcrumb = {
    id?: string | number;
    name?: string;
    href?: string;
    route?: string;
    dropdown?: boolean;
};
export type Breadcrumbs = Breadcrumb[];

export default defineComponent({
    name: 'Breadcrumbs',
    components: {
        BreadcrumbItem,
    },
    props: {
        breadcrumbs: {
            type: Array as PropType<Breadcrumbs>,
            default: () => [],
        },
        collapseAtSize: {
            type: Number,
            default: 4,
        },
    },
    data() {
        return { localBreadcrumbs: [...this.breadcrumbs] };
    },
    computed: {
        collapsed() {
            if (this.breadcrumbs.length < 3) {
                // collapse not possible
                return false;
            }

            return this.breadcrumbs.length >= this.collapseAtSize;
        },
        computedList() {
            return this.collapsed
                ? [
                      ...this.localBreadcrumbs.slice(0, 1),
                      {
                          dropdown: true,
                      },
                      ...this.localBreadcrumbs.slice(this.localBreadcrumbs.length - 1),
                  ]
                : this.localBreadcrumbs;
        },
        collapsedItems() {
            return this.localBreadcrumbs.slice(1, this.localBreadcrumbs.length - 1);
        },
    },
    watch: {
        breadcrumbs: {
            immediate: true,
            handler() {
                this.localBreadcrumbs = this.breadcrumbs.map((crumb, i) => ({
                    ...crumb,
                    id: i,
                }));
            },
        },
    },
});
</script>
