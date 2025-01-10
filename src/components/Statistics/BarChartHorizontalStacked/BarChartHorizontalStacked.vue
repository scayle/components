<template>
    <div class="whitespace-nowrap">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="border-color-white group box-border inline-flex h-24 items-center justify-center border transition-all"
            :class="{
                'rounded-l-lg': isFirst(index),
                'rounded-r-lg': isLast(index),
                'hover:scale-[1.07]': items.length > 1,
                'hover:scale-[1.02]': items.length === 1,
                'scale-[1.07]': items.length > 1 && activeIndex === index,
                'scale-[1.02]': items.length === 1 && activeIndex === index,
            }"
            :style="getStyle(item, index)"
            @mouseenter="$emit('hover', index)"
            @mouseleave="$emit('hover', -1)"
        >
            <div class="mx-4 flex w-full overflow-hidden">
                <span
                    class="inline-block overflow-hidden text-ellipsis rounded bg-black/20 px-2 py-1 text-xs font-bold uppercase text-white"
                >
                    {{ item.x }}
                </span>
            </div>

            <div class="absolute -top-12 hidden animate-fade-in flex-col items-center group-hover:flex">
                <div class="rounded bg-black/80 px-2 py-1">
                    <span class="block text-sm font-bold text-white/60">
                        {{ item.x }}
                    </span>

                    <span class="block text-base font-bold text-white">
                        {{ item.y }}
                    </span>
                </div>

                <span class="h-0 w-0 border-x-[6px] border-t-[9px] border-x-transparent border-t-black/80" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { getBackground } from '../chart-utils';

const props = defineProps({
    items: {
        type: Array as PropType<any[]>,
        required: true,
    },
    totalCount: {
        type: Number,
        default: null,
    },
    activeIndex: {
        type: Number,
        default: null,
    },
});

defineEmits(['hover']);

const isFirst = (index: number) => {
    return index === 0;
};

const isLast = (index: number) => {
    return index === props.items.length - 1;
};

const getWidth = (value: number) => {
    if (value === props.totalCount) {
        return '100%';
    } else if (value === 0) {
        return '0%';
    }

    const percentage = (value / props.totalCount) * 100;

    return `${percentage}%`;
};

const getStyle = (item: any, index: number) => {
    return {
        width: props.totalCount ? getWidth(item.y) : undefined,
        backgroundColor: item.background ?? getBackground(index),
    };
};
</script>
