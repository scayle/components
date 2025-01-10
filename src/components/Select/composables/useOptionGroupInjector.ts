/**
 * External dependencies.
 */
import { inject } from 'vue';

/**
 * Internal dependencies.
 */

import { GroupIdKey } from './useOptionGroupProvider';

export default function useOptionGroupInjector() {
    const groupId = inject(GroupIdKey, null);

    return {
        groupId,
    };
}
