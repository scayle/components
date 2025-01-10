<template>
    <span>
        <slot :value="formatNumber(currentValue)" />
    </span>
</template>

<script>
export default {
    name: 'ValueAnimation',

    props: {
        value: {
            type: [Number, String],
            required: true,
        },
        isPrice: {
            type: Boolean,
            default: false,
        },
        duration: {
            type: Number,
            default: 1000,
        },
        animateInitialValue: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            currentValue: 0,
        };
    },

    computed: {
        durationInSeconds() {
            return this.duration / 1000;
        },
    },

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.currentValue = Number(oldValue || (this.animateInitialValue ? 0 : newValue));

                // assume that the browser has constant 60 fps while rendering
                // if this assumption is correct, when we want to increment a number to reach 60
                // it will do so in 1 second
                // therefore we use this to decide how much we need to increment a number by, to reach it in the given duration
                const maxNumberPerSecond = 60;
                const incrementModifier = 1 / (maxNumberPerSecond * this.durationInSeconds);

                // we do not put the below variables in data
                // as we do not want them to be reactive
                this.desiredValue = Number(newValue);
                this.stepper = (this.desiredValue - this.currentValue) * incrementModifier;

                window.requestAnimationFrame(() => this.animate());
            },
            immediate: true,
        },
    },

    methods: {
        /**
         * Round up number or if it is price round it up with two decimal points
         * @param counter
         * @returns {number}
         */
        formatNumber(counter) {
            if (this.isPrice) {
                return Math.round(counter * 100) / 100;
            }

            return Math.round(counter);
        },

        animate() {
            this.currentValue = this.currentValue + this.stepper;

            // when we have a positive stepper use the lowest minimum value for presentation until desired value is reached
            // when we have a negative one use the maximum until the desired value is reacahed
            if (this.stepper > 0) {
                this.currentValue = Math.min(this.currentValue, this.desiredValue);

                if (this.currentValue >= this.desiredValue) {
                    return;
                }
            } else if (this.stepper < 0) {
                this.currentValue = Math.max(this.currentValue, this.desiredValue);

                if (this.desiredValue >= this.currentValue) {
                    return;
                }
            }

            window.requestAnimationFrame(() => this.animate());
        },
    },
};
</script>
