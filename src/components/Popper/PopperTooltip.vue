<template>
    <div
        ref="tooltip"
        class="ay-popper__tooltip"
        role="tooltip"
        @mouseenter="$emit('mouseenter')"
        @mouseleave="$emit('mouseleave')"
    >
        <transition :name="transition" @after-enter="$emit('fully-opened')" @after-leave="$emit('fully-closed')">
            <div v-show="isOpen" :class="[popperClass]" class="ay-popper__tooltip-content">
                <slot />
            </div>
        </transition>
        <transition :name="transition">
            <div v-if="showArrow" v-show="isOpen" ref="arrow" class="ay-popper__arrow">
                <div />
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { onClickOutside } from '@vueuse/core';
import { ref, getCurrentInstance, defineComponent } from 'vue';

export default defineComponent({
    name: 'PopperTooltip',

    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },

        showArrow: {
            type: Boolean,
            required: false,
        },

        popperClass: {
            type: String,
            default: 'ay-popper-default',
        },

        transition: {
            type: String,
            default: null,
        },
    },

    emits: {
        mouseenter() {
            return true;
        },

        mouseleave() {
            return true;
        },

        ['fully-closed']() {
            return true;
        },

        ['fully-opened']() {
            return true;
        },

        ['clicked-outside'](_event: Event) {
            return true;
        },
    },

    setup(_, { emit }) {
        const tooltip = ref(null);
        const instance = getCurrentInstance();

        onClickOutside(tooltip, (event: Event) => {
            const parentPopper = instance?.parent?.vnode?.el;

            // if we are still in our popper's container
            // we do not emit an event
            if (parentPopper?.contains(event.target)) {
                return;
            }

            emit('clicked-outside', event);
        });

        return {
            tooltip,
        };
    },
});
</script>
