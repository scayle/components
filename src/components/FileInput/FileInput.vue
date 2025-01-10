<template>
    <div class="ay-file-input" @dragenter="onDragEnter" @dragleave="onDragLeave" @drop="drop" @dragover.prevent>
        <div :class="outerClasses" class="ay-file-input__outer">
            <div class="ay-file-input__container">
                <label class="ay-file-input__label">
                    <input
                        :accept="accept ? accept.join(', ') : undefined"
                        :multiple="multiple"
                        class="ay-file-input__input"
                        type="file"
                        @change="addImagesFromFileInput"
                    >

                    <span>{{ multiple ? 'Choose Files' : 'Choose a File' }}</span>
                </label>

                <p class="ay-file-input__help">
                    {{ multiple ? 'or drag and drop files' : 'or drag and drop a file' }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { ref, computed, toRefs, getCurrentInstance, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './FileInput.css';

export default defineComponent({
    name: 'FileInput',

    props: {
        multiple: {
            type: Boolean,
            default: true,
        },

        accept: {
            type: Array,
            default: null,
        },
    },

    emits: {
        change(_fileOrFiles: File | File[]) {
            return true;
        },
    },

    setup(props, { emit }) {
        const currentInstance = getCurrentInstance();
        const { accept, multiple } = toRefs(props);
        const isDragging = ref(false);
        const isInvalid = ref(false);
        // file is valid if we have null mime type
        const isFileValid = (file: File | DataTransferItem): boolean =>
            accept.value ? accept.value.includes(file.type) : true;
        const areAllFilesValid = (files: Iterable<File | DataTransferItem>): boolean => {
            for (const item of files) {
                if ('kind' in item && 'getAsFile' in item) {
                    if (item.kind !== 'file') {
                        return false;
                    }
                }

                if (!isFileValid(item)) {
                    return false;
                }
            }

            return true;
        };
        const outerClasses = computed(() => {
            if (isInvalid.value) {
                return 'ay-file-input__outer--invalid';
            } else if (isDragging.value) {
                return 'ay-file-input__outer--dragging';
            }

            return '';
        });

        const drop = (e: DragEvent) => {
            e.preventDefault();

            isDragging.value = false;

            if (isInvalid.value) {
                isInvalid.value = false;

                return;
            }

            if (e?.dataTransfer?.items) {
                const files = [];

                for (const item of e.dataTransfer.items) {
                    const file = item.getAsFile();

                    if (!file) {
                        continue;
                    }

                    files.push(file);
                }

                if (files.length) {
                    emit('change', multiple.value ? files : files[0]);
                }
            }

            isInvalid.value = false;
        };
        const onDragEnter = (e: DragEvent) => {
            isDragging.value = true;
            isInvalid.value = false;

            const dataTransfer = e?.dataTransfer;

            if (!dataTransfer?.items?.length) {
                isInvalid.value = true;

                return;
            }

            if (dataTransfer.items.length > 1 && !multiple.value) {
                isInvalid.value = true;

                return;
            }

            if (!areAllFilesValid(dataTransfer.items)) {
                isInvalid.value = true;
            }
        };
        const onDragLeave = (e: DragEvent) => {
            // Ignore drag leave if we're dragging over a child of the main drop zone
            if (currentInstance?.vnode?.el?.contains(e.relatedTarget)) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            isDragging.value = false;
            isInvalid.value = false;
        };
        const addImagesFromFileInput = (e: Event) => {
            const currentTarget = e.currentTarget as HTMLInputElement;

            if (!currentTarget?.files?.length) {
                return;
            }

            isInvalid.value = false;

            if (multiple.value) {
                if (!areAllFilesValid(currentTarget.files)) {
                    isInvalid.value = true;

                    return;
                }

                emit('change', [...currentTarget.files]);
            } else {
                const file = currentTarget.files[0];

                if (!isFileValid(file)) {
                    isInvalid.value = true;

                    return;
                }

                emit('change', file);
            }

            currentTarget.value = '';
        };

        return {
            drop,
            isInvalid,
            isDragging,
            outerClasses,
            onDragLeave,
            onDragEnter,
            addImagesFromFileInput,
        };
    },
});
</script>
