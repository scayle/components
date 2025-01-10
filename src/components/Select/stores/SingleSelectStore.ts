/**
 * External dependencies.
 */
import type { Ref } from 'vue';
import { ref, computed } from 'vue';

/**
 * Internal dependencies.
 */
import type { Store } from '@/components/Select/stores/BaseSelectStore';
import type { ValueType } from '@/components/Select/BaseSelectTypes';
import { compareSelectValues } from '@/components/Select/SelectUtils';

export default class SingleSelectStore implements Store<ValueType, ValueType> {
    protected currentValue: Ref<ValueType>;

    constructor(initialValue: ValueType = null) {
        this.currentValue = ref(initialValue);
    }

    get getCurrentValue() {
        return computed(() => this.currentValue.value);
    }

    get isNotEmpty() {
        return computed(() => !!this.currentValue.value);
    }

    get isEmpty() {
        return computed(() => !this.isNotEmpty.value);
    }

    clearValue(): void {
        this.currentValue.value = null;
    }

    compareValue(compareValue: ValueType): boolean {
        return compareSelectValues(this.currentValue.value, compareValue);
    }

    setWholeValue(value: ValueType) {
        this.currentValue.value = value;
    }

    toggleValue(value: ValueType) {
        this.setValue(value);
    }

    setValue(value: ValueType): void {
        this.currentValue.value = value;
    }

    removeValue(value: ValueType) {
        if (!this.compareValue(value)) {
            return;
        }

        this.clearValue();
    }
}
