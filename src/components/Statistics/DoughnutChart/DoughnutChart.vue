<template>
    <div :style="{ width }">
        <DoughnutChartJs ref="doughnut" :data="data" :options="options" />
    </div>
</template>

<script>
import { Doughnut as DoughnutChartJs } from 'vue-chartjs';
import { ArcElement, Chart } from 'chart.js';
import { getBackground } from '../chart-utils';

Chart.register(ArcElement);
Chart.register({
    id: 'doughnut-centertext',
    beforeDraw(chart) {
        if (chart.config.options?.elements?.center) {
            // Get ctx from string
            const ctx = chart.ctx;

            // Get options from the center object in options
            const centerConfig = chart.config.options.elements.center;
            const title = centerConfig.title;
            const heading = centerConfig.heading;

            if (!title && !heading) {
                return;
            }

            const fontStyle = centerConfig.fontStyle || 'Arial';
            const color = centerConfig.color;
            const headingColor = centerConfig.headingColor;
            const sidePadding = centerConfig.sidePadding || 20;
            const sidePaddingCalculated =
                (sidePadding / 100) * (chart._metasets[chart._metasets.length - 1].data[0].innerRadius * 2);

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            // var stringWidth = ctx.measureText(title).width;
            const elementWidth =
                chart._metasets[chart._metasets.length - 1].data[0].innerRadius * 2 - sidePaddingCalculated;

            // Set font settings to draw it correctly.
            const textOffset = title && heading ? 10 : 0;
            const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
            const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            if (heading) {
                ctx.fillStyle = headingColor;
                ctx.font = `bold ${elementWidth * 0.09}px ${fontStyle}`;
                ctx.fillText(heading, centerX, centerY - textOffset);
            }

            if (title) {
                const lineHeight = 22;
                const lines = title.split('\n');

                ctx.fillStyle = color;
                ctx.font = `bold ${elementWidth * 0.175}px ${fontStyle}`;

                for (let i = 0; i < lines.length; i++) {
                    const y = centerY + textOffset + i * lineHeight - ((lines.length - 1) * lineHeight) / 2;
                    ctx.fillText(lines[i], centerX, y);
                }
            }
        }
    },
});

export default {
    name: 'DoughnutChart',

    components: {
        DoughnutChartJs,
    },

    props: {
        chartData: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        titleColor: {
            type: String,
            default: '#000',
        },
        heading: {
            type: String,
            default: '',
        },
        headingColor: {
            type: String,
            default: '#8b8e92',
        },
        width: {
            type: String,
            default: '300px',
        },
        activeIndex: {
            type: Number,
            default: -1,
        },
    },

    computed: {
        data() {
            const data = this.chartData.map(el => el.y);

            return {
                labels: this.chartData.map(el => el.x),
                datasets: [
                    {
                        data,
                        backgroundColor: this.chartData.map((el, index) => el.background ?? getBackground(index)),
                    },
                ],
            };
        },

        options() {
            return {
                elements: {
                    center: {
                        title: this.title,
                        color: this.titleColor,
                        fontStyle: 'Arial',
                        heading: this.heading,
                        headingColor: this.headingColor,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: context => this.chartData[context.dataIndex].tooltip,
                        },
                    },
                },
                borderWidth: this.chartData.length === 1 ? 0 : 4,
                hoverBorderWidth: this.chartData.length === 1 ? 0 : 6,
                hoverBorderColor: 'transparent',
                responsive: true,
                maintainAspectRatio: true,
            };
        },
    },

    watch: {
        activeIndex(index) {
            const chart = this.$refs.doughnut.chart;
            if (!chart) {
                return;
            }

            if (index < 0) {
                chart.tooltip?.setActiveElements([]);
                chart.setActiveElements([]);
            } else {
                chart.setActiveElements([
                    {
                        datasetIndex: 0,
                        index,
                    },
                ]);
                chart.tooltip?.setActiveElements([
                    {
                        datasetIndex: 0,
                        index,
                    },
                ]);
            }
            chart.update();
        },
    },
};
</script>
