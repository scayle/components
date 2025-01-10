<template>
    <component
        :is="tag"
        ref="element"
        :data-select-option-group-parent-id="groupId"
        :data-select-option-id="uuid"
        @click="select"
        @mouseenter="onMouseEnter"
    >
        <slot :active="isActive" :selected="isSelected" />
    </component>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { nanoid } from 'nanoid';
import { templateRef } from '@vueuse/core';
import { watch, computed, nextTick, defineComponent, inject, onMounted, onBeforeUnmount } from 'vue';

/**
 * Internal dependencies.
 */
import type { BaseSelectStore } from '../../stores/BaseSelectStore';
import { scrollIntoViewIfNeeded } from '@/utils';
import useOptionGroupInjector from '@/components/Select/composables/useOptionGroupInjector';

export default defineComponent({
    name: 'BaseOption',
    props: {
        value: {
            type: [String, Number, Object],
            required: true,
        },
        label: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        tag: {
            type: String,
            default: 'div',
        },
        closeOnSelect: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        const uuid = nanoid();
        const elementRef = templateRef('element');
        const { groupId } = useOptionGroupInjector();
        const selectStore = inject<BaseSelectStore<any, any>>('selectStore');
        const isActive = computed(() => selectStore?.state?.activeId === uuid);
        const isSelected = computed(() => selectStore?.compareValue(props.value));

        const onMouseEnter = () => {
            selectStore?.setActive(uuid);
        };

        const select = () => {
            selectStore?.selectOption(props.value);
            if (props.closeOnSelect && !selectStore?.isMultiSelect) {
                selectStore?.closeMenu();
            }
        };

        onMounted(() =>
            selectStore?.addOption(uuid, {
                value: props.value,
                label: props.label,
                disabled: props.disabled,
            })
        );
        onBeforeUnmount(() => selectStore?.removeOption(uuid));

        watch([isActive, selectStore?.isFullyOpened], async ([active, opened]) => {
            if (!elementRef.value || !active || !opened) {
                return;
            }

            await nextTick();

            scrollIntoViewIfNeeded(elementRef.value as HTMLElement);
        });

        return {
            uuid,
            select,
            isActive,
            isSelected,
            onMouseEnter,
            selectStore,
            groupId,
        };
    },
});
</script>
