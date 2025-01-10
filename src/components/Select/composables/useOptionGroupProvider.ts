/**
 * External dependencies.
 */
import type { InjectionKey } from 'vue';
import { provide } from 'vue';
import { nanoid } from 'nanoid';

/**
 * Internal dependencies.
 */

export const GroupIdKey: InjectionKey<string> = Symbol('group-id-key');

export default function useOptionGroupProvider() {
    const groupId = nanoid();

    provide(GroupIdKey, groupId);

    return {
        groupId,
    };
}
