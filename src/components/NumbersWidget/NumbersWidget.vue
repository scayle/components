<template>
    <div class="card simple-statistic mb-0 shadow-sm">
        <div class="card-body">
            <div class="flex items-center space-x-2">
                <div v-if="icon" class="border rounded p-1 text-dark-grey">
                    <component :is="icon" />
                </div>

                <span class="headline-15">{{ title }}</span>
            </div>

            <spinner v-if="loading" class="text-left mt-9" />

            <div v-else class="flex items-center mt-4">
                <div class="headline-26 leading-0">
                    <ValueAnimation :value="data.current" :is-price="isPrice">
                        <template #default="{ value }">
                            {{ formatValue(value) }}
                        </template>
                    </ValueAnimation>
                </div>

                <span
                    v-if="showIncrease"
                    class="badge mt-1 mis-auto"
                    :class="{ 'badge-success': !isNegative, 'badge-danger': isNegative }"
                >
                    {{ percentageIncrease }}%
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import ValueAnimation from './ValueAnimation.vue';

export default {
    name: 'NumbersWidget',
    components: { ValueAnimation },

    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            default: null,
        },
        data: {
            type: Object,
            required: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        isPrice: {
            type: Boolean,
            default: false,
        },
        currency: {
            type: String,
            default: null,
        },
        locale: {
            type: String,
            required: true,
        },
    },

    computed: {
        isNegative() {
            return this.percentageIncrease < 0;
        },

        showIncrease() {
            return !!this.data.previous && this.data.current !== this.data.previous;
        },

        percentageIncrease() {
            if (!this.showIncrease) {
                return null;
            }

            const increase = this.data.current - this.data.previous;
            const percentage = increase / this.data.previous;

            return (percentage * 100).toFixed(2);
        },
    },

    methods: {
        formatValue(value, notation = 'compact') {
            if (!value) {
                return 0;
            }

            if (this.isPrice) {
                return this.formatPrice(value / 100, this.currency, notation);
            }

            return this.formatNumber(value);
        },
        formatPrice(price, currency = '', notation = 'standard') {
            const locale = this.locale;
            const priceFormatted = price.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            if (currency === null || currency === '') {
                return priceFormatted;
            }

            try {
                return Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency,
                    currencyDisplay: 'symbol',
                    notation,
                }).format(price);
            } catch (e) {
                return priceFormatted + ' ' + currency;
            }
        },
        formatNumber(value) {
            if (value === null || value === undefined) {
                return value;
            }
            return value.toLocaleString(this.locale);
        },
    },
};
</script>
