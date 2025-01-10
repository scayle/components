<template>
    <Transition name="ay-off-canvas-slide-in">
        <BaseModal
            v-slot="{ cancel, submit }: { cancel: () => void, submit: () => void }"
            v-model:visible="innerVisible"
            class="ay-off-canvas"
        >
            <div class="ay-off-canvas__header">
                <template v-if="$slots.header">
                    <slot :cancel="cancel" :submit="submit" name="header" />
                </template>
                <template v-else>
                    <span class="ay-off-canvas__header-title">{{ title }}</span>
                    <button class="ay-off-canvas__close-btn" @click="cancel">
                        <IconPanelClose class="icon-md" />
                    </button>
                </template>
            </div>

            <div class="ay-off-canvas__body">
                <slot />
            </div>

            <template v-if="$slots.footer">
                <div class="ay-off-canvas__footer">
                    <slot :cancel="cancel" :submit="submit" name="footer" />
                </div>
            </template>
        </BaseModal>
    </Transition>
</template>

<script lang="ts">
import './OffCanvas.css';
import { defineComponent } from 'vue';

import BaseModal from '../Modal/BaseModal.vue';

export default defineComponent({
    name: 'OffCanvas',

    components: { BaseModal },

    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Title',
        },
    },

    emits: {
        ['update:visible'](_payload: Boolean) {
            return true;
        },
    },

    computed: {
        innerVisible: {
            get() {
                return this.visible;
            },
            set(val: boolean) {
                this.$emit('update:visible', val);
            },
        },
    },
});
</script>
