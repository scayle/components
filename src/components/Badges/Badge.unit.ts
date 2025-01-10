/**
 * External dependencies.
 */
import { mount } from '@vue/test-utils';
import { it, describe, expect } from 'vitest';
import { fc, itProp } from '@/fast-check-utils';

/**
 * Internal dependencies.
 */
import Badge, { badgeTypes } from '@/components/Badges/Badge.vue';
import type { BadgeType } from '@/components/Badges/BadgeTypes';

describe('Badge.vue', () => {
    it('uses type if no label is passed in props', () => {
        const wrapper = mount(Badge, { props: { type: 'secondary' } });
        expect(wrapper.find('.ay-badge').text()).toEqual('secondary');
    });

    it('uses label if passes in props', () => {
        const wrapper = mount(Badge, { props: { label: 'Test', type: 'secondary' } });
        expect(wrapper.find('.ay-badge').text()).toEqual('Test');
    });

    it.each(badgeTypes)('has correct class based on type: %s', (type: string) => {
        const wrapper = mount(Badge, { props: { type: type as BadgeType } });
        expect(wrapper.find('.ay-badge').classes()).toContain(`ay-badge--${type}`);
    });

    itProp('uses default primary class if type is unrecognized', [fc.string()], type => {
        const wrapper = mount(Badge, { props: { type: type as any } });
        expect(wrapper.find('.ay-badge').classes()).not.toContain(`ay-badge--${type}`);
        expect(wrapper.find('.ay-badge').classes()).toContain('ay-badge--primary');
    });
});
