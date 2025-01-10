<template>
    <Popper
        v-model:visible="internalIsOpen"
        :append-to-body="appendToBody"
        :placement="placement"
        :show-arrow="showArrow"
        :transition="transition"
        :trigger="trigger"
        popper-class="ay-dropdown-container"
    >
        <template #reference="{ isOpen }">
            <slot :is-open="isOpen" />
        </template>

        <template #content>
            <div class="ay-dropdown" @click="onClick">
                <slot :on-click="onClick" name="dropdown" />
            </div>
        </template>
    </Popper>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { PropType } from 'vue';
import { ref, defineComponent } from 'vue';
import type { Placement } from '@popperjs/core';

/**
 * Internal dependencies.
 */
import type { TriggerMode } from '../Popper/popper-types';

import './Dropdown.css';

import Popper from '../Popper/Popper.vue';

export default defineComponent({
    name: 'Dropdown',

    components: {
        Popper,
    },

    props: {
        placement: {
            type: String as PropType<Placement>,
            default: 'bottom',
        },
        transition: {
            type: String,
            default: 'ay-dropdown',
        },
        trigger: {
            type: String as PropType<TriggerMode>,
            default: 'click',
        },
        showArrow: {
            type: Boolean,
            default: false,
        },

        appendToBody: {
            type: Boolean,
            default: true,
        },
    },

    emits: {
        click() {
            return true;
        },
    },

    setup(_, { emit }) {
        const internalIsOpen = ref(false);
        const onClick = () => {
            emit('click');

            internalIsOpen.value = false;
        };

        return {
            onClick,
            internalIsOpen,
        };
    },
});
</script>
