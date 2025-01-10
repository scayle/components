/**
 * External dependencies.
 */
import { action } from '@storybook/addon-actions';

/**
 * Internal dependencies.
 */
import FileInput from './FileInput.vue';

export default {
    title: 'Components/FileInput',
    component: FileInput,
    excludeStories: /.*Data$/,
    argTypes: {
        multiple: {
            description: 'To define whether the input accepts multiple files',
        },

        accept: {
            description:
                'A string array with file extensions to accept (without dot). If no array is passed, every file is accepted. For example `["png", "svg"]`',
        },
    },
};

const fileToObjectForRepresentation = (file: File) => {
    const fileObject = {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
    };
    (fileObject as any).__proto__ = File.prototype;

    return fileObject;
};

const Template = (args: any) => ({
    components: { FileInput },

    setup() {
        args.change = (fileOrFiles: File | File[]) => {
            if (Array.isArray(fileOrFiles)) {
                action('change')(fileOrFiles.map(fileToObjectForRepresentation));
            } else {
                action('change')(fileToObjectForRepresentation(fileOrFiles));
            }
        };
        return {
            args,
        };
    },
    template: '<FileInput v-bind="args" v-on="args" />',
});

export const Default = Template.bind({});

export const AcceptingOnlyJpegs = Template.bind({});
AcceptingOnlyJpegs.args = {
    accept: ['image/jpeg', 'image/jpg'],
};

export const WithoutMultipleFiles = Template.bind({});
WithoutMultipleFiles.args = {
    multiple: false,
};
