<template>
    <Transition name="ay-modal-fade">
        <BaseModal
            :disable-cancelling="disableCancelling"
            :visible="visible"
            class="ay-modal"
            @cancel="$emit('cancel')"
            @submit="$emit('submit')"
            @update:visible="$emit('update:visible', $event)"
        >
            <template #default="{ cancel, submit }">
                <slot :cancel="cancel" :submit="submit" />
            </template>
        </BaseModal>
    </Transition>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './ModalTemplate.css';
import BaseModal from '@/components/Modal/BaseModal.vue';

export default defineComponent({
    name: 'ModalTemplate',

    components: {
        BaseModal,
    },

    props: {
        visible: {
            type: Boolean,
            default: false,
        },

        disableCancelling: {
            type: Boolean,
            default: false,
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
});
</script>
