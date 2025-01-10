<template>
    <dialog v-dialog.modal="visible" @cancel="handleCancel" @click="handleClick">
        <slot :cancel="cancel" :submit="submit" />
    </dialog>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import { vDialog } from '@/directives/dialog';

export default defineComponent({
    name: 'BaseModal',

    directives: {
        dialog: vDialog,
    },

    props: {
        visible: {
            // supports v-model
            type: Boolean,
            required: true,
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

    setup(props, { emit }) {
        const { visible, disableCancelling } = toRefs(props);
        const cancel = () => {
            if (disableCancelling.value) {
                return;
            }

            emit('cancel');
            emit('update:visible', false);
        };
        const submit = () => {
            emit('submit');
            emit('update:visible', false);
        };
        const handleClick = (e: MouseEvent) => {
            if (!visible.value) {
                return;
            }

            const element = e.target as Element;

            if (element?.nodeName === 'DIALOG') {
                cancel();
            }
        };
        // Intercept the cancel event that is triggered from other sources (e.g. escape keypress) then prevent
        // the default behavior and use our own cancel behavior that uses an exit animation and keeps `visible` in sync
        const handleCancel = (e: Event) => {
            e.preventDefault();
            cancel();
        };

        return {
            cancel,
            submit,
            handleCancel,
            handleClick,
        };
    },
});
</script>
