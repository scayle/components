/**
 * External dependencies.
 */
import type { ExtractPropTypes } from 'vue';
import { computed, onBeforeUnmount, reactive, ref, toRefs, watch } from 'vue';

/**
 * Internal dependencies.
 */
import useEmitter from '@/composables/useEmitter';
import type PopperProps from '@/components/Popper/PopperProps';

export default function usePopperVisibility(props: ExtractPropTypes<typeof PopperProps>) {
    const { emit } = useEmitter();
    const { trigger, disabled, visible, transition, showArrow, popperClass } = toRefs(props);
    const visibleLocally = ref(false);
    const isOpen = computed({
        get() {
            return visible.value || visibleLocally.value;
        },
        set(val: boolean) {
            visibleLocally.value = val;

            emit('update:visible', val);
        },
    });
    const isHoverTrigger = computed(() => trigger.value === 'hover');
    const tooltipProps = reactive({
        isOpen,
        transition,
        showArrow,
        popperClass,
    });

    const toggle = () => {
        isOpen.value = !isOpen.value;
    };
    const open = () => {
        isOpen.value = true;
    };
    const close = () => {
        isOpen.value = false;
    };
    const onTooltipMouseEnter = () => {
        if (!isHoverTrigger.value) {
            return;
        }

        open();
    };
    const onTooltipMouseLeave = () => {
        if (!isHoverTrigger.value) {
            return;
        }

        close();
    };
    const clickOutside = () => {
        // do nothing if it is not open
        if (!isOpen.value) {
            return;
        }

        close();
    };

    const containerEvents = computed(() => {
        if (disabled.value) {
            return null;
        }
        const eventToListenTo = {
            click: {
                click: (event: Event) => {
                    event.stopPropagation();
                    event.preventDefault();

                    toggle();
                },
            },

            hover: {
                mouseenter: open,
                mouseleave: close,
            },

            contextmenu: {
                contextmenu: toggle,
            },

            manual: {},

            focus: {
                focus: toggle,
            },
        }[trigger.value];

        // prevent default behaviour of click event if we do not listen for that trigger
        if (trigger.value !== 'click') {
            return {
                click: (event: Event) => {
                    event.stopPropagation();
                    event.preventDefault();
                },
                ...eventToListenTo,
            };
        }

        return eventToListenTo;
    });

    watch(visible, (val: boolean) => (visibleLocally.value = val));

    onBeforeUnmount(() => {
        close();
    });

    return {
        open,
        close,
        isOpen,
        tooltipProps,
        clickOutside,
        isHoverTrigger,
        containerEvents,
        onTooltipMouseEnter,
        onTooltipMouseLeave,
    };
}
