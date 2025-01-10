<template>
    <LineChartJs :data="data" :options="options" />
</template>

<script>
import { Line as LineChartJs } from 'vue-chartjs';
import {
    Chart,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LinearScale,
    TimeScale,
    CategoryScale,
    Filler,
} from 'chart.js';

Chart.register(LineElement, PointElement, Title, Tooltip, Legend, LinearScale, TimeScale, CategoryScale, Filler);

export default {
    name: 'LineChart',

    components: {
        LineChartJs,
    },

    props: {
        chartData: {
            type: Object,
            required: true,
        },
        unit: {
            type: String,
            default: '',
        },
        locale: {
            type: String,
            default: 'en',
        },
        rtl: {
            type: Boolean,
            default: false,
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
                        fill: true,
                        borderColor: '#FBB410',
                        borderWidth: 2,
                        backgroundColor: ctx => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 0, 0, 160);

                            gradient.addColorStop(0, '#fdd25180');
                            gradient.addColorStop(0.5, '#FDD2513C');
                            gradient.addColorStop(1, '#FDD25100');

                            return gradient;
                        },
                    },
                ],
            };
        },
        computedUnit() {
            return this.unit.length ? ` ${this.unit}` : '';
        },
        options() {
            const rtl = this.rtl;
            const locale = this.locale;

            return {
                locale,
                plugins: {
                    tooltip: {
                        rtl,
                        callbacks: {
                            label: context => {
                                return ' ' + (context.formattedValue || context.raw) + this.computedUnit;
                            },
                        },
                    },
                    legend: {
                        display: false,
                    },
                },
                elements: {
                    line: {
                        tension: 0.2,
                    },
                    point: {
                        radius: 2,
                        hitRadius: 6,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#828991',
                        },
                        adapters: {
                            date: {
                                locale,
                            },
                        },
                        reverse: rtl,
                    },
                    y: {
                        type: 'linear',
                        position: rtl ? 'right' : 'left',
                        ticks: {
                            color: '#828991',
                            callback: val => {
                                return val + this.computedUnit;
                            },
                        },
                    },
                },
                responsive: true,
                maintainAspectRatio: true,
            };
        },
    },
};
</script>
