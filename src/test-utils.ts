/**
 * External dependencies.
 */
import type { MountingOptions } from '@vue/test-utils';

/**
 * Internal dependencies.
 */

export type ComponentMountingOptions<T extends { $props: any }> = MountingOptions<Partial<T['$props']>>;
