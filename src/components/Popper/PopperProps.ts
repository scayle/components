/**
 * External dependencies.
 */
import type { PropType } from 'vue';
import type { Placement } from '@popperjs/core';

/**
 * Internal dependencies.
 */
import type { TriggerMode } from './popper-types';

export default {
    visible: {
        type: Boolean,
        default: false,
    },
    trigger: {
        type: String as PropType<TriggerMode>,
        default: 'click',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    // TODO: AYCP-12890
    showArrow: {
        type: Boolean,
        default: false,
    },
    placement: {
        type: String as PropType<Placement>,
        default: 'top',
    },
    popperClass: {
        type: String,
        default: 'ay-popper-default',
    },
    transition: {
        type: String,
        default: null,
    },

    appendToBody: {
        type: Boolean,
        default: true,
    },
};
