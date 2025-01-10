<template>
    <transition :duration="150" name="ay-notification-animation">
        <div
            v-show="isActive"
            ref="container"
            role="alert"
            class="ay-notification__item list-complete-item"
            :class="[`ay-notification__item--${type}`]"
            @mouseover="pauseTimer"
            @mouseleave="resumeTimer"
            @click="whenClicked"
        >
            <div class="flex items-center max-w-sm">
                <div
                    class="ay-notification__icon text-white flex flex-shrink-0 w-8 h-8 mie-4 rounded-full items-center justify-center"
                    :class="iconClasses"
                >
                    <IconPanelInfoFill v-if="type === 'info'" class="icon-sm" />
                    <IconPanelClose v-if="type === 'error'" class="icon-sm" />
                    <IconPanelCheckmark v-if="type === 'success'" class="icon-sm" />
                    <IconPanelWarningFill v-if="type === 'warning'" class="icon-sm" />
                </div>

                <div class="flex-grow notification">
                    <div class="ay-notification__title text-sm text-white uppercase font-black">
                        {{ title }}
                    </div>

                    <div class="ay-notification__subtitle text-base text-white text-opacity-70 text-start notification">
                        {{ subtitle }}
                    </div>
                </div>

                <div class="mis-4 flex flex-col space-y-2">
                    <button class="btn ay-notification__notification-btn">Ok</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { computed, defineComponent, toRefs } from 'vue';

/**
 * Internal dependencies.
 */
import useNotificationLogic from './useNotificationLogic';
import useInternalBusEvent from '@/composables/useInternalBusEvent';
import { InternalBusEvent } from '@/enums/InternalBusEvent';

export default defineComponent({
    name: 'Toast',

    props: {
        title: {
            type: String,
            required: true,
        },

        subtitle: {
            type: String,
            default: '',
        },

        type: {
            type: String,
            default: 'success',
        },

        duration: {
            type: Number,
            default: 8000,
        },

        dismissible: {
            type: Boolean,
            default: true,
        },

        onDismiss: {
            type: Function,
            default: () => {},
        },

        onClick: {
            type: Function,
            default: () => {},
        },

        queue: Boolean,

        pauseOnHover: {
            type: Boolean,
            default: true,
        },
    },

    setup(props) {
        const { type } = toRefs(props);
        const iconClasses = computed(() => {
            const colors = {
                info: 'blue',
                error: 'danger',
                success: 'success',
                warning: 'warning',
            };
            const currentColor = colors[type.value as keyof typeof colors];

            return `bg-${currentColor} shadow-${currentColor}`;
        });
        const { dismiss, isActive, whenClicked, resumeTimer, pauseTimer } = useNotificationLogic(props);
        const { on } = useInternalBusEvent();

        on(InternalBusEvent.CLOSE_NOTIFICATIONS, dismiss);

        return {
            isActive,
            iconClasses,

            dismiss,
            whenClicked,
            pauseTimer,
            resumeTimer,
        };
    },
});
</script>
