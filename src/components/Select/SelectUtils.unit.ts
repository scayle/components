/**
 * External dependencies.
 */
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import { fc, itProp } from '@/fast-check-utils';
import { compareSelectValues } from '@/components/Select/SelectUtils';

describe('SelectUtils.ts', () => {
    describe('has compareSelectValues function', () => {
        describe('that returns true', () => {
            itProp('when compared integer values are equal', [fc.integer()], value => {
                expect(compareSelectValues(value, value)).toBeTruthy();
            });

            itProp('when compared string values are equal', [fc.string()], value => {
                expect(compareSelectValues(value, value)).toBeTruthy();
            });

            itProp('when compared object values are equal', [fc.object()], value => {
                expect(compareSelectValues(value, value)).toBeTruthy();
            });

            itProp('when compared object values that have id are equal', [fc.integer(), fc.string()], (value, str) => {
                const objValue1 = { id: value, name: str };
                const objValue2 = { id: value, name: str + ' - 1' };
                expect(compareSelectValues(objValue1, objValue2)).toBeTruthy();
            });

            it('when two objects have same property values', () => {
                const objValue1 = { age: 1, name: 'Test' };
                expect(compareSelectValues(objValue1, objValue1)).toBeTruthy();
            });

            it('when the objects have their properties in different order', () => {
                const objValue1 = { age: 1, name: 'Test' };
                const objValue2 = { name: 'Test', age: 1 };
                expect(compareSelectValues(objValue1, objValue2)).toBeTruthy();
            });
        });

        describe('that returns false', () => {
            itProp(
                'when we have different values',
                [fc.integer({ min: 1, max: 1000 }), fc.integer({ min: 1001, max: 2000 })],
                (v1, v2) => {
                    expect(compareSelectValues(v1, v2)).toBeFalsy();
                }
            );

            it('when two objects have different property values', () => {
                const objValue1 = { age: 1, name: 'Test' };
                const objValue2 = { age: 2, name: 'Test' };
                expect(compareSelectValues(objValue1, objValue2)).toBeFalsy();
            });

            it('when two objects have different id values', () => {
                const objValue1 = { id: 1, name: 'Test' };
                const objValue2 = { id: 2, name: 'Test' };
                expect(compareSelectValues(objValue1, objValue2)).toBeFalsy();
            });
        });
    });
});
