<template>
    <Tabs :selected-tab="selectedTab" class="ay-html-editor" @click="tabClick">
        <Tab class="ay-html-editor__text" label="Text" name="text">
            <div class="ay-html-editor__actions">
                <button :disabled="disabled" class="ay-html-editor__button" @click="wrapTag('p')">
                    <IconPanelTextParagraph class="icon icon-xs fill-current" />
                </button>
                <button :disabled="disabled" class="ay-html-editor__button" @click="wrapTag('b')">
                    <IconPanelTextBold class="icon icon-xs fill-current" />
                </button>
                <button :disabled="disabled" class="ay-html-editor__button" @click="wrapTag('i')">
                    <IconPanelTextItalic class="icon icon-xs fill-current" />
                </button>
            </div>

            <textarea ref="textAreaEl" :disabled="disabled" :value="modelValue" v-bind="$attrs" @input="onInput" />
        </Tab>

        <Tab class="ay-html-editor__preview" label="Preview" name="preview">
            <div v-sanitize-html="modelValueFormattedForPreview" />
        </Tab>
    </Tabs>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import type { Ref, PropType } from 'vue';
import { ref, computed, toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import './HtmlEditor.css';
import Tab from '@/components/Tabs/Tab.vue';
import Tabs from '@/components/Tabs/Tabs.vue';
import sanitizeHtmlDirective from '@/directives/sanitize-html';

export default defineComponent({
    name: 'HtmlEditor',

    directives: {
        'sanitize-html': sanitizeHtmlDirective,
    },

    components: {
        Tab,
        Tabs,
    },

    inheritAttrs: false,

    props: {
        /**
         * The value to edit with the textarea element or to show it as a preview.
         */
        modelValue: {
            type: String,
            default: '',
        },

        /**
         * Set the selected tab. Either 'text' or 'preview'.
         */
        selectedTab: {
            type: String as PropType<'text' | 'preview'>,
            default: 'text',
            validator: (value: string) => ['text', 'preview'].includes(value),
        },

        /**
         * Disable the editor.
         */
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    emits: {
        input(_value: string) {
            return true;
        },

        ['update:modelValue'](_value: string) {
            return true;
        },

        ['tab-click'](_tabName: string) {
            return true;
        },
    },

    setup(props, { emit }) {
        const { modelValue } = toRefs(props);
        const textAreaEl: Ref<HTMLTextAreaElement | null> = ref(null);
        const tabClick = (name: string) => emit('tab-click', name);
        const wrapTag = (tag: string) => {
            if (!textAreaEl.value) {
                return;
            }

            const start = textAreaEl.value.selectionStart;
            const end = textAreaEl.value.selectionEnd;
            const selection = textAreaEl.value.value.substring(start, end);
            const replacement = `<${tag}>${selection}</${tag}>`;
            const textAreaValue =
                textAreaEl.value.value.substring(0, start) + replacement + textAreaEl.value.value.substring(end);

            emit('input', textAreaValue);
            emit('update:modelValue', textAreaValue);
        };
        const onInput = (event: Event) => {
            const textAreaValue = (event.target as HTMLTextAreaElement).value;

            emit('input', textAreaValue);
            emit('update:modelValue', textAreaValue);
        };
        const modelValueFormattedForPreview = computed(() => modelValue.value.replace(/\n/g, '<br>'));

        return {
            onInput,
            tabClick,
            wrapTag,
            textAreaEl,
            modelValueFormattedForPreview,
        };
    },
});
</script>
