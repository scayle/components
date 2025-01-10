<template>
    <StatisticsLegend :items="items" v-bind="props">
        <template v-if="useSlot" #item="{ item }: { item: any }">
            <div class="ml-2 flex grow items-center justify-between">
                <span class="font-bold">{{ item.x }}</span>

                <div class="inline-flex items-center">
                    <span class="mr-2">{{ item.y }}</span>

                    <span class="rounded bg-dark px-2 py-1 text-sm font-bold text-dark-grey">
                        {{ item.percentage }} %
                    </span>
                </div>
            </div>
        </template>
    </StatisticsLegend>
</template>

<script lang="ts" setup>
// This component is only supposed to be used within Storybook
// The reason for this component is that without a Vue-component wrapper, the reactivity on v-model would not work
// Storybook args are primitive values and can't be mutated, only replaced
import { ref } from 'vue';
import { getBackground, getForeground } from '../chart-utils';
import StatisticsLegend from './StatisticsLegend.vue';

const props = defineProps({
    border: {
        type: Boolean,
        default: true,
    },
    twoCols: {
        type: Boolean,
        default: true,
    },
    useSlot: {
        type: Boolean,
        default: false,
    },
});

const items = ref([
    {
        x: 'Denmark',
        y: 40000,
        percentage: 12,
        visible: true,
        background: getBackground(0),
        color: getForeground(getBackground(0)),
    },
    {
        x: 'Norway',
        y: 600000,
        percentage: -8,
        visible: true,
        background: getBackground(1),
        color: getForeground(getBackground(1)),
    },
    {
        x: 'Germany',
        y: 1200000,
        percentage: 21,
        visible: true,
        background: getBackground(2),
        color: getForeground(getBackground(2)),
    },
    {
        x: 'United Kingdom',
        y: 50000,
        percentage: 7,
        visible: true,
        background: getBackground(3),
        color: getForeground(getBackground(3)),
    },
    {
        x: 'Austria',
        y: 900000,
        percentage: -15,
        visible: true,
        background: getBackground(4),
        color: getForeground(getBackground(4)),
    },
    {
        x: 'Switzerland',
        y: 424000,
        percentage: 17,
        visible: true,
        background: getBackground(5),
        color: getForeground(getBackground(5)),
    },
]);
</script>
