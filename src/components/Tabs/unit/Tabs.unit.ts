/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import type { MountingOptions } from '@vue/test-utils';

/**
 * Internal dependencies.
 */
import Tab from '@/components/Tabs/Tab.vue';
import Tabs from '@/components/Tabs/Tabs.vue';
import TabButton from '@/components/Tabs/TabButton.vue';

export type MountTabsOptions = {
    tabs?: {
        name: string;
        label?: string;
    }[];
    options?: MountingOptions<any> & Record<string, any>;
};
const mountTabs = async ({ tabs = [{ name: 'Tab 1' }, { name: 'Tab 2' }], options = {} }: MountTabsOptions = {}) => {
    const wrapper = mount(Tabs, {
        ...options,
        slots: {
            default: tabs?.map(tab => `<Tab name="${tab.name}">{${tab.label || tab.name}}</Tab>`),
        },
        global: {
            components: {
                Tab,
            },
        },
    });

    await nextTick();

    return wrapper;
};
const mountButtonTabs = async ({
    tabs = [{ name: 'Tab 1' }, { name: 'Tab 2' }],
    options = {},
}: MountTabsOptions = {}) => {
    const wrapper = mount(Tabs, {
        ...options,
        slots: {
            default: tabs?.map(tab => `<TabButton name="${tab.name}">{${tab.label || tab.name}}</TabButton>`),
        },
        global: {
            components: {
                TabButton,
            },
        },
    });

    await nextTick();

    return wrapper;
};

describe('Tabs.vue', () => {
    it('can render with no problems', () => {
        const wrapper = mount(Tabs);

        expect(wrapper.find('.ay-tabs').exists()).toBeTruthy();
    });

    it('has not tabs when none are registered', () => {
        const wrapper = mount(Tabs);

        expect(wrapper.find('.ay-tabs__header').exists()).toBeFalsy();
    });

    it('has tabs when they are registered from tab component', async () => {
        const wrapper = await mountTabs();

        const tabsHeader = wrapper.find('.ay-tabs__header');
        expect(tabsHeader.exists()).toBeTruthy();

        const tabTitles = tabsHeader.findAll('.ay-tabs__tab');

        expect(tabTitles[0].text()).toBe('Tab 1');
        expect(tabTitles[1].text()).toBe('Tab 2');

        expect(tabTitles[0].classes()).toContain('ay-tabs__tab--active');
        expect(tabTitles[1].classes()).not.toContain('ay-tabs__tab--active');
    });

    it('updates the active tab when a tab is clicked', async () => {
        const wrapper = await mountTabs();

        const tabsHeader = wrapper.find('.ay-tabs__header');
        expect(tabsHeader.exists()).toBeTruthy();

        const tabTitles = tabsHeader.findAll('.ay-tabs__tab');

        expect(tabTitles[0].classes()).toContain('ay-tabs__tab--active');
        expect(tabTitles[1].classes()).not.toContain('ay-tabs__tab--active');

        tabTitles[1].trigger('click');

        await nextTick();

        expect(tabTitles[0].classes()).not.toContain('ay-tabs__tab--active');
        expect(tabTitles[1].classes()).toContain('ay-tabs__tab--active');
    });

    it('uses the label for the tab header when it is present', async () => {
        const wrapper = await mountTabs({
            tabs: [
                {
                    name: 'Tab 1 Label',
                },
                {
                    name: 'Tab 2 Label',
                },
            ],
        });

        const tabsHeader = wrapper.find('.ay-tabs__header');
        expect(tabsHeader.exists()).toBeTruthy();

        const tabTitles = tabsHeader.findAll('.ay-tabs__tab');

        expect(tabTitles[0].text()).toBe('Tab 1 Label');
        expect(tabTitles[1].text()).toBe('Tab 2 Label');
    });

    it('uses the prop to set the initial tab', async () => {
        const wrapper = await mountTabs({
            options: {
                props: {
                    selectedTab: 'Tab 2',
                },
            },
        });

        await nextTick();
        const tabTitles = wrapper.find('.ay-tabs__header').findAll('.ay-tabs__tab');

        expect(tabTitles[0].classes()).not.toContain('ay-tabs__tab--active');
        expect(tabTitles[1].classes()).toContain('ay-tabs__tab--active');
    });

    it('updates the active tab when the selected tab prop changes', async () => {
        const wrapper = await mountTabs();

        const tabTitles = wrapper.find('.ay-tabs__header').findAll('.ay-tabs__tab');

        expect(tabTitles[0].classes()).toContain('ay-tabs__tab--active');
        expect(tabTitles[1].classes()).not.toContain('ay-tabs__tab--active');

        wrapper.setProps({
            selectedTab: 'Tab 2',
        });

        await nextTick();

        expect(tabTitles[0].classes()).not.toContain('ay-tabs__tab--active');
        expect(tabTitles[1].classes()).toContain('ay-tabs__tab--active');
    });

    it('has indicator on active tab', async () => {
        const wrapper = await mountTabs();

        expect(wrapper.find('.ay-tabs__indicator').exists()).toBeTruthy();
    });

    it('has indicator on active tab with the width of the tab and position', async () => {
        const wrapper = await mountTabs();
        const indicator = wrapper.find('.ay-tabs__indicator');

        // 0 width because in jsdom elements do not seem to have sizes
        expect(indicator.attributes('style')).toEqual('transform: translateX(0px); width: 0px;');
    });

    it('shows simple layout if child components are used with Tab component', async () => {
        const wrapper = await mountButtonTabs();

        // tabs indicator is unique to simple layout
        expect(wrapper.find('.ay-tabs__indicator').exists()).toBeFalsy();
        expect(wrapper.find('.ay-tabs__tab-button-container').exists()).toBeTruthy();
    });

    it('shows the tab header if we have at least one tab registered', async () => {
        const wrapper = await mountTabs({
            tabs: [{ name: 'Tab 1' }],
        });

        const tabsHeader = wrapper.find('.ay-tabs__header');
        expect(tabsHeader.exists()).toBeTruthy();
    });

    describe('when hideOnSingleTab prop is active', () => {
        it('the tab header is not displayed if we have only one tab registered', async () => {
            const wrapper = await mountTabs({
                tabs: [{ name: 'Tab 1' }],
                options: { props: { hideOnSingleTab: true } },
            });

            const tabsHeader = wrapper.find('.ay-tabs__header');
            expect(tabsHeader.exists()).toBeFalsy();
        });

        it('the tab header is displayed if we have more than one tab', async () => {
            const wrapper = await mountTabs({
                tabs: [{ name: 'Tab 1' }, { name: 'Tab 2' }],
                options: { props: { hideOnSingleTab: true } },
            });

            const tabsHeader = wrapper.find('.ay-tabs__header');
            expect(tabsHeader.exists()).toBeTruthy();
        });
    });
});
