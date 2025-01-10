/**
 * External dependencies.
 */

import type { ExtractPropTypes } from 'vue';
import { computed, ref, render, toRefs } from 'vue';
import { templateRef, watchOnce } from '@vueuse/core';

/**
 * Internal dependencies.
 */
import Timer from '@/helpers/timer';
import { removeElement, startTimeout } from '@/utils';
import useNodeRootElement from '@/composables/useNodeRootElement';
import type Notification from '@/composables/Notification/Notification.vue';

export default function useNotificationLogic(props: ExtractPropTypes<typeof Notification>) {
    let queueTimer: any = -1;
    let mainTimer: Timer | null = null;

    const { queue, duration, dismissible, pauseOnHover } = toRefs(props);
    const toastParent = ref<HTMLDivElement | null>(null);
    const container = templateRef<HTMLDivElement>('container');
    const containerParent = computed(() => container.value?.parentElement);
    const isActive = ref(false);
    const { rootElement } = useNodeRootElement(containerParent);
    const shouldQueue = computed(() => {
        if (!queue.value) {
            return false;
        }

        return (toastParent.value?.childElementCount || 0) > 0;
    });

    const dismiss = async () => {
        mainTimer?.stop();

        clearTimeout(queueTimer);
        queueTimer = -1;

        isActive.value = false;

        // Timeout for the animation to complete before destroying
        await startTimeout(150);

        props.onDismiss();

        const wrapper = container.value;

        // unmount the component
        render(null, wrapper);
        removeElement(wrapper);
    };
    const whenClicked = () => {
        if (!dismissible.value) {
            return;
        }

        props.onClick();
        dismiss();
    };
    const pauseTimer = () => {
        if (!pauseOnHover.value) {
            return;
        }

        mainTimer?.pause();
    };
    const resumeTimer = () => {
        if (!pauseOnHover.value) {
            return;
        }

        mainTimer?.resume();
    };
    const setupContainer = () => {
        const rootContainer = rootElement.value || document.body;
        toastParent.value = rootContainer.querySelector('.ay-notification');

        if (toastParent.value) {
            return;
        }

        toastParent.value = document.createElement('div');
        toastParent.value.className = 'ay-notification';

        rootContainer.appendChild(toastParent.value);
    };
    const showNotice = () => {
        if (shouldQueue.value || !toastParent.value || !container.value) {
            // Call recursively if it should queue
            queueTimer = setTimeout(showNotice, 250);

            return;
        }

        toastParent.value.insertAdjacentElement('afterbegin', container.value);
        removeElement(containerParent.value);

        isActive.value = true;

        if (duration.value) {
            mainTimer = new Timer(dismiss, duration.value);
        }
    };

    watchOnce(rootElement, () => {
        setupContainer();
        showNotice();
    });

    return {
        isActive,

        dismiss,
        whenClicked,
        resumeTimer,
        pauseTimer,
    };
}
