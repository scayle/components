/* istanbul ignore file */

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */
import _Select from './Select.vue';
import _BaseSelect from './BaseSelect.vue';
import _MultiSelect from './components/MultiSelect/MultiSelect.vue';

import _Option from './components/Option/Option.vue';
import _OptionGroup from './components/Option/OptionGroup.vue';

import { withPlugin } from '@/utils';

export const Select = withPlugin(_Select);
export const BaseSelect = withPlugin(_BaseSelect);
export const MultiSelect = withPlugin(_MultiSelect);

export const Option = withPlugin(_Option);
export const OptionGroup = withPlugin(_OptionGroup);
