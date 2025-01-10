/**
 * External dependencies.
 */
import { ref, computed, nextTick } from 'vue';
import { useVModel, templateRef } from '@vueuse/core';
import type { Component, ComponentPublicInstance, ExtractPropTypes } from 'vue';

/**
 * Internal dependencies.
 */
import useEmitter from '@/composables/useEmitter';
import type getCommonSelectProps from '@/components/Select/SelectProps';
import { getBaseSelectProps } from '@/components/Select/SelectProps';
import type { ValueType } from '@/components/Select/BaseSelectTypes';

export type UseSelectBasicsProps<T extends ValueType> = {
    props: ExtractPropTypes<ReturnType<typeof getCommonSelectProps<T>>>;
};

const baseSelectPropKeys = Object.keys(getBaseSelectProps())
    // each select uses v-model to pass modelValue
    .filter(key => key !== 'modelValue');

export default function useSelectBasics<T extends ValueType, U extends Component>({ props }: UseSelectBasicsProps<T>) {
    const { emit } = useEmitter();
    const value = useVModel<any, any, any>(props, 'modelValue', emit);
    const searchInput = templateRef<U>('searchInput');
    const query = ref('');
    const onOpen = async (isOpen: boolean) => {
        if (isOpen) {
            await nextTick();

            (searchInput.value as ComponentPublicInstance)?.$el?.querySelector('input')?.focus();
        } else {
            query.value = '';
        }
    };
    const baseSelectProps = computed(() => {
        return baseSelectPropKeys.reduce((obj: any, key) => {
            obj[key] = (props as any)[key];

            return obj;
        }, {});
    });

    return {
        value,
        searchInput,
        query,
        onOpen,
        baseSelectProps,
    };
}
