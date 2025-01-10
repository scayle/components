/* eslint-disable no-unused-vars */

/**
 * External dependencies.
 */
import type { Ref, ComputedRef } from 'vue';

/**
 * Internal dependencies.
 */

export enum TabLayout {
    SIMPLE = 'simple',
    BUTTON = 'button',
}

export type TabOptions = {
    label?: string;
    badgeText?: string | number;
};

export type Tab = {
    name: string;
    isActive: boolean;
    type: TabLayout;
    options?: TabOptions;
};

export type Tabs = Tab[];

export type DeregisterTab = (name: string) => void;
export type RegisterTab = (name: string, options: TabOptions & { type: TabLayout }) => void;
export type UpdateTab = (oldName: string, newName: string, options?: TabOptions) => void;
export type IsTabActive = (name: Ref<string> | string) => ComputedRef<boolean>;
