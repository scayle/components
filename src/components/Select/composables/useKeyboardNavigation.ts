/**
 * External dependencies.
 */
import type { ComponentPublicInstance } from 'vue';
import { onKeyDown, templateRef } from '@vueuse/core';

/**
 * Internal dependencies.
 */
import type { BaseSelectStore } from '../stores/BaseSelectStore';

export default function useKeyboardNavigation<T, U>(selectMenuStore: BaseSelectStore<T, U>) {
    const popper = templateRef<ComponentPublicInstance | null>('popper');
    const isWithinPopper = (target: EventTarget | null) => {
        if (!target) {
            return false;
        }

        const popperEl = popper?.value?.$el;
        const tooltipEl = (popper?.value?.$refs?.tooltip as any)?.$el;

        return popperEl?.contains(target) || tooltipEl?.contains(target);
    };
    onKeyDown('ArrowDown', (e: KeyboardEvent) => {
        if (!isWithinPopper(e.target)) {
            return;
        }

        if (!selectMenuStore.isFullyOpened.value) {
            if (popper.value?.$el?.contains(document.activeElement)) {
                selectMenuStore.openMenu();
            }

            return;
        }

        selectMenuStore.navigateNext();
    });

    onKeyDown('ArrowUp', (e: KeyboardEvent) => {
        if (!isWithinPopper(e.target)) {
            return;
        }

        if (!selectMenuStore.isFullyOpened.value) {
            return;
        }

        selectMenuStore.navigatePrevious();
    });

    onKeyDown('Escape', () => {
        if (!selectMenuStore.isFullyOpened.value) {
            return;
        }

        selectMenuStore.closeMenu();
    });

    onKeyDown('Enter', (e: KeyboardEvent) => {
        if (!isWithinPopper(e.target)) {
            return;
        }

        if (selectMenuStore.isFullyOpened.value) {
            selectMenuStore.selectActive();
            selectMenuStore.closeMenu();
        } else {
            selectMenuStore.openMenu();
        }
    });
}
