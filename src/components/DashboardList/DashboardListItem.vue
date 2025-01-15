<template>
    <li class="ay-dashboard-list-item">
        <div class="ay-dashboard-list-item__avatar avatar-sm">
            <div class="ay-dashboard-list-item__avatar-initials" :style="avatarStyles">
                {{ initials }}
            </div>
        </div>

        <span class="ay-dashboard-list-item__label" :title="label">{{ label }}</span>
        <span>{{ value }}</span>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import createColor from 'color';

import './DashboardListItem.css';

export default defineComponent({
    name: 'DashboardListItem',

    props: {
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        initials: {
            type: String,
            default: '',
        },
        color: {
            type: [String, null],
            default: '',
        },
    },

    computed: {
        avatarStyles() {
            if (!this.color) {
                return;
            }

            return {
                background: createColor(this.color).string(),
            };
        },
    },
});
</script>
