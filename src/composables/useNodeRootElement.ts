/**
 * External dependencies.
 */

import type { Ref } from 'vue';
import { ref, watch } from 'vue';

export default function useNodeRootElement(element: Ref<HTMLElement | null>) {
    const rootElement = ref<HTMLElement | null>(null);

    watch(
        element,
        el => {
            if (!el) {
                return;
            }

            const dialogElement = el.closest ? el.closest('dialog') : null;

            // if the select field is inside a dialog element we append popper there
            if (dialogElement) {
                rootElement.value = dialogElement;
            } else {
                const node = el.getRootNode() as HTMLElement;

                // we always try to use the body of the root element first
                // if we are in the shadow root, usually we will not have a body
                // ,so we directly use the shadow root child div element
                // and fallback to the root element if a child does not exist
                rootElement.value = node.querySelector('body') ?? node.querySelector('div') ?? node;
            }
        },
        { immediate: true }
    );

    return {
        rootElement,
    };
}
