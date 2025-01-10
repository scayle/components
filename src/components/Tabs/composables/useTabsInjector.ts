/**
 * External dependencies.
 */
import { inject } from 'vue';

/**
 * Internal dependencies.
 */
import { wrapInComputed } from '@/utils';
import {
    DeregisterTabKey,
    IsTabActiveKey,
    RegisterTabKey,
    UpdateTabKey,
} from '@/components/Tabs/composables/useTabsProvider';

export default function useTabsInjector() {
    const updateTab = inject(UpdateTabKey, () => {});
    const registerTab = inject(RegisterTabKey, () => {});
    const deregisterTab = inject(DeregisterTabKey, () => {});
    const isTabActive = inject(IsTabActiveKey, () => wrapInComputed(true));

    return {
        updateTab,
        deregisterTab,
        registerTab,
        isTabActive,
    };
}
