<template>
    <div class="ay-dashboard-list">
        <div class="ay-dashboard-list__header">
            <div>
                <div class="ay-dashboard-list__header-title">{{ title }}</div>
                <div class="ay-dashboard-list__header-subtitle">
                    {{ subtitle }}
                </div>
            </div>

            <slot name="actions" />
        </div>

        <Spinner v-if="isLoading" class="ay-dashboard-list__loader" />

        <ul v-else-if="$slots.default" class="ay-dashboard-list__content">
            <slot />
        </ul>

        <div v-else class="ay-dashboard-list__empty-state-message">
            <slot name="emptyState">{{ t('dashboard-list.no-data-found') }}</slot>
        </div>
    </div>
</template>

<script lang="ts">
import './DashboardList.css';
import { defineComponent } from 'vue';

import Spinner from '../Spinner/Spinner.vue';
import useTranslation from '@/composables/useTranslation';

export default defineComponent({
    name: 'DashboardList',

    components: { Spinner },

    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
    },

    setup() {
        const { t } = useTranslation();

        return {
            t,
        };
    },
});
</script>
