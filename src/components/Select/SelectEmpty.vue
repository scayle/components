<template>
    <div class="ay-select__empty">
        <div class="ay-select__empty-title">{{ t('select.no-results') }}</div>
        <div class="ay-select__empty-text">{{ t('select.try-another-search-term') }}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useTranslation from '@/composables/useTranslation';

export default defineComponent({
    name: 'SelectEmpty',
    setup() {
        const { t } = useTranslation();

        return {
            t,
        };
    },
});
</script>
