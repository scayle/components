<template>
    <div class="card min-h-[290px]">
        <div class="card-header flex items-center py-5 px-4 border-0">
            <div v-if="icon" class="border rounded p-1 text-dark-grey mr-2">
                <component :is="icon" />
            </div>

            <h4>{{ title }}</h4>

            <Select v-if="filterOptions.length" v-model="activeFilter" class="ml-auto w-24">
                <Option
                    v-for="option in filterOptions"
                    :key="option.name"
                    :value="option.name"
                    :label="option.name"
                    :hint="option.hint"
                />
            </Select>
        </div>

        <div class="card-body p-0" :class="{ 'flex items-center justify-center': loading }">
            <Spinner v-if="loading" />

            <div v-else class="max-h-80 overflow-y-auto">
                <div
                    v-for="(element, index) in data"
                    :key="index"
                    class="flex px-4 py-1"
                    :class="[rowIcon ? 'items-start' : 'items-center']"
                >
                    <component
                        :is="element.url ? 'a' : 'div'"
                        :href="element.url"
                        rel="noopener"
                        target="_blank"
                        class="flex justify-center items-center mie-2 overflow-hidden"
                    >
                        <component :is="rowIcon" v-if="rowIcon" class="text-dark-grey" />
                        <img
                            v-else-if="element.image_url"
                            :src="element.image_url"
                            class="w-10 h-14 border rounded object-contain"
                            alt=""
                        >
                    </component>

                    <div class="flex overflow-hidden flex-col grow">
                        <div class="headline-15 inline-flex font-bold">
                            <span class="shrink truncate">{{ element.name }}</span>
                            <ValueAnimation class="mis-auto text-right" :value="element.count">
                                <template #default="{ value }">
                                    {{ formatNumber(value) + computedUnit }}
                                </template>
                            </ValueAnimation>
                        </div>

                        <div v-if="element.brand || element.color">
                            <span v-if="element.brand" class="badge badge-secondary mr-1">{{ element.brand }}</span>
                            <span class="badge badge-secondary">{{ element.color }}</span>
                        </div>
                    </div>
                </div>

                <EmptyState v-if="data.length === 0" :icon="icon" :text-title="emptyText" :text-hint="emptyHint" />
            </div>
        </div>
    </div>
</template>

<script>
import Select from '../../Select/Select.vue';
import Option from '../../Select/components/Option/Option.vue';
import Spinner from '../../Spinner/Spinner.vue';
import EmptyState from '../../EmptyState/EmptyState.vue';
import ValueAnimation from '../../NumbersWidget/ValueAnimation.vue';
import useConfig from '@/composables/useConfig';

export default {
    name: 'StatisticsTable',

    components: {
        /* eslint-disable */
        Select,
        /* eslint-disable */
        Option,
        Spinner,
        ValueAnimation,
        EmptyState,
    },

    props: {
        data: {
            type: Array,
            required: true,
        },
        filterOptions: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            required: true,
        },
        icon: null,
        rowIcon: null,
        unit: {
            type: String,
            default: '',
        },
        emptyText: {
            type: String,
            default: '',
        },
        emptyHint: {
            type: String,
            default: '',
        },
        initialFilter: {
            type: String,
            default: '',
        },
    },

    emits: ['selectFilter'],

    data() {
        return {
            activeFilter: this.initialFilter,
        };
    },

    computed: {
        computedUnit() {
            return this.unit.length ? ` ${this.unit}` : '';
        },
    },

    watch: {
        activeFilter(newFilter) {
            this.$emit('selectFilter', newFilter);
        },
    },

    methods: {
        formatNumber(value) {
            if (value === null || value === undefined) {
                return value;
            }

            const config = useConfig();
            return value.toLocaleString(config.locale);
        },
    },
};
</script>
