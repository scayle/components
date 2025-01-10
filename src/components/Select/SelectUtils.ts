/**
 * External dependencies.
 */
import isPlainObject from 'lodash.isplainobject';

/**
 * Internal dependencies.
 */
import { isEqual, isNil } from '@/utils';
import type { ValueType } from '@/components/Select/BaseSelectTypes';

type ObjectWithId = { id: any };

export const compareSelectValues = <T extends ValueType>(v1: T, v2: T) => {
    if (isPlainObject(v1) && isPlainObject(v2)) {
        const tValue = v1 as ObjectWithId;
        const tCompareValue = v2 as ObjectWithId;

        if (!isNil(tValue?.id) && !isNil(tCompareValue?.id)) {
            return tValue.id === tCompareValue.id;
        }

        return isEqual(tValue, tCompareValue);
    }

    return v1 === v2;
};
