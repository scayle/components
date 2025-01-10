/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */

import FileInput from './FileInput.vue';

const createFileList = (files: File[]) => {
    const fileList = [...files];
    (fileList as any).__proto__ = Object.create(FileList.prototype);
    (fileList as any).item = (index: number) => fileList[index];

    return fileList as unknown as FileList;
};
const createDataTransferItems = (files: File[]) => {
    const dataTransferItems = files.map(file => {
        const dataTransferItem: DataTransferItem = {
            kind: 'file',
            type: file.type,
            getAsFile: () => file,
            getAsString: () => '',
            webkitGetAsEntry: () => null,
        };

        return dataTransferItem;
    });
    (dataTransferItems as any).add = (item: DataTransferItem) => dataTransferItems.push(item);
    (dataTransferItems as any).remove = (index: number) => dataTransferItems.splice(index, 1);
    (dataTransferItems as any).clear = () => dataTransferItems.splice(0, dataTransferItems.length);

    return dataTransferItems as unknown as DataTransferItemList;
};
// Reference https://github.com/jsdom/jsdom/issues/1272#issuecomment-944916775
const addFilesToInput = (input: HTMLInputElement, files: File[]) => {
    Object.defineProperty(input, 'files', {
        value: createFileList(files),
        writable: true,
    });
};
const createDataTransferClassObject = (files: File[]) => {
    const dataTransfer: Partial<DataTransfer> = {
        items: createDataTransferItems(files),
    };

    return dataTransfer;
};

