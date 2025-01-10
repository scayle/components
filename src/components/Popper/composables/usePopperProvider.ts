/**
 * External dependencies.
 */
import { computed, provide } from 'vue';
import type { Ref, ComputedRef, InjectionKey } from 'vue';

/**
 * Internal dependencies.
 */

export const OpenKey: InjectionKey<() => void> = Symbol('open');
export const CloseKey: InjectionKey<() => void> = Symbol('close');
export const IsOpenKey: InjectionKey<ComputedRef<boolean>> = Symbol('is-open');
export const IsHoverTriggerKey: InjectionKey<ComputedRef<boolean>> = Symbol('is-hover-trigger-key');

export type UsePopperProviderProps = {
    open: () => void;
    close: () => void;
    isOpen: Ref<boolean>;
    isHoverTrigger: Ref<boolean>;
};

export default function usePopperProvider({ isOpen, open, close, isHoverTrigger }: UsePopperProviderProps) {
    provide(
        IsOpenKey,
        computed(() => isOpen.value)
    );
    provide(
        IsHoverTriggerKey,
        computed(() => isHoverTrigger.value)
    );
    provide(OpenKey, open);
    provide(CloseKey, close);
}
