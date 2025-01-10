<template>
    <div class="ay-dashboard-statistic">
        <div v-if="$slots.default" class="ay-dashboard-statistic__icon icon" :style="iconStyles">
            <slot />
        </div>
        <div class="ay-dashboard-statistic__body">
            <div class="ay-dashboard-statistic__value">{{ value }}</div>
            <div class="ay-dashboard-statistic__label">{{ label }}</div>
            <div v-if="secondaryLabel" class="ay-dashboard-statistic__label--secondary">
                {{ secondaryLabel }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import './DashboardStatistic.css';
import { defineComponent, type PropType } from 'vue';
import createColor from 'color';

export default defineComponent({
    name: 'DashboardStatistic',

    props: {
        value: {
            type: String as PropType<string>,
            required: true,
        },
        color: {
            type: String as PropType<string>,
            default: '',
        },
        label: {
            type: String as PropType<string>,
            default: '',
        },
        secondaryLabel: {
            type: String as PropType<string>,
            default: '',
        },
    },

    computed: {
        iconStyles() {
            return {
                background: createColor(this.color).lighten(0.9).string(),
                color: createColor(this.color).string(),
            };
        },
    },
});
</script>
