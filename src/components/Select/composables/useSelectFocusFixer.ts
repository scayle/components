/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { templateRef } from '@vueuse/core';
import type { ComponentPublicInstance } from 'vue';

/**
 * Internal dependencies.
 */
import useEmitter from '@/composables/useEmitter';

export default function useSelectFocusFixer() {
    const { emit } = useEmitter();
    const container = templateRef<ComponentPublicInstance | HTMLElement>('container');

    const onClick = async (event: Event) => {
        let element: HTMLElement = container.value as HTMLElement;

        if ((container.value as ComponentPublicInstance)?.$el) {
            element = (container.value as ComponentPublicInstance)?.$el;
        }

        // focus on input element regardless of what is clicked
        // this is to ensure that select keyboard navigation works correctly, if we do not have a search input
        element?.querySelector('input')?.focus();

        await nextTick();

        emit('click', event);
    };

    return {
        onClick,
    };
}
