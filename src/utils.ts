import type {
    AllowedComponentProps,
    App,
    Component,
    ComponentPublicInstance,
    ComputedRef,
    Plugin,
    VNodeProps,
} from 'vue';
import { computed, h, render } from 'vue';
import stringify from 'json-stringify-deterministic';

export type CreateComponentArguments<T extends Component> = {
    component: T;
    attachTo: HTMLElement;
    props?: any;
    slots?: {};

    // eslint-disable-next-line no-undef
    tag?: keyof HTMLElementTagNameMap;
};

export type GetUsageProps<T extends ComponentPublicInstance> = Omit<
    T['$props'],
    keyof AllowedComponentProps | keyof VNodeProps
>;

/**
 * Wrap a component in a Vue plugin
 * @param component
 */
export const withPlugin = function <T extends { name: string }>(component: T): T & Plugin {
    (component as typeof component & Plugin).install = (app: App): void => {
        app.component(component.name, component);
    };

    return component as typeof component & Plugin;
};

export const wrapInComputed = <T = any>(value: T): ComputedRef<T> => computed(() => value);

export const startTimeout = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

export const range = (start: number, stop: number): number[] => {
    if (start < 0 || stop < 0) {
        throw new Error('Start or stop cannot be below zero');
    }

    if (start > stop) {
        throw new Error('Start is greater than stop');
    }

    return Array.from({ length: stop - start }, (_, i) => i + start);
};

export const rangeIncluded = (start: number, stop: number) => range(start, stop + 1);

export function scrollIntoViewIfNeeded(element: HTMLElement | SVGElement, centerIfNeeded = true) {
    new IntersectionObserver(function(this: IntersectionObserver, [entry]) {
        const ratio = entry.intersectionRatio;

        if (ratio < 1) {
            const verticalAlignment = centerIfNeeded ? 'center' : 'nearest';

            element.scrollIntoView({
                block: verticalAlignment,
            });
        }

        // immediately disconnect
        // as we just need to check if the element is in view
        this.disconnect();
    }).observe(element);
}

export const isNil = (value: any) => value == null;

export const isEqual = (v1: any, v2: any) => stringify(v1) === stringify(v2);

export function removeElement(el: HTMLElement | null) {
    if (el?.remove) {
        el?.remove();

        return;
    }

    el?.parentNode?.removeChild(el);
}

export function createComponent<T extends Component>({
    attachTo,
    component,
    props = {},
    slots = {},
    tag = 'div',
}: CreateComponentArguments<T>) {
    const vNode = h(component, props, slots);
    const container = document.createElement(tag);

    attachTo.appendChild(container);
    render(vNode, container);

    return vNode.component;
}
