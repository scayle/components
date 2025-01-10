<template>
    <button
        :class="buttonClass"
        :disabled="disabled || submitting"
        :value="variant"
        class="ay-modal__button"
        @click="$emit('click', $event)"
    >
        <Spinner v-if="submitting" size="sm" />

        <span v-else>{{ buttonText }}</span>
    </button>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { PropType } from 'vue';
import { computed, toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import Spinner from '@/components/Spinner/Spinner.vue';
import useTranslation from '@/composables/useTranslation';

export type ButtonVariant = 'cancel' | 'submit' | 'delete';

export default defineComponent({
    name: 'ModalButton',

    components: {
        Spinner,
    },

    props: {
        text: {
            type: String as PropType<string | null>,
            default: null,
        },

        variant: {
            type: String as PropType<ButtonVariant>,
            default: 'cancel',
            validation: (value: string) => ['cancel', 'submit', 'delete'].includes(value),
        },

        submitting: {
            type: Boolean,
            default: false,
        },

        disabled: {
            type: Boolean,
            default: false,
        },
    },

    emits: {
        click(_payload: Event) {
            return true;
        },
    },

    setup(props) {
        const { variant, text } = toRefs(props);
        const { t } = useTranslation();
        const buttonClass = computed(() => {
            return {
                cancel: 'ay-modal__cancel-button',
                submit: 'ay-modal__submit-button',
                delete: 'ay-modal__delete-button',
            }[variant.value];
        });

        const buttonText = computed(() => {
            if (text.value) {
                return text.value;
            }

            return {
                cancel: t('modal.cancel'),
                submit: t('modal.submit'),
                delete: t('modal.delete'),
            }[variant.value];
        });

        return {
            buttonText,
            buttonClass,
        };
    },
});
</script>
