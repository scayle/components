/**
 * External dependencies.
 */
import type { Ref } from 'vue';
import { templateRef } from '@vueuse/core';
import { createPopper } from '@popperjs/core';
import { nextTick, computed, watch, ref, onBeforeUnmount } from 'vue';
import type { Modifier, Placement, StrictModifiers, Instance as PopperInstance } from '@popperjs/core';

/**
 * Internal dependencies.
 */

export type UsePopperProps = {
    isOpen: Ref<boolean>;
    placement: Ref<Placement>;
};

export default function usePopper({ isOpen, placement }: UsePopperProps) {
    const reference = templateRef<HTMLDivElement | null>('reference', null);
    const popperInstance: Ref<PopperInstance | null> = ref(null);
    // TODO: fix type when @vueuse/core fixes the types for templateRef
    const tooltip = templateRef<any>('tooltip', null);

    const arrowRef = computed(() => {
        if (!tooltip.value) {
            return null;
        }

        return tooltip.value.$refs.arrow as HTMLDivElement;
    });

    const createPopperInstance = () => {
        const minWidthModifier: Modifier<any, any> = {
            name: 'minWidth',
            enabled: true,
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            fn: ({ state }) => {
                if (!state?.rects?.reference) {
                    return;
                }

                state.styles.popper.minWidth = `${state.rects.reference.width}px`;
            },
            effect: ({ state }) => {
                if (!state?.rects?.reference) {
                    return;
                }

                state.elements.popper.style.minWidth = `${state.rects.reference.width}px`;
            },
        };

        // @ts-ignore
        popperInstance.value = createPopper<StrictModifiers>(reference.value as HTMLDivElement, tooltip.value.$el, {
            placement: placement.value,
            modifiers: [
                minWidthModifier,
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: reference.value as HTMLDivElement,
                    },
                },
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef.value,
                    },
                },
            ],
        });
    };
    const destroyPopperInstance = () => {
        popperInstance.value?.destroy();
        popperInstance.value = null;
    };
    const onShow = async () => {
        await nextTick();

        // Enable the event listeners
        popperInstance.value?.setOptions(options => {
            return {
                ...options,
                modifiers: [
                    ...(options.modifiers ?? []),
                    {
                        name: 'arrow',
                        options: {
                            element: arrowRef.value,
                        },
                    },
                    { name: 'eventListeners', enabled: true },
                ],
            };
        });

        // We need to tell Popper to update the tooltip position
        // after we show the tooltip, otherwise it will be incorrect
        popperInstance.value?.update();
    };
    const onHide = async () => {
        await nextTick();

        // Disable the event listeners
        popperInstance.value?.setOptions(options => ({
            ...options,
            modifiers: [
                ...(options.modifiers ?? []),
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef.value,
                    },
                },
                { name: 'eventListeners', enabled: false },
            ],
        }));
    };

    watch(
        tooltip,
        newValue => {
            if (!newValue) {
                destroyPopperInstance();

                return;
            }

            createPopperInstance();
        },
        { immediate: true }
    );

    onBeforeUnmount(() => {
        destroyPopperInstance();
    });

    watch(isOpen, (val: boolean) => {
        if (val) {
            onShow();

            return;
        }

        onHide();
    });
}
