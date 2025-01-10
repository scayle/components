<template>
    <li
        :key="crumb.id"
        :data-index="index"
        class="flex overflow-hidden items-center max-w-48 text-dark-grey"
        aria-current="page"
        :class="{
            'text-black font-bold': isLast,
        }"
    >
        <template v-if="(crumb.href || crumb.route) && crumb.name && !isLast">
            <a
                v-if="getHref(crumb)"
                class="text-dark-grey hover:text-black hover:no-underline truncate"
                :href="getHref(crumb)!"
                :title="crumb.name"
                >{{ crumb.name }}</a
            >
        </template>
        <span v-else-if="crumb.name" class="truncate" :title="crumb.name">{{ crumb.name }}</span>
        <Dropdown v-else-if="crumb.dropdown" trigger="click" placement="bottom" data-e2e="breadcrumb-switcher-item">
            <button class="btn p-0 h-full bg-transparent border-transparent shadow-none">
                <IconPanelMore class="icon icon-square icon-sm text-dark-grey rotate-90" />
            </button>

            <template #dropdown>
                <DropdownMenu class="pb-2 mt-2">
                    <DropdownItem
                        v-for="collapsedCrumb in collapsedItems"
                        :key="collapsedCrumb.id"
                        :disabled="
                            !(
                                (collapsedCrumb.href || collapsedCrumb.route) &&
                                collapsedCrumb.name &&
                                getHref(collapsedCrumb)
                            )
                        "
                        class="hover:bg-white hover:cursor-default"
                    >
                        <a
                            v-if="
                                (collapsedCrumb.href || collapsedCrumb.route) &&
                                collapsedCrumb.name &&
                                getHref(collapsedCrumb)
                            "
                            class="text-black truncate"
                            :href="getHref(collapsedCrumb)!"
                        >
                            {{ collapsedCrumb.name }}
                        </a>
                        <span v-else-if="collapsedCrumb.name" class="text-black">{{ collapsedCrumb.name }}</span>
                        <div v-else class="text-black">
                            <spinner class="spinner-sm my-2" />
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </template>
        </Dropdown>
        <div v-else>
            <spinner class="spinner-sm" />
        </div>
        <IconPanelChevronRight v-if="!isLast" class="icon icon-sm mx-1 text-dark-grey" />
    </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

/**
 * External dependencies.
 */
import Dropdown from '../Dropdown/Dropdown.vue';
import DropdownItem from '../Dropdown/DropdownItem.vue';
import DropdownMenu from '../Dropdown/DropdownMenu.vue';
import type { Breadcrumb, Breadcrumbs } from './Breadcrumbs.vue';

export default defineComponent({
    name: 'Breadcrumbs',

    components: {
        Dropdown,
        DropdownMenu,
        DropdownItem,
    },

    props: {
        index: {
            type: Number,
            required: true,
        },
        crumb: {
            type: Object as PropType<Breadcrumb>,
            required: true,
        },
        collapsedItems: {
            type: Array as PropType<Breadcrumbs>,
            default: () => [],
        },
        isLast: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        getHref(crumb: Breadcrumb): string | null {
            if (crumb.route) {
                // @ts-expect-error
                return this.$router.resolve(crumb.route).href;
            } else if (crumb.href) {
                return crumb.href;
            }
            return null;
        },
    },
});
</script>
