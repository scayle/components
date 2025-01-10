/**
 * External dependencies.
 */
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

/**
 * Internal dependencies.
 */
import type { Store } from '@/components/Select/stores/BaseSelectStore';
import type { BaseValueType, MultiSelectValueType } from '@/components/Select/BaseSelectTypes';
import { compareSelectValues } from '@/components/Select/SelectUtils';
import { isEqual } from '@/utils';

export default class MultiSelectStore implements Store<MultiSelectValueType, BaseValueType> {
    protected currentValue: Ref<MultiSelectValueType>;
    public isMultiSelect: boolean;

    constructor(initialValue: MultiSelectValueType = []) {
        this.currentValue = ref(initialValue);
        this.isMultiSelect = true;
    }

    get getCurrentValue() {
        return computed(() => this.currentValue.value);
    }

    get isNotEmpty() {
        return computed(() => !!this.currentValue.value.length);
    }

    get isEmpty() {
        return computed(() => !this.isNotEmpty.value);
    }

    clearValue(): void {
        this.currentValue.value = [];
    }

    compareValue(compareValue: BaseValueType): boolean {
        return !!this.currentValue?.value?.some(value => compareSelectValues(value, compareValue));
    }

    setWholeValue(value: MultiSelectValueType) {
        this.currentValue.value = [...(value || [])] as MultiSelectValueType;
    }

    toggleValue(value: BaseValueType): void {
        if (this.compareValue(value)) {
            this.removeValue(value);

            return;
        }

        this.currentValue.value = [...this.currentValue.value, value] as MultiSelectValueType;
    }

    setValue(value: BaseValueType | MultiSelectValueType): void {
        if (Array.isArray(value)) {
            if (!isEqual(value, this.currentValue.value)) {
                this.currentValue.value = [...value];
            }

            return;
        }

        // if the value exists do nothing
        if (this.compareValue(value)) {
            return;
        }

        this.currentValue.value = [...this.currentValue.value, value] as MultiSelectValueType;
    }

    removeValue(value: BaseValueType) {
        this.currentValue.value = (this.currentValue.value as MultiSelectValueType[]).filter(
            v => !compareSelectValues(v, value)
        );
    }
}
