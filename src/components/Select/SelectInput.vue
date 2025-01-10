<template>
    <Input
        ref="container"
        :model-value="label"
        :placeholder="placeholderText"
        :disabled="disabled"
        class="ay-select__input"
        readonly
        @click="onClick"
    >
        <template #suffix>
            <IconPanelClose v-if="clearable && value" class="ay-select__close-icon" @click.stop="$emit('clear')" />
            <IconPanelChevronDown
                :class="{
                    'ay-select__chevron-icon--open': isOpen,
                }"
                class="ay-select__chevron-icon"
            />
        </template>
    </Input>
</template>
<script lang="ts">
import { defineComponent, computed, toRefs } from 'vue';

import Input from '../Input/Input.vue';
import useTranslation from '@/composables/useTranslation';
import useSelectFocusFixer from '@/components/Select/composables/useSelectFocusFixer';

export default defineComponent({
    name: 'SelectInput',
    components: {
        /* eslint-disable */
        Input,
    },
    props: {
        placeholder: {
            type: String,
            default: null,
        },
        value: {
            type: [String, Array, Object, Number],
            default: null,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        isOpen: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        click(_event: Event) {
            return true;
        },

        clear() {
            return true;
        },
    },
    setup(props) {
        const { t } = useTranslation();
        const { placeholder } = toRefs(props);
        const { onClick } = useSelectFocusFixer();

        const placeholderText = computed(() => placeholder.value ?? t('select.input-placeholder'));

        return {
            t,
            onClick,
            placeholderText,
        };
    },
});
</script>
