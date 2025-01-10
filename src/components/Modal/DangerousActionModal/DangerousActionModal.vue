<template>
    <ModalTemplate
        :visible="visible"
        class="ay-dangerous-modal"
        @cancel="onCancel"
        @update:visible="$emit('update:visible', $event)"
    >
        <template #default="{ cancel, submit }">
            <ModalHeader :title="title ?? t('dangerous-action-modal.title')" @click="cancel" />

            <ModalBody>
                <div class="ay-dangerous-modal__warning-header">
                    <div class="ay-dangerous-modal__icon-container" @click="cancel">
                        <IconPanelWarningFill class="ay-dangerous-modal__icon" />
                    </div>

                    <h5 class="ay-dangerous-modal__warning-title">{{ t('dangerous-action-modal.body-title') }}</h5>
                </div>

                <div class="ay-dangerous-modal__info">
                    <p v-if="explanation" v-sanitize-html="explanation" />
                    <p v-else v-fragment="th('dangerous-action-modal.default-explanation')" />
                </div>

                <div class="ay-dangerous-modal__confirm-container">
                    <label class="ay-dangerous-modal__confirm-label">
                        <span>{{ t('dangerous-action-modal.confirm-action') }}</span>

                        <input v-model="name" class="ay-dangerous-modal__confirm-input" type="text">
                    </label>

                    <small
                        v-fragment="th('dangerous-action-modal.confirmation-text', { itemName: deletedItemName })"
                        class="ay-dangerous-modal__confirm-tip"
                    />
                </div>

                <div class="ay-dangerous-modal__acknowledge">
                    <Checkbox v-model="acknowledged">
                        <span class="ay-dangerous-modal__acknowledge-info">
                            {{ t('dangerous-action-modal.acknowledge-text') }}
                        </span>
                    </Checkbox>
                </div>
            </ModalBody>

            <ModalFooter>
                <ModalButton :text="t('dangerous-action-modal.back-to-safety')" variant="cancel" @click="cancel" />
                <ModalButton :disabled="!canDelete" :text="deleteLabel" variant="delete" @click="onConfirm(submit)" />
            </ModalFooter>
        </template>
    </ModalTemplate>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { ref, computed, toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './DangerousActionModal.css';
import useTranslation from '@/composables/useTranslation';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import ModalBody from '@/components/Modal/components/ModalBody/ModalBody.vue';
import ModalHeader from '@/components/Modal/components/ModalHeader/ModalHeader.vue';
import ModalFooter from '@/components/Modal/components/ModalFooter/ModalFooter.vue';
import ModalButton from '@/components/Modal/components/ModalButton/ModalButton.vue';
import ModalTemplate from '@/components/Modal/components/ModalTemplate/ModalTemplate.vue';

import sanitizeHtmlDirective from '@/directives/sanitize-html';
import fragmentDirective from '@/directives/fragment';

export default defineComponent({
    name: 'DangerousActionModal',

    directives: {
        'sanitize-html': sanitizeHtmlDirective,
        fragment: fragmentDirective,
    },

    components: {
        Checkbox,
        ModalButton,
        ModalFooter,
        ModalBody,
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
            default: null,
        },

        deletedItemName: {
            type: String,
            required: true,
            default: '',
        },

        hideItemName: {
            type: Boolean,
            default: false,
        },

        explanation: {
            type: String,
            default: null,
        },
    },

    emits: {
        cancel() {
            return true;
        },

        hide(_payload: boolean) {
            return true;
        },

        confirm() {
            return true;
        },

        ['update:visible'](_payload: boolean) {
            return true;
        },
    },

    setup(props, { emit }) {
        const { t, th } = useTranslation();
        const { deletedItemName, hideItemName } = toRefs(props);
        const name = ref('');
        const acknowledged = ref(false);
        const canDelete = computed(() => name.value.trim() === deletedItemName.value.trim() && acknowledged.value);
        const deleteLabel = computed(() => {
            if (hideItemName.value) {
                return t('dangerous-action-modal.delete');
            }

            return t('dangerous-action-modal.delete-item', { itemName: deletedItemName.value });
        });
        const reset = () => {
            name.value = '';
            acknowledged.value = false;
        };
        const onCancel = () => {
            emit('hide', false);
            emit('cancel');

            reset();
        };
        const onConfirm = (confirmCallable: CallableFunction) => {
            if (!canDelete.value) {
                return;
            }

            confirmCallable();

            emit('hide', true);
            emit('confirm');

            reset();
        };

        return {
            t,
            th,
            name,
            onCancel,
            onConfirm,
            canDelete,
            deleteLabel,
            acknowledged,
        };
    },
});
</script>
