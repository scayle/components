<template>
    <Popper
        ref="popper"
        v-model:visible="selectOpen"
        :append-to-body="appendDropdownToBody"
        :placement="placement"
        :popper-class="popperClass"
        :transition="transition"
        :trigger="trigger"
        :disabled="disabled"
        @fully-opened="onFullyOpened"
        @fully-closed="onFullyClosed"
    >
        <template #reference="{ isOpen }">
            <div class="ay-select__container">
                <div v-if="label || isClearButtonVisible" class="ay-select__head">
                    <span v-if="label" :class="{ 'ay-is-required': required }" class="ay-select__label">
                        {{ label }}
                    </span>

                    <button
                        v-if="isClearButtonVisible"
                        :disabled="disabled"
                        class="ay-select__clear-button"
                        type="button"
                        @click="selectStore.clearValue"
                    >
                        {{ t('select.clear-button') }}
                    </button>
                </div>

                <div class="ay-select__body">
                    <slot
                        :clear-value="clearValue"
                        :click="clickHandler"
                        :current-value="selectStore.state.currentValue"
                        :is-open="isOpen"
                        :remove-value="removeValue"
                        name="button"
                    />
                </div>
            </div>
        </template>

        <template #content>
            <slot :count="selectStore.state.options.length" name="listbox" />
        </template>
    </Popper>
</template>

<script lang="ts">
import { templateRef } from '@vueuse/core';
import type { Placement } from '@popperjs/core';
import { defineComponent, computed, nextTick, provide, watch, type PropType, type ComponentPublicInstance } from 'vue';

import Popper from '../Popper/Popper.vue';

import '../Input/Input.css';
import './Select.css';

import type { TriggerMode } from '../Popper/popper-types';
import { getBaseSelectProps } from './SelectProps';

import type { Store } from './stores/BaseSelectStore';
import createStore from './stores/BaseSelectStore';
import useKeyboardNavigation from '@/components/Select/composables/useKeyboardNavigation';
import type { MultiSelectValueType, ValueType } from '@/components/Select/BaseSelectTypes';
import useTranslation from '@/composables/useTranslation';
import SingleSelectStore from '@/components/Select/stores/SingleSelectStore';

type SelectType = ValueType | MultiSelectValueType;

export default defineComponent({
    name: 'BaseSelect',
    components: { Popper },
    props: {
        ...getBaseSelectProps<SelectType>(),

        popperClass: {
            type: String,
            default: null,
        },

        transition: {
            type: String,
            default: 'ay-select',
        },

        store: {
            type: Object as PropType<Store<SelectType, ValueType>>,
            default: () => new SingleSelectStore(),
        },

        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        clear() {
            return true;
        },

        ['update:modelValue'](_payload: SelectType) {
            return true;
        },
        ['open'](_payload: boolean) {
            return true;
        },
        ['fully-open'](_payload: boolean) {
            return true;
        },
    },
    setup(props, ctx) {
        const popper = templateRef<ComponentPublicInstance | null>('popper');
        const referenceInputElement = computed(() => (popper.value?.$refs?.reference as any)?.querySelector('input'));

        props.store.setWholeValue(props.modelValue);

        const selectMenuStore = createStore(props.store, {
            onSelected: async () => {
                await nextTick();

                // if we find an input element focus on it
                // if not don't focus
                if (referenceInputElement.value) {
                    referenceInputElement.value?.focus();
                } else {
                    popper.value?.$el?.focus();
                }
            },
        });

        // Lint error: Getting a value from the `props` in root scope of `setup()` will cause the value to lose reactivity  vue/no-setup-props-destructure
        // We can ignore it because the value does not need to be reactive
        selectMenuStore.isMultiSelect = props.store.isMultiSelect; // eslint-disable-line

        const { t } = useTranslation();

        provide('selectStore', selectMenuStore);

        const selectOpen = computed({
            get() {
                return selectMenuStore.state.isOpen;
            },
            set(val) {
                if (val) {
                    selectMenuStore.openMenu();
                } else {
                    selectMenuStore.closeMenu();
                }
            },
        });
        const shouldHaveTabIndex = computed(() => !!referenceInputElement.value);
        const isClearButtonVisible = computed(() => props.clearable && selectMenuStore.isNotEmpty.value);

        watch(
            () => props.modelValue,
            newVal => {
                selectMenuStore.setValue(newVal);
            }
        );

        watch(
            () => selectMenuStore.state.isOpen,
            newVal => ctx.emit('open', newVal)
        );

        watch(selectMenuStore.isFullyOpened, newVal => ctx.emit('fully-open', newVal));

        watch(
            () => selectMenuStore.state.currentValue,
            newVal => ctx.emit('update:modelValue', newVal)
        );

        useKeyboardNavigation(selectMenuStore);

        return {
            t,
            selectOpen,
            shouldHaveTabIndex,
            isClearButtonVisible,
            selectStore: selectMenuStore,
            removeValue: selectMenuStore.removeValue,
            onFullyOpened: () => selectMenuStore._changeFullyOpenedState(true),
            onFullyClosed: () => selectMenuStore._changeFullyOpenedState(false),
        };
    },
    data() {
        return {
            placement: 'bottom' as Placement,
            trigger: 'manual' as TriggerMode,
        };
    },
    methods: {
        clickHandler(e: MouseEvent) {
            this.selectStore.toggleMenu();
            e.stopPropagation();
        },
        clearValue() {
            this.selectStore.clearValue();
        },
    },
});
</script>
