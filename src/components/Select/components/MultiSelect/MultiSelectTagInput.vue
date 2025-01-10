<template>
    <div ref="container" class="ay-multiselect__tags" :class="{ disabled: disabled }" @click="onClick">
        <div class="ay-multiselect__tags-wrapper">
            <input
                :class="{ hidden: hasTags, disabled: disabled }"
                :placeholder="placeholderText"
                class="ay-multiselect__tags-placeholder"
                readonly
            >

            <Tag
                v-for="tag in visibleTags"
                :key="tagToKey(tag)"
                :closable="clearable"
                :disabled="disabled"
                @close.prevent.stop="$emit('remove-tag', tag)"
            >
                {{ getLabel(tag) }}
            </Tag>

            <Tag v-if="tags.length > maxTagsLimited" class="ay-multiselect__tags-more" size="small">
                <span> +{{ tags.length - maxTagsLimited }} </span>
            </Tag>
        </div>

        <div v-if="!disabled" class="ay-multiselect__tags-actions">
            <IconPanelChevronDown
                :class="{
                    'ay-select__chevron-icon--open': isOpen,
                }"
                class="ay-select__chevron-icon"
            />
        </div>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { computed, defineComponent, toRefs } from 'vue';

/**
 * Internal dependencies.
 */
import Tag from '@/components/Tag/Tag.vue';
import useTranslation from '@/composables/useTranslation';
import useSelectFocusFixer from '@/components/Select/composables/useSelectFocusFixer';

export default defineComponent({
    name: 'MultiSelectTagInput',

    components: { Tag },

    props: {
        tags: {
            type: Array,
            required: true,
        },

        placeholder: {
            type: String,
            default: '',
        },

        clearable: {
            type: Boolean,
            default: false,
        },

        getLabel: {
            type: Function,
            default: (tag: any) => tag,
        },

        isOpen: {
            type: Boolean,
            default: false,
        },

        maxTags: {
            type: Number,
            default: 2,
        },

        disabled: {
            type: Boolean,
            default: false,
        },
    },

    emits: {
        click(_event: Event) {
            return true;
        },

        clear() {
            return true;
        },

        ['remove-tag'](_tag: any) {
            return true;
        },
    },

    setup(props) {
        const { t } = useTranslation();
        const { onClick } = useSelectFocusFixer();
        const { tags, placeholder, maxTags } = toRefs(props);

        const maxTagsLimited = computed(() => Math.max(1, maxTags.value));
        const hasTags = computed(() => tags.value.length);
        const visibleTags = computed(() => tags.value.slice(0, maxTagsLimited.value));
        const placeholderText = computed(() => placeholder.value ?? t('select.input-placeholder'));

        const tagToKey = (value: unknown) => value?.toString();

        return {
            hasTags,
            onClick,
            tagToKey,
            visibleTags,
            maxTagsLimited,
            placeholderText,
        };
    },
});
</script>