describe('FileInput.vue', () => {
    describe('change event on input field', () => {
        it('emits when we try to upload file', () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: ['image/jpeg'],
                },
            });
            const inputWrapper = wrapper.find('input');
            const file = new File([], 'foo.jpg', { type: 'image/jpeg' });

            addFilesToInput(inputWrapper.element, [file]);
            inputWrapper.trigger('change');

            expect(wrapper.emitted()).toHaveProperty('change');

            const fileFromEvent = (wrapper.emitted().change as any)[0][0][0] as File;

            expect(fileFromEvent.name).toEqual(file.name);
            expect(fileFromEvent.type).toEqual(file.type);
        });

        it('emits with multiple files by default', () => {
            const wrapper = mount(FileInput, {
                props: {
                    multiple: true,
                    accept: ['image/jpeg'],
                },
            });
            const inputWrapper = wrapper.find('input');
            const files = [
                new File([], 'foo.jpg', { type: 'image/jpeg' }),
                new File([], 'foo2.jpg', { type: 'image/jpeg' }),
            ];

            addFilesToInput(inputWrapper.element, files);
            inputWrapper.trigger('change');

            expect(wrapper.emitted()).toHaveProperty('change');

            const firstFileFromEvent = (wrapper.emitted().change as any)[0][0][0] as File;
            const secondFileFromEvent = (wrapper.emitted().change as any)[0][0][1] as File;

            expect(firstFileFromEvent.name).toEqual(files[0].name);
            expect(firstFileFromEvent.type).toEqual(files[0].type);

            expect(secondFileFromEvent.name).toEqual(files[1].name);
            expect(secondFileFromEvent.type).toEqual(files[1].type);
        });

        it('emits only one the first file if the multiple prop is set to false', () => {
            const wrapper = mount(FileInput, {
                props: {
                    multiple: false,
                    accept: ['image/jpeg'],
                },
            });
            const inputWrapper = wrapper.find('input');
            const files = [
                new File([], 'foo.jpg', { type: 'image/jpeg' }),
                new File([], 'foo2.jpg', { type: 'image/jpeg' }),
            ];

            addFilesToInput(inputWrapper.element, files);
            inputWrapper.trigger('change');

            expect(wrapper.emitted()).toHaveProperty('change');

            const emittedFile = (wrapper.emitted().change as any)[0][0];

            expect(emittedFile).toBeInstanceOf(File);

            expect(emittedFile.name).toEqual(files[0].name);
            expect(emittedFile.type).toEqual(files[0].type);
        });

        it('emits if the first file is of accepted type and multiple is set to false', () => {
            const wrapper = mount(FileInput, {
                props: {
                    multiple: false,
                    accept: ['image/jpeg'],
                },
            });
            const inputWrapper = wrapper.find('input');
            const files = [
                new File([], 'foo.jpg', { type: 'image/jpeg' }),
                new File([], 'foo2.png', { type: 'image/png' }),
            ];

            addFilesToInput(inputWrapper.element, files);
            inputWrapper.trigger('change');

            expect(wrapper.emitted()).toHaveProperty('change');

            const emittedFile = (wrapper.emitted().change as any)[0][0];

            expect(emittedFile).toBeInstanceOf(File);

            expect(emittedFile.name).toEqual(files[0].name);
            expect(emittedFile.type).toEqual(files[0].type);
        });

        it('doesn\'t emit if one of the files is not of accepted type', () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: ['image/jpeg'],
                },
            });
            const inputWrapper = wrapper.find('input');
            const files = [
                new File([], 'foo.jpg', { type: 'image/jpeg' }),
                new File([], 'foo2.png', { type: 'image/png' }),
            ];

            addFilesToInput(inputWrapper.element, files);
            inputWrapper.trigger('change');

            expect(wrapper.emitted()).not.toHaveProperty('change');
        });

        it('doesn\'t emit if the file is not of accepted type', () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: [],
                },
            });
            const inputWrapper = wrapper.find('input');

            addFilesToInput(inputWrapper.element, [new File([], 'foo.jpg', { type: 'image/jpeg' })]);
            inputWrapper.trigger('change');

            expect(wrapper.emitted()).not.toHaveProperty('change');
        });
    });

    describe('change event on drag and drop', () => {
        it('emits when we drop a file', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: ['image/jpeg'],
                },
            });
            const file = new File([], 'foo.jpg', { type: 'image/jpeg' });
            const dataTransfer = createDataTransferClassObject([file]);

            wrapper.trigger('dragenter', {
                dataTransfer,
            });

            await nextTick();

            wrapper.trigger('drop', {
                dataTransfer,
            });

            expect(wrapper.emitted()).toHaveProperty('change');

            const fileFromEvent = (wrapper.emitted().change as any)[0][0][0] as File;

            expect(fileFromEvent.name).toEqual(file.name);
            expect(fileFromEvent.type).toEqual(file.type);
        });

        it('emits when we drop multiple files', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: ['image/jpeg'],
                },
            });
            const files = [
                new File([], 'foo.jpg', { type: 'image/jpeg' }),
                new File([], 'foo2.jpg', { type: 'image/jpeg' }),
            ];
            const dataTransfer = createDataTransferClassObject(files);

            wrapper.trigger('dragenter', {
                dataTransfer,
            });

            await nextTick();

            wrapper.trigger('drop', {
                dataTransfer,
            });

            expect(wrapper.emitted()).toHaveProperty('change');

            const firstFileFromEvent = (wrapper.emitted().change as any)[0][0][0] as File;
            const secondFileFromEvent = (wrapper.emitted().change as any)[0][0][1] as File;

            expect(firstFileFromEvent.name).toEqual(files[0].name);
            expect(firstFileFromEvent.type).toEqual(files[0].type);

            expect(secondFileFromEvent.name).toEqual(files[1].name);
            expect(secondFileFromEvent.type).toEqual(files[1].type);
        });

        it('emits a single file when we drop with multiple prop set to false', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    multiple: false,
                    accept: ['image/jpeg'],
                },
            });
            const files = [new File([], 'foo.jpg', { type: 'image/jpeg' })];
            const dataTransfer = createDataTransferClassObject(files);

            wrapper.trigger('dragenter', {
                dataTransfer,
            });

            await nextTick();

            wrapper.trigger('drop', {
                dataTransfer,
            });

            expect(wrapper.emitted()).toHaveProperty('change');

            const fileFromEvent = (wrapper.emitted().change as any)[0][0] as File;

            expect(fileFromEvent.name).toEqual(files[0].name);
            expect(fileFromEvent.type).toEqual(files[0].type);
        });

        it('doesn\'t emit when the file is invalid', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: [],
                },
            });
            const files = [new File([], 'foo.jpg', { type: 'image/jpeg' })];
            const dataTransfer = createDataTransferClassObject(files);

            wrapper.trigger('dragenter', {
                dataTransfer,
            });

            await nextTick();

            wrapper.trigger('drop', {
                dataTransfer,
            });

            expect(wrapper.emitted()).not.toHaveProperty('change');
        });

        it('doesn\'t emit when one of the file is invalid', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: ['image/jpeg'],
                },
            });
            const files = [
                new File([], 'foo.jpg', { type: 'image/jpeg' }),
                new File([], 'foo.png', { type: 'image/png' }),
            ];
            const dataTransfer = createDataTransferClassObject(files);

            wrapper.trigger('dragenter', {
                dataTransfer,
            });

            await nextTick();

            wrapper.trigger('drop', {
                dataTransfer,
            });

            expect(wrapper.emitted()).not.toHaveProperty('change');
        });

        it('doesn\'t emit when the file is invalid when the multiple prop is set to false', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: [],
                    multiple: false,
                },
            });
            const files = [new File([], 'foo.jpg', { type: 'image/jpeg' })];
            const dataTransfer = createDataTransferClassObject(files);

            wrapper.trigger('dragenter', {
                dataTransfer,
            });

            await nextTick();

            wrapper.trigger('drop', {
                dataTransfer,
            });

            expect(wrapper.emitted()).not.toHaveProperty('change');
        });
    });

    describe('shows invalid state', () => {
        it('when uploading a file via input and the file is not of accepted type', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: [],
                },
            });
            const inputWrapper = wrapper.find('input');

            addFilesToInput(inputWrapper.element, [new File([], 'foo.jpg', { type: 'image/jpeg' })]);
            inputWrapper.trigger('change');

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).toContain('ay-file-input__outer--invalid');
        });

        it('when dragging files in to the element and files are not of accepted type', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: [],
                },
            });
            wrapper.trigger('dragenter', {
                dataTransfer: createDataTransferClassObject([new File([], 'image.jpg', { type: 'image/jpeg' })]),
            });

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).toContain('ay-file-input__outer--invalid');
        });

        it('when dragging multiple files in to the element and we have multiple prop set to false', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    multiple: false,
                    accept: ['image/jpeg'],
                },
            });
            wrapper.trigger('dragenter', {
                dataTransfer: createDataTransferClassObject([
                    new File([], 'image.jpg', { type: 'image/jpeg' }),
                    new File([], 'image2.jpg', { type: 'image/jpeg' }),
                ]),
            });

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).toContain('ay-file-input__outer--invalid');
        });
    });

    describe('invalid state resets', () => {
        it('when uploading a second file that is of the correct type', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: ['image/jpeg'],
                },
            });
            const inputWrapper = wrapper.find('input');

            addFilesToInput(inputWrapper.element, [new File([], 'foo.png', { type: 'image/png' })]);
            inputWrapper.trigger('change');

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).toContain('ay-file-input__outer--invalid');

            addFilesToInput(inputWrapper.element, [new File([], 'foo.jpg', { type: 'image/jpeg' })]);
            inputWrapper.trigger('change');

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).not.toContain('ay-file-input__outer--invalid');
        });

        it('when dragging invalid file and then not dropping it', async () => {
            const wrapper = mount(FileInput, {
                props: {
                    accept: [],
                },
            });

            wrapper.trigger('dragenter', {
                dataTransfer: createDataTransferClassObject([new File([], 'image.jpg', { type: 'image/jpeg' })]),
            });

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).toContain('ay-file-input__outer--invalid');

            wrapper.trigger('dragleave');

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).not.toContain('ay-file-input__outer--invalid');
        });
    });

    describe('shows dragging state', () => {
        it('when dragging files in to the element', async () => {
            const wrapper = mount(FileInput);
            wrapper.trigger('dragenter', {
                dataTransfer: createDataTransferClassObject([new File([], 'image.jpg', { type: 'image/jpeg' })]),
            });

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).toContain('ay-file-input__outer--dragging');
        });
    });

    describe('dragging state resets', () => {
        it('when dragging files outside the element', async () => {
            const wrapper = mount(FileInput);
            const dataTransfer = createDataTransferClassObject([new File([], 'image.jpg', { type: 'image/jpeg' })]);
            wrapper.trigger('dragenter', {
                dataTransfer,
            });

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).toContain('ay-file-input__outer--dragging');

            wrapper.trigger('dragleave', {
                dataTransfer,
            });

            await nextTick();

            expect(wrapper.find('.ay-file-input__outer').classes()).not.toContain('ay-file-input__outer--dragging');
        });
    });
});
