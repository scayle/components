// A directive to trigger the show/hide methods on <dialog> elements
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show
// Supports the Vue transition component
// https://vuejs.org/guide/built-ins/transition.html

import type { ObjectDirective } from 'vue';

function toggleDialog(el: HTMLDialogElement, value: unknown, modal: boolean): void {
    if (!value) {
        el.close();
        return;
    }

    if (modal) {
        el.showModal();
        return;
    }

    el.show();
}

export const vDialog: ObjectDirective<HTMLDialogElement> = {
    beforeMount(el, { value }, { transition }) {
        if (transition && value) {
            transition.beforeEnter(el);
        }
    },

    mounted(el, { value, modifiers }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }

        toggleDialog(el, value, modifiers.modal);
    },

    updated(el, { value, oldValue, modifiers }, { transition }) {
        if (!value === !oldValue) {
            return;
        }

        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                toggleDialog(el, true, modifiers.modal);
                transition.enter(el);
            } else {
                transition.leave(el, () => {
                    toggleDialog(el, false, modifiers.modal);
                });
            }
        } else {
            toggleDialog(el, value, modifiers.modal);
        }
    },

    beforeUnmount(el, { modifiers }) {
        toggleDialog(el, false, modifiers.modal);
    },
};
