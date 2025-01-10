<template>
    <div :id="popperId" ref="container" class="ay-popper">
        <div ref="reference" class="ay-popper__reference" v-on="containerEvents">
            <slot :is-open="isOpen" name="reference" />
        </div>

        <Teleport v-if="appendToBody && rootElement && !disabled" :to="rootElement as any">
            <PopperTooltip
                :id="popperId"
                ref="tooltip"
                class="ay-popper__tooltip--headless"
                v-bind="tooltipProps"
                v-on="tooltipEvents"
            >
                <slot name="content" />
            </PopperTooltip>
        </Teleport>

        <PopperTooltip
            v-else-if="!appendToBody"
            :id="popperId"
            ref="tooltip"
            v-bind="tooltipProps"
            v-on="tooltipEvents"
        >
            <slot name="content" />
        </PopperTooltip>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { nanoid } from 'nanoid';
import { defineComponent, toRefs, computed } from 'vue';

/**
 * Internal dependencies.
 */
import './Popper.css';
import { templateRef } from '@vueuse/core';
import PopperTooltip from '@/components/Popper/PopperTooltip.vue';
import usePopper from '@/components/Popper/composables/usePopper';
import PopperProps from '@/components/Popper/PopperProps';
import usePopperVisibility from '@/components/Popper/composables/usePopperVisibility';
import usePopperProvider from '@/components/Popper/composables/usePopperProvider';
import usePopperInjector from '@/components/Popper/composables/usePopperInjector';
import useNodeRootElement from '@/composables/useNodeRootElement';

export default defineComponent({
    name: 'Popper',

    components: { PopperTooltip },

    props: PopperProps,

    emits: {
        ['update:visible'](_payload: boolean) {
            return true;
        },

        ['fully-closed']() {
            return true;
        },

        ['fully-opened']() {
            return true;
        },
    },

    setup(props, { emit }) {
        const container = templateRef<HTMLDivElement | null>('container');
        const popperId = 'popper-' + nanoid();
        const { placement } = toRefs(props);
        const { rootElement } = useNodeRootElement(container);
        const {
            isOpen,
            tooltipProps,
            clickOutside,
            containerEvents,
            isHoverTrigger,
            onTooltipMouseEnter: _onTooltipMouseEnter,
            onTooltipMouseLeave: _onTooltipMouseLeave,
        } = usePopperVisibility(props);
        const { open: openParent, close: closeParent, isHoverTrigger: isHoverTriggerParent } = usePopperInjector();
        const onTooltipMouseEnter = () => {
            if (isHoverTriggerParent.value) {
                openParent();
            }

            _onTooltipMouseEnter();
        };
        const onTooltipMouseLeave = () => {
            if (isHoverTriggerParent.value) {
                closeParent();
            }

            _onTooltipMouseLeave();
        };
        const tooltipEvents = computed(() => ({
            mouseleave: onTooltipMouseLeave,
            mouseenter: onTooltipMouseEnter,
            'fully-opened': () => emit('fully-opened'),
            'fully-closed': () => emit('fully-closed'),
            'clicked-outside': (event: Event) => {
                const parentWithPopperId = (event.target as HTMLElement)?.closest(`#${popperId}`);

                // if we have found our parent with the popper id
                // then we haven't clicked outside, it's just that the tooltip
                // has been appended to the body
                if (parentWithPopperId) {
                    return;
                }

                clickOutside();
            },
        }));

        usePopperProvider({
            isOpen,
            open,
            close,
            isHoverTrigger,
        });
        usePopper({ isOpen, placement });

        return {
            isOpen,
            popperId,
            tooltipProps,
            tooltipEvents,
            containerEvents,
            clickOutside,
            rootElement,
            onTooltipMouseEnter,
            onTooltipMouseLeave,
        };
    },
});
</script>
