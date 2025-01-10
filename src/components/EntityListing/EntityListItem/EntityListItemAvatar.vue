<template>
    <div class="ay-entity-list__item-avatar-container" data-e2e="ay-list-entry-avatar">
        <div v-if="showAvatar" class="ay-entity-list__item-avatar">
            <div class="ay-entity-list__item-avatar-inner">
                <img v-if="avatarUrl" :src="avatarUrl" alt="avatar" class="ay-entity-list__item-avatar-image">

                <div v-else class="ay-entity-list__item-avatar-initials">
                    {{ avatarInitials }}
                </div>
            </div>
        </div>

        <div>
            <span class="ay-entity-list__item-avatar-title" data-e2e="ay-list-entry-title">{{ title }}</span>

            <span v-if="subtitle" class="ay-entity-list__item-avatar-subtitle">
                {{ subtitle }}
            </span>

            <Spinner v-else class="ay-entity-list__item-avatar-loader" size="sm" />
        </div>
    </div>
</template>

<script lang="ts">
/**
 * External dependencies.
 */
import { computed, toRefs, defineComponent } from 'vue';

/**
 * Internal dependencies.
 */
import Spinner from '@/components/Spinner/Spinner.vue';

export default defineComponent({
    name: 'EntityListItemAvatar',

    components: {
        Spinner,
    },

    props: {
        title: {
            type: String,
            required: true,
        },

        subtitle: {
            type: String,
            default: null,
        },

        avatarUrl: {
            type: String,
            default: null,
        },

        avatarInitials: {
            type: String,
            default: null,
        },
    },

    setup(props) {
        const { avatarUrl, avatarInitials } = toRefs(props);

        return {
            showAvatar: computed(() => avatarUrl.value || avatarInitials.value),
        };
    },
});
</script>
