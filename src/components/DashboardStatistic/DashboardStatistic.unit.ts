import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import DashboardStatistic from './DashboardStatistic.vue';
import type { GetUsageProps } from '@/utils';

type DashboardStatisticProps = GetUsageProps<InstanceType<typeof DashboardStatistic>>;

describe('DashboardStatistic.vue', () => {
    const propsData: DashboardStatisticProps = {
        value: '99',
        color: 'red',
        label: 'Label',
        secondaryLabel: 'Secondary Label',
    };

    it('should render all textual fields', async () => {
        const wrapper = mount(DashboardStatistic, {
            propsData,
        });

        expect(wrapper.find('.ay-dashboard-statistic__value').text()).toEqual(propsData.value);
        expect(wrapper.find('.ay-dashboard-statistic__label').text()).toEqual(propsData.label);
        expect(wrapper.find('.ay-dashboard-statistic__label--secondary').text()).toEqual(propsData.secondaryLabel);
    });

    it('should not contain icon', async () => {
        const wrapper = mount(DashboardStatistic, {
            propsData,
        });

        expect(wrapper.html()).not.toContain('ay-dashboard-statistic__icon');
    });

    it('should not contain secondary label', async () => {
        const propsWithoutLabel = { ...propsData };
        delete propsWithoutLabel.secondaryLabel;

        const wrapper = mount(DashboardStatistic, {
            propsData: propsWithoutLabel,
        });

        expect(wrapper.html()).not.toContain('<div class="ay-dashboard-statistic__label--secondary"></div>');
    });

    it('should contain icon', async () => {
        const wrapper = mount(DashboardStatistic, {
            propsData,
            slots: {
                default: '<svg id="icon-simulator"></svg>',
            },
        });

        expect(wrapper.html()).toContain('ay-dashboard-statistic__icon');
        expect(wrapper.html()).toContain('<svg id="icon-simulator"></svg>');
    });
});
