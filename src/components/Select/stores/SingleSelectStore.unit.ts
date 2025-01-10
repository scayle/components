/**
 * External dependencies.
 */
import { describe, it, expect, beforeEach } from 'vitest';

/**
 * Internal dependencies.
 */
import SingleSelectStore from '@/components/Select/stores/SingleSelectStore';

describe('SingleSelectStore.ts', () => {
    let store: SingleSelectStore;

    beforeEach(() => {
        store = new SingleSelectStore();
    });

    it('can set value', () => {
        store.setWholeValue('testing');

        expect(store.getCurrentValue.value).toEqual('testing');
    });

    // this is a duplicate, due to how our interface works
    it('can set value with other function', () => {
        store.setValue('testing');

        expect(store.getCurrentValue.value).toEqual('testing');
    });

    it('can do toggle value, but it is the same as set value', () => {
        store.setValue('testing');
        store.toggleValue('test');

        expect(store.getCurrentValue.value).toEqual('test');
    });

    it('can clear value', () => {
        store.setWholeValue('testing');
        store.clearValue();

        expect(store.getCurrentValue.value).toBeNull();
    });

    it('removes value if we pass the same value as in the store', () => {
        store.setWholeValue('testing');
        store.removeValue('testing');

        expect(store.getCurrentValue.value).toBeNull();
    });

    it('does not remove value if we do not pass the same value as in the store', () => {
        store.setWholeValue('testing');
        store.removeValue('test');

        expect(store.getCurrentValue.value).toEqual('testing');
    });

    it('returns true if value is empty', () => {
        store.clearValue();

        expect(store.isEmpty.value).toBeTruthy();
        expect(store.isNotEmpty.value).toBeFalsy();
    });

    it('returns true if value is not empty', () => {
        store.setValue('test');

        expect(store.isNotEmpty.value).toBeTruthy();
        expect(store.isEmpty.value).toBeFalsy();
    });

    it('returns true if value exists', () => {
        store.setValue('test');

        expect(store.compareValue('test')).toBeTruthy();
    });

    it('returns false if value does not exists', () => {
        store.setValue('test');
        store.setValue('testing');

        expect(store.compareValue('test')).toBeFalsy();
    });
});
