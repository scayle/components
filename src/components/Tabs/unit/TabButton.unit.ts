/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';

/**
 * Internal dependencies.
 */
import useTabsInjector from '@/components/Tabs/composables/useTabsInjector';
import { wrapInComputed } from '@/utils';
import TabButton from '@/components/Tabs/TabButton.vue';
import { TabLayout } from '@/components/Tabs/TabsTypes';

vi.mock('@/components/Tabs/composables/useTabsInjector');

describe('Tab.vue', () => {
    beforeEach(() => {
        (useTabsInjector as any).mockImplementation(() => ({
            updateTab: vi.fn(),
            registerTab: vi.fn(),
            isTabActive: () => wrapInComputed(true),
        }));
    });

    it('can render with no problems', () => {
        const wrapper = mount(TabButton, {
            props: {
                name: 'Test',
            },
        });

        expect(wrapper.find('.ay-tabs__content').exists()).toBeTruthy();
    });

    it("doesn't render if it is not active", () => {
        (useTabsInjector as any).mockImplementation(() => ({
            updateTab: vi.fn(),
            registerTab: vi.fn(),
            isTabActive: () => wrapInComputed(false),
        }));

        const wrapper = mount(TabButton, {
            props: {
                name: 'Test',
            },
        });

        expect(wrapper.find('.ay-tabs__content').exists()).toBeFalsy();
    });

    it('registers itself to the tabs provider', () => {
        const registerTab = vi.fn();
        (useTabsInjector as any).mockImplementation(() => ({
            registerTab,
            updateTab: vi.fn(),
            isTabActive: () => wrapInComputed(true),
        }));

        mount(TabButton, {
            props: {
                name: 'Test',
            },
        });

        expect(registerTab).toBeCalledWith('Test', { type: TabLayout.BUTTON, label: '', badgeText: null });
    });

    it('registers itself to the tabs provider with a label', () => {
        const registerTab = vi.fn();
        (useTabsInjector as any).mockImplementation(() => ({
            registerTab,
            updateTab: vi.fn(),
            isTabActive: () => wrapInComputed(true),
        }));

        mount(TabButton, {
            props: {
                name: 'Test',
                label: 'Some label',
            },
        });

        expect(registerTab).toBeCalledWith('Test', expect.objectContaining({ label: 'Some label' }));
    });

    it('registers itself to the tabs provider with a badge text', () => {
        const registerTab = vi.fn();
        (useTabsInjector as any).mockImplementation(() => ({
            registerTab,
            updateTab: vi.fn(),
            isTabActive: () => wrapInComputed(true),
        }));

        mount(TabButton, {
            props: {
                name: 'Test',
                badgeText: 'testing',
            },
        });

        expect(registerTab).toBeCalledWith('Test', expect.objectContaining({ badgeText: 'testing' }));
    });

    it('updates itself to the tabs provider when we change name prop', async () => {
        const updateTab = vi.fn();
        (useTabsInjector as any).mockImplementation(() => ({
            updateTab,
            registerTab: vi.fn(),
            isTabActive: () => wrapInComputed(true),
        }));
        const wrapper = mount(TabButton, {
            props: {
                name: 'Test',
            },
        });

        expect(updateTab).not.toBeCalled();

        wrapper.setProps({
            name: 'New Name',
        });

        await nextTick();

        expect(updateTab).toBeCalledWith('Test', 'New Name', expect.any(Object));
    });

    it('updates itself to the tabs provider when we change label prop', async () => {
        const updateTab = vi.fn();
        (useTabsInjector as any).mockImplementation(() => ({
            updateTab,
            registerTab: vi.fn(),
            isTabActive: () => wrapInComputed(true),
        }));
        const wrapper = mount(TabButton, {
            props: {
                name: 'Test',
            },
        });

        expect(updateTab).not.toBeCalled();

        wrapper.setProps({
            name: 'Test',
            label: 'New Label',
        });

        await nextTick();

        expect(updateTab).toBeCalledWith(
            'Test',
            'Test',
            expect.objectContaining({
                label: 'New Label',
            })
        );
    });

    it('updates itself to the tabs provider when we change badge text prop', async () => {
        const updateTab = vi.fn();
        (useTabsInjector as any).mockImplementation(() => ({
            updateTab,
            registerTab: vi.fn(),
            isTabActive: () => wrapInComputed(true),
        }));
        const wrapper = mount(TabButton, {
            props: {
                name: 'Test',
            },
        });

        expect(updateTab).not.toBeCalled();

        wrapper.setProps({
            name: 'Test',
            badgeText: 'New Badge',
        });

        await nextTick();

        expect(updateTab).toBeCalledWith(
            'Test',
            'Test',
            expect.objectContaining({
                badgeText: 'New Badge',
            })
        );
    });
});
