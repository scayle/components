/**
 * External dependencies.
 */
import type { Ref, InjectionKey } from 'vue';
import { watch, computed, provide, ref, onMounted, onUnmounted } from 'vue';

/**
 * Internal dependencies.
 */
import type { DeregisterTab, IsTabActive, RegisterTab, Tabs, UpdateTab } from '@/components/Tabs/TabsTypes';

export type UseTabsProviderOptions = {
    selectedTab?: Ref<string | null | undefined>;
};

export const UpdateTabKey: InjectionKey<UpdateTab> = Symbol('update-tab');
export const RegisterTabKey: InjectionKey<RegisterTab> = Symbol('register-tab');
export const DeregisterTabKey: InjectionKey<DeregisterTab> = Symbol('deregister-tab');
export const IsTabActiveKey: InjectionKey<IsTabActive> = Symbol('deregister-tab');

export default function useTabsProvider({ selectedTab }: UseTabsProviderOptions = {}) {
    selectedTab = selectedTab ?? ref(null);

    const tabs: Ref<Tabs> = ref([]);
    const hasActiveTab = computed(() => tabs.value.some(tab => tab.isActive));

    const updateTab: UpdateTab = (oldName, newName, options) => {
        tabs.value = tabs.value.map(tab =>
            tab.name === oldName ? { ...tab, name: newName, options: { ...tab.options, ...options } } : tab
        );
    };
    const isTabActive: IsTabActive = name => {
        // wrap value in ref if it is not
        // if it is a ref, the computed property below will be reactive when returned
        // and we will not need to call isTabActive function again
        const refName = ref(name);

        return computed(() => !!tabs.value.find(tab => tab.name === refName.value)?.isActive);
    };
    const setActiveTab = (name: string) =>
        (tabs.value = tabs.value.map(tab => ({
            ...tab,
            isActive: tab.name === name,
        })));
    const registerTab: RegisterTab = (name, { type, ...options }) => {
        // by default set selected if it is the first one
        let shouldActivate = tabs.value.length === 0;

        // else use the logic for isSelected when we have selectedTab ref passed as options
        if (selectedTab?.value) {
            shouldActivate = name === selectedTab.value;
        }

        // if the type does not match the type from the first entry
        // throw an error
        if (tabs.value.length && tabs.value[0].type !== type) {
            throw new Error('The Layout for tabs must be consistent. Either simple or button layout!');
        }

        tabs.value.push({
            name,
            type,
            options,
            isActive: false,
        });

        if (shouldActivate) {
            setActiveTab(name);
        }
    };
    const deregisterTab: DeregisterTab = (name: string) => {
        const wasTabActive = isTabActive(name);

        tabs.value = tabs.value.filter(tab => tab.name !== name);

        if (tabs.value.length && wasTabActive && !hasActiveTab.value) {
            setActiveTab(tabs.value[0].name);
        }
    };

    provide(UpdateTabKey, updateTab);
    provide(RegisterTabKey, registerTab);
    provide(DeregisterTabKey, deregisterTab);
    provide(IsTabActiveKey, isTabActive);

    watch(selectedTab, newSelectedTab => {
        if (!newSelectedTab) {
            return;
        }

        setActiveTab(newSelectedTab);
    });

    onMounted(() => {
        if (!tabs.value.length) {
            return;
        }

        // we check on mounted if we have any tabs active
        // if not we default to the first one as active
        if (!tabs.value.some(tab => tab.isActive)) {
            tabs.value[0].isActive = true;
        }
    });

    onUnmounted(() => {
        if (!tabs.value.length) {
            return;
        }

        tabs.value = [];
    });

    return {
        setActiveTab,
        hasActiveTab,
        tabs: computed(() => tabs.value),
        tabsType: computed(() => tabs?.value[0]?.type),
    };
}
