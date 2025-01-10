<template>
    <div class="max-w-2xl">
        <div class="flex items-start justify-between font-bold text-2xl pb-6">
            <div class="flex items-center">
                <div class="flex justify-center space-x-4">
                    <div v-if="icon" class="border-2 rounded text-dark-grey">
                        <component :is="icon" />
                    </div>
                    <div>{{ title }}</div>
                </div>
            </div>
            <div v-if="showAverage" class="flex flex-col items-end font-bold text-xl">
                <div class="text-4xl">{{ averageValue }}</div>
                <div>Ø {{ averageLabel }}</div>
            </div>
        </div>
        <VerticalBarChart :chart-data="chartData" :tooltip-prefix="tooltipPrefix" :unit="unit" />
    </div>
</template>

<script>
export default {
    name: 'VerticalBarChart',

    props: {
        showAverage: {
            type: Boolean,
            default: true,
        },
        chartData: {
            type: Object,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        averageLabel: {
            type: String,
            default: '',
        },
        averageValue: {
            type: String,
            default: '',
        },
        unit: {
            type: String,
            default: '',
        },
        tooltipPrefix: {
            type: String,
            default: '',
        },
        icon: null,
    },
};
</script>
