<template>
    <div class="info-banner card">
        <div class="card-body flex">
            <div class="icon-wrapper">
                <div class="icon-wrapper-lvl1" :class="type">
                    <div class="icon-wrapper-lvl2" :class="type">
                        <IconPanelCheckmark v-if="type === 'success'" class="icon-sm icon-svg icon" />
                        <IconPanelWarningFill
                            v-else-if="['warning', 'danger'].includes(type)"
                            class="icon-sm icon-svg icon"
                        />
                        <IconPanelInfoFill v-else class="icon-sm icon-svg icon" />
                    </div>
                </div>
            </div>

            <div class="text flex grow flex-col justify-center">
                <div class="title">
                    <slot name="title">
                        {{ title }}
                    </slot>
                </div>

                <slot name="subtitle">
                    <div v-if="subtitle" class="subtitle">
                        {{ subtitle }}
                    </div>
                </slot>
            </div>

            <div v-if="buttonText" class="action">
                <button class="btn" type="button" @click="$emit('buttonClick')">
                    {{ buttonText }}
                </button>
            </div>

            <div v-if="dateString" class="self-center text-dark-grey">
                {{ dateString }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import './InfoBanner.css';
import type { PropType } from 'vue';

type InfoBannerType = 'default' | 'warning' | 'danger' | 'info' | 'success';

defineProps({
    type: {
        type: String as PropType<InfoBannerType>,
        default: 'default' as InfoBannerType,
    },
    title: {
        type: String,
        default: '',
    },
    subtitle: {
        type: String,
        default: '',
    },
    buttonText: {
        type: String,
        default: '',
    },
    dateString: {
        type: String,
        default: '',
    },
});

defineEmits(['buttonClick']);
</script>
