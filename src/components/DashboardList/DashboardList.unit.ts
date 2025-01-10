import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import DashboardList from './DashboardList.vue';

describe('DashboardList.vue', () => {
    const propsData = {
        title: 'simple title',
        subtitle: 'simple subtitle',
    };

    it('should render all textual fields', async () => {
        const wrapper = mount(DashboardList, {
            propsData,
        });

        expect(wrapper.find('.ay-dashboard-list__header-title').text()).toEqual(propsData.title);
        expect(wrapper.find('.ay-dashboard-list__header-subtitle').text()).toEqual(propsData.subtitle);
    });

    it('should display loader', async () => {
        const wrapper = mount(DashboardList, {
            propsData: { ...propsData, isLoading: true },
        });

        expect(wrapper.html()).toContain('spinner');
    });
});
