/**
 * External dependencies.
 */
import { describe, expect, it } from 'vitest';

/**
 * Internal dependencies.
 */
import { isEqual, range } from '@/utils';
import { fc, itProp } from '@/fast-check-utils';

describe('utils.ts', () => {
    describe('has a range function', () => {
        it('that returns an empty array when start and stop are equal', () => {
            expect(range(3, 3)).toEqual([]);
        });

        it('that returns an array with the specified range', () => {
            expect(range(0, 3)).toEqual([0, 1, 2]);
        });

        it('throws an error if start is greater than stop', () => {
            expect(() => range(3, 2)).toThrow();
        });

        itProp(
            'that returns an array with positive specified range',
            [fc.nat({ max: 300 }), fc.integer({ min: 300, max: 10000 })],
            (start, end) => {
                const expectedLength = end - start;
                const expectedArray = [];

                for (let i = 0; i < expectedLength; i++) {
                    expectedArray.push(i + start);
                }

                const rangedArray = range(start, end);

                expect(rangedArray.length).toEqual(expectedLength);
                expect(rangedArray).toEqual(expectedArray);
            }
        );

        itProp(
            'throws an error if one of start and end is negative',
            [fc.integer({ min: -100, max: -1 }), fc.integer({ min: -100, max: -1 })],
            (start, end) => {
                expect(() => range(start, end)).toThrow();
            }
        );
    });

    describe('has an isEqual function', () => {
        itProp('that compares that two object are equal', [fc.object()], value => {
            expect(isEqual(value, value)).toBeTruthy();
        });

        itProp('that compares that two arrays are equal', [fc.array(fc.string())], value => {
            expect(isEqual(value, value)).toBeTruthy();
        });

        itProp('that compares that two arrays with any values are equal', [fc.array(fc.anything())], value => {
            expect(isEqual(value, value)).toBeTruthy();
        });

        itProp('that compares that two integers are equal', [fc.integer()], value => {
            expect(isEqual(value, value)).toBeTruthy();
        });

        itProp('that compares that two strings are equal', [fc.string()], value => {
            expect(isEqual(value, value)).toBeTruthy();
        });

        itProp('that compares that two object are not equal', [fc.object(), fc.object()], (value, value2) => {
            value2.not_in_value_1 = 'something-random';

            expect(isEqual(value, value2)).toBeFalsy();
        });

        itProp(
            'that compares that two arrays are not equal',
            [fc.array(fc.string()), fc.array(fc.string())],
            (value, value2) => {
                value2.push('something-random');

                expect(isEqual(value, value2)).toBeFalsy();
            }
        );
    });
});
