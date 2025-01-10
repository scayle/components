/**
 * External dependencies.
 */
import { getCurrentInstance, onBeforeUnmount, ref } from 'vue';

/**
 * Internal dependencies.
 */
import type { InternalBusEvent } from '@/enums/InternalBusEvent';

export type Events = { [_key in InternalBusEvent]?: Function[] };

const events = ref<Events>({});
export default function useInternalBusEvent() {
    let callbacksPushed: Events = {};
    const instance = getCurrentInstance();

    const on = (event: InternalBusEvent, callback: Function) => {
        events.value[event] ??= [];
        events.value[event]?.push(callback);

        if (instance) {
            callbacksPushed[event] ??= [];
            callbacksPushed[event]?.push(callback);
        }
    };
    const off = (event: InternalBusEvent, callback: Function) => {
        if (!events.value[event]) {
            return;
        }

        events.value[event] = events.value[event]?.filter(cb => cb !== callback) ?? [];

        if (instance) {
            callbacksPushed[event] = callbacksPushed[event]?.filter(cb => cb !== callback) ?? [];
        }
    };
    const trigger = (event: InternalBusEvent) => {
        events.value[event]?.forEach(callback => callback());
    };

    if (instance) {
        // clear pushed callbacks automatically if we are in a component
        onBeforeUnmount(() => {
            Object.entries(callbacksPushed).forEach(([event, callbacks]) => {
                callbacks.forEach(callback => off(event as InternalBusEvent, callback));
            });
            callbacksPushed = {};
        });
    }

    return {
        on,
        off,
        trigger,
    };
}
