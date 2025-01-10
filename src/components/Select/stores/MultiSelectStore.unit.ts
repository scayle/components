/**
 * External dependencies.
 */
import { describe, it, expect, beforeEach } from 'vitest';

/**
 * Internal dependencies.
 */
import MultiSelectStore from '@/components/Select/stores/MultiSelectStore';

describe('MultiSelectStore.ts', () => {
    let store: MultiSelectStore;

    beforeEach(() => {
        store = new MultiSelectStore();
    });

    it('can set the whole array value', () => {
        store.setWholeValue(['testing']);

        expect(store.getCurrentValue.value).toEqual(['testing']);
    });

    it('can add a value to the store', () => {
        store.setValue('testing');
        store.setValue('test');

        expect(store.getCurrentValue.value).toEqual(['testing', 'test']);
    });

    it('can add a value to the store that is an array', () => {
        store.setValue(['testing', 'test']);

        expect(store.getCurrentValue.value).toEqual(['testing', 'test']);
    });

    it('can toggle value', () => {
        store.toggleValue('test');

        expect(store.compareValue('test')).toBeTruthy();

        store.toggleValue('test');

        expect(store.compareValue('test')).toBeFalsy();
    });

    it('can clear value', () => {
        store.setValue('testing');
        store.clearValue();

        expect(store.getCurrentValue.value).toEqual([]);
    });

    it('removes value if we pass the same value as in the store', () => {
        store.setValue('testing');
        store.removeValue('testing');

        expect(store.getCurrentValue.value).toEqual([]);
    });

    it('does not remove value if we do not pass the same value as in the store', () => {
        store.setValue('testing');
        store.removeValue('test');

        expect(store.getCurrentValue.value.length).toEqual(1);
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
        store.setValue('testing');

        expect(store.compareValue('test')).toBeTruthy();
        expect(store.compareValue('testing')).toBeTruthy();
    });

    it('returns false if value does not exists', () => {
        store.setValue('test');
        store.setValue('testing');

        expect(store.compareValue('test 2')).toBeFalsy();
    });
});
