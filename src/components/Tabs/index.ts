/**
 * Internal dependencies.
 */
import { default as _Tab } from './Tab.vue';
import { default as _Tabs } from './Tabs.vue';
import { default as _TabButton } from './TabButton.vue';
import { withPlugin } from '@/utils';

export const Tab = withPlugin(_Tab);
export const Tabs = withPlugin(_Tabs);
export const TabButton = withPlugin(_TabButton);
