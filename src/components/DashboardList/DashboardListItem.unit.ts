import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import DashboardListItem from './DashboardListItem.vue';
import type { GetUsageProps } from '@/utils';

type DashboardListItemProps = GetUsageProps<InstanceType<typeof DashboardListItem>>;

describe('DashboardList.vue', () => {
    const propsData: DashboardListItemProps = {
        value: '60,445',
        label: 'Mapper ServiceProvider DCI',
        initials: 'MSD',
        color: 'red',
    };

    it('should render all textual fields', async () => {
        const wrapper = mount(DashboardListItem, {
            propsData,
        });

        expect(wrapper.find('.ay-dashboard-list-item__avatar-initials').text()).toEqual(propsData.initials);
        expect(wrapper.find('.ay-dashboard-list-item__label').text()).toEqual(propsData.label);
    });

    it('should color the avatar according to the color prop', async () => {
        const wrapper = mount(DashboardListItem, {
            propsData: { ...propsData, color: 'blue' },
        });

        expect(
            wrapper
                .get('.ay-dashboard-list-item__avatar-initials')
                // @ts-ignore
                .element.style.getPropertyValue('background')
        ).toBe('rgb(0, 0, 255)');

        await wrapper.setProps({ ...propsData, color: null });

        expect(
            wrapper
                .get('.ay-dashboard-list-item__avatar-initials')
                // @ts-ignore
                .element.style.getPropertyValue('background')
        ).toBe('');
    });
});
