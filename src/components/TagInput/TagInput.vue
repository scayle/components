<template>
    <div :class="typeClass" class="ay-tag-input" @click="focus">
        <transition-group
            v-if="visibleTags.length > 0"
            :class="{ 'ay-tag-input__tags-wrapper--disabled': disabled, 'bg-white': !disabled }"
            class="ay-tag-input__tags-wrapper"
            name="ay-tag-fade"
            tag="div"
        >
            <Tag
                v-for="tag in visibleTags"
                :key="tag"
                :closable="!disabled"
                :type="tagType"
                size="small"
                @close.prevent.stop="removeTag(tag)"
            >
                {{ tag }}
            </Tag>
            <Tag
                v-if="modelValue.length > tagsVisibilityLimit"
                key="less-more"
                :type="tagType"
                size="small"
                @click="toggleShowMore"
            >
                <span>
                    {{
                        `${modelValue.length - tagsVisibilityLimit} ` +
                        (limitTagVisibility ? t('tag-input.more') : t('tag-input.fewer'))
                    }}
                </span>
            </Tag>
        </transition-group>
        <Input
            v-if="!isInputDisabled"
            ref="tagsInput"
            :model-value="inputText"
            :placeholder="placeholderText"
            class="ay-tag-input__text-input"
            @blur="inputBlur"
            @change="inputChanged"
            @focus="$emit('focus')"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, type PropType } from 'vue';

import Tag from '../Tag/Tag.vue';
import useTranslation from '@/composables/useTranslation';

import Input from '@/components/Input/Input.vue';

import './TagInput.css';

export default defineComponent({
    name: 'TagInput',
    components: {
        /* eslint-disable */
        Input,
        Tag,
    },
    props: {
        modelValue: {
            // TODO: Support number[]?
            type: Array as PropType<string[]>,
            default: () => [],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: null,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        tagType: {
            type: String as PropType<'info' | 'warning' | 'danger' | 'success' | null>,
            default: null,
        },
        limit: {
            type: Number,
            default: 0,
        },
    },

    emits: {
        'update:modelValue'(_payload: string[]) {
            return true;
        },

        change(_payload: string[]) {
            return true;
        },

        blur() {
            return true;
        },

        focus() {
            return true;
        },

        removedTag(_tag: string) {
            return true;
        },
    },

    setup(props) {
        const { t } = useTranslation();
        const { placeholder } = toRefs(props);

        const placeholderText = computed(() => placeholder.value ?? t('tag-input.enter-or-paste-ids'));

        return {
            t,
            placeholderText,
        };
    },

    data() {
        return {
            inputText: '',
            tagsVisibilityLimit: 15,
            limitTagVisibility: true,
        };
    },

    computed: {
        visibleTags() {
            if (this.limitTagVisibility && this.modelValue?.slice) {
                return this.modelValue.slice(0, this.tagsVisibilityLimit);
            } else {
                return this.modelValue;
            }
        },

        isInputDisabled() {
            return this.disabled || (this.limit > 0 && this.modelValue.length >= this.limit);
        },

        typeClass() {
            if (!this.tagType) {
                return 'ay-tag-input--default';
            }

            return {
                info: 'ay-tag-input--info',
                warning: 'ay-tag-input--warning',
                success: 'ay-tag-input--success',
                danger: 'ay-tag-input--danger',
            }[this.tagType];
        },
    },

    methods: {
        inputChanged(e: Event) {
            const newValue = (e.target as HTMLInputElement)?.value;
            const text = newValue.replace(/[ |,\s]+/g, ' ');

            const addedTags = text
                .trim()
                .split(' ')
                .filter(t => !!t)
                .map(el => el.toLowerCase());

            if (!addedTags.length) {
                return;
            }

            this.emitChange(Array.from(new Set([...this.modelValue, ...addedTags])));

            this.inputText = '';

            // TODO: This shouldn't be necessary, but it is
            // @ts-ignore
            const inputEl = this.$refs.tagsInput?.$el?.querySelector('input');
            if (inputEl) {
                inputEl.value = '';
            }
        },

        emitChange(newVal: string[]) {
            this.$emit('update:modelValue', newVal);
            this.$emit('change', newVal);
        },

        removeTag(tag: string) {
            const index = this.modelValue.indexOf(tag);

            if (index !== -1) {
                this.emitChange([...this.modelValue.slice(0, index), ...this.modelValue.slice(index + 1)]);
            }

            this.$emit('removedTag', tag);
        },

        toggleShowMore() {
            this.limitTagVisibility = !this.limitTagVisibility;
        },

        inputBlur() {
            this.$emit('blur');
        },

        focus() {
            if (this.$refs.tagsInput) {
                // @ts-ignore
                this.$refs.tagsInput.$el?.querySelector('input')?.focus();
            }
        },
    },
});
</script>
