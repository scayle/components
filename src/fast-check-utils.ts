/**
 * Copied from the fast check library to make it work for vitest
 * @link: https://github.com/dubzzz/fast-check/blob/main/packages/jest/src/jest-fast-check.ts
 */

/**
 * External dependencies.
 */
import fc from 'fast-check';
import { it } from 'vitest';

type ArbitraryTuple<Ts extends [any] | any[]> = {
    [P in keyof Ts]: fc.Arbitrary<Ts[P]>;
};

type Prop<Ts extends [any] | any[]> = (..._args: Ts) => boolean | void | PromiseLike<boolean | void>;
type PromiseProp<Ts extends [any] | any[]> = (..._args: Ts) => Promise<boolean | void>;

function wrapProp<Ts extends [any] | any[]>(prop: Prop<Ts>): PromiseProp<Ts> {
    return (...args: Ts) => Promise.resolve(prop(...args));
}

function internalTestProp<Ts extends [any] | any[]>(
    testFn: typeof it,
    label: string,
    arbitraries: ArbitraryTuple<Ts>,
    prop: Prop<Ts>,
    params?: fc.Parameters<Ts>
): void {
    const customParams: fc.Parameters<Ts> = params || {};
    if (customParams.seed === undefined) {
        customParams.seed = Date.now();
    }

    const promiseProp = wrapProp(prop);
    testFn(`${label} (with seed=${customParams.seed})`, async () => {
        await fc.assert((fc.asyncProperty as any)(...(arbitraries as any), promiseProp), params);
    });
}

export function itProp<Ts extends [any] | any[]>(
    label: string,
    arbitraries: ArbitraryTuple<Ts>,
    prop: Prop<Ts>,
    params?: fc.Parameters<Ts>
): void {
    internalTestProp(it, label, arbitraries, prop, params);
}

// eslint-disable-next-line no-redeclare
export namespace itProp {
    export const only = <Ts extends [any] | any[]>(
        label: string,
        arbitraries: ArbitraryTuple<Ts>,
        prop: Prop<Ts>,
        params?: fc.Parameters<Ts>
    ): void => internalTestProp(it.only as typeof it, label, arbitraries, prop, params);
    export const skip = <Ts extends [any] | any[]>(
        label: string,
        arbitraries: ArbitraryTuple<Ts>,
        prop: Prop<Ts>,
        params?: fc.Parameters<Ts>
    ): void => internalTestProp(it.skip as typeof it, label, arbitraries, prop, params);
    export const todo = <Ts extends [any] | any[]>(label: string, _arbitraries?: ArbitraryTuple<Ts>): void =>
        it.todo(label);
}

export { fc };
