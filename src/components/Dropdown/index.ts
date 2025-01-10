/* istanbul ignore file */

import { default as _Dropdown } from './Dropdown.vue';
import { default as _DropdownMenu } from './DropdownMenu.vue';
import { default as _DropdownItem } from './DropdownItem.vue';
import { withPlugin } from '@/utils';

export const Dropdown = withPlugin(_Dropdown);
export const DropdownItem = withPlugin(_DropdownItem);
export const DropdownMenu = withPlugin(_DropdownMenu);
