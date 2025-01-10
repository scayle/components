/**
 * External dependencies.
 */
import { ref, inject } from 'vue';

/**
 * Internal dependencies.
 */
import { IsOpenKey, OpenKey, CloseKey, IsHoverTriggerKey } from '@/components/Popper/composables/usePopperProvider';

export default function usePopperInjector() {
    const open = inject(OpenKey, () => {});
    const close = inject(CloseKey, () => {});
    const isOpen = inject(IsOpenKey, ref(false));
    const isHoverTrigger = inject(IsHoverTriggerKey, ref(false));

    return {
        open,
        close,
        isOpen,
        isHoverTrigger,
    };
}
