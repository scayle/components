<template>
    <div class="flex w-full items-center justify-between">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <SearchInput v-model="value" class="w-auto" :placeholder="placeholder" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import SearchInput from '../SearchInput/SearchInput.vue';
import useTranslation from '@/composables/useTranslation';

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const { t } = useTranslation();

const value = computed({
    get: () => props.modelValue,
    set: newValue => emit('update:modelValue', newValue),
});

const placeholder = computed(() => {
    return t('search_in', { data: props.title });
});
</script>
