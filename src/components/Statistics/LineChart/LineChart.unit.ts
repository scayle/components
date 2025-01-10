import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LineChart from './LineChart.vue';

describe('LineChart.vue', () => {
    it('should render a canvas', async () => {
        const wrapper = mount(LineChart, {
            props: {
                chartData: {
                    '26.05.': 750,
                    '27.05.': 1050,
                    '28.05.': 900,
                    '29.05.': 800,
                    '30.05.': 1150,
                    '31.05.': 1100,
                    '01.06.': 1200,
                    '02.06.': 900,
                },
            },
        });

        expect(wrapper.html()).toContain('<canvas');
    });
});
