<template>
    <ModalTemplate
        :disable-cancelling="submitting"
        :style="{ width }"
        :visible="visible"
        @cancel="$emit('cancel')"
        @submit="$emit('submit')"
        @update:visible="$emit('update:visible', $event)"
    >
        <template #default="{ cancel, submit }">
            <ModalHeader :title="title" @click="cancel" />

            <ModalBody>
                <slot />
            </ModalBody>

            <ModalFooter>
                <template v-if="!$slots.footer">
                    <ModalButton :disabled="submitting" :text="cancelText ?? t('modal.cancel')" @click="cancel" />
                    <ModalButton
                        :submitting="submitting"
                        :text="submitText ?? t('modal.submit')"
                        variant="submit"
                        @click="submit"
                    />
                </template>
                <slot v-else name="footer" />
            </ModalFooter>
        </template>
    </ModalTemplate>
</template>
<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import ModalBody from '../components/ModalBody/ModalBody.vue';
import ModalHeader from '../components/ModalHeader/ModalHeader.vue';
import ModalFooter from '../components/ModalFooter/ModalFooter.vue';
import ModalButton from '../components/ModalButton/ModalButton.vue';
import ModalTemplate from '../components/ModalTemplate/ModalTemplate.vue';
import useTranslation from '@/composables/useTranslation';

export default defineComponent({
    name: 'Modal',

    components: {
        ModalBody,
        ModalFooter,
        ModalButton,
        ModalHeader,
        ModalTemplate,
    },

    props: {
        visible: {
            // supports v-model
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: 'Title',
        },

        cancelText: {
            type: String,
            default: null,
        },

        submitText: {
            type: String,
            default: null,
        },

        submitting: {
            type: Boolean,
            default: false,
        },
        width: {
            type: String,
            default: '50%',
        },
    },

    emits: {
        cancel() {
            return true;
        },

        submit() {
            return true;
        },

        ['update:visible'](_payload: boolean) {
            return true;
        },
    },

    setup() {
        const { t } = useTranslation();

        return {
            t,
        };
    },
});
</script>
