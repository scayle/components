<template>
    <BarChart :data="data" :options="options" />
</template>

<script>
import { Bar as BarChart } from 'vue-chartjs';
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController);

export default {
    components: {
        BarChart,
    },

    props: {
        chartData: {
            type: Object,
            required: true,
        },
        tooltipPrefix: {
            type: String,
            default: '',
        },
        unit: {
            type: String,
            default: '',
        },
    },

    computed: {
        data() {
            const labels = Object.keys(this.chartData);
            const data = Object.values(this.chartData);
            return {
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: '#0FA6F3',
                        borderWidth: 0,
                        borderRadius: 10,
                        barPercentage: 1.2,
                        hoverBackgroundColor: '#60C4F7',
                    },
                ],
            };
        },
        computedPrefix() {
            return this.tooltipPrefix.length ? `${this.tooltipPrefix}: ` : '';
        },
        computedUnit() {
            return this.unit.length ? ` ${this.unit}` : '';
        },
        options() {
            return {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            title: tooltipData => {
                                return this.computedPrefix + tooltipData[0].label;
                            },
                            label: context => {
                                return ` ${context.formattedValue || context.raw}${this.computedUnit}`;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#828991',
                            font: {
                                size: 16,
                            },
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: val => {
                                return val + this.computedUnit;
                            },
                            color: '#828991',
                            font: {
                                size: 16,
                            },
                        },
                    },
                },
            };
        },
    },

    methods: {
        footer(tooltipData) {
            return `${tooltipData[0].raw} %`;
        },
    },
};
</script>
