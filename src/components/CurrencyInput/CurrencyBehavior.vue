<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, inject } from 'vue';

import useConfig from '@/composables/useConfig';

// https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value: number, decimals: number): number {
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}

export type ComponentBindings = {
    onBlur: (_: FocusEvent) => void;
    onFocus: (_: FocusEvent) => void;

    modelValue: string | null;
    'onUpdate:modelValue': (_: string) => void;

    type: 'number' | 'text';
};

export type NativeBindings = {
    onBlur: (_: FocusEvent) => void;
    onFocus: (_: FocusEvent) => void;

    value: string | null;
    'onUpdate:value': (_: string) => void;

    type: 'number' | 'text';
};

export default defineComponent({
    name: 'CurrencyBehavior',
    props: {
        modelValue: {
            type: Number as PropType<number | null>,
            default: 0,
        },
        currency: {
            type: String as PropType<string | null>,
            default: '',
        },
        round: {
            type: Boolean,
            default: false,
        },
        minorUnit: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        ['update:modelValue'](_payload: number) {
            return true;
        },
        ['focus'](_payload: FocusEvent) {
            return true;
        },
        ['blur'](_payload: FocusEvent) {
            return true;
        },
    },
    setup() {
        const config = useConfig();
        return {
            locale: inject<string>('locale', config.locale),
        };
    },
    data() {
        return {
            isActive: false,
        };
    },
    computed: {
        normalValue(): number | null {
            return this.minorUnit && this.modelValue !== null
                ? this.modelValue / 10 ** this.decimalPlaces
                : this.modelValue;
        },
        inputValue(): string | null {
            if (this.normalValue === null) {
                return null;
            }

            if (this.isActive) {
                return this.normalValue + '';
            } else {
                try {
                    return new Intl.NumberFormat(this.locale, {
                        style: 'currency',
                        currency: this.currency as string,
                        currencyDisplay: 'symbol',
                    }).format(this.normalValue);
                } catch {
                    return this.normalValue + '';
                }
            }
        },
        decimalPlaces() {
            if (!this.currency) {
                return 2;
            }

            const parts = new Intl.NumberFormat(this.locale, {
                style: 'currency',
                currency: this.currency,
            }).formatToParts(0);

            const fraction = parts.find(p => p.type === 'fraction');

            if (!fraction) {
                return 0;
            }

            return fraction.value.length;
        },
        nativeBindings() {
            return {
                onBlur: (e: FocusEvent) => this.blur(e),
                onFocus: (e: FocusEvent) => this.focus(e),

                // Normal inputs
                value: this.inputValue,
                onInput: (e: InputEvent) => {
                    if (e.target instanceof HTMLInputElement) {
                        this.inputChange(e.target.value);
                    }
                },

                type: this.isActive ? 'number' : 'text',
            };
        },

        componentBindings(): ComponentBindings {
            return {
                onBlur: (e: FocusEvent) => this.blur(e),
                onFocus: (e: FocusEvent) => this.focus(e),

                // Custom components
                modelValue: this.inputValue,
                'onUpdate:modelValue': (e: string) => {
                    this.inputChange(e);
                },

                type: this.isActive ? 'number' : 'text',
            };
        },
    },
    methods: {
        focus(e: FocusEvent) {
            this.isActive = true;

            this.$nextTick(() => {
                const el = this.$el?.nextElementSibling;
                if (el instanceof HTMLInputElement) {
                    el.select();
                } else {
                    this.$el?.nextElementSibling.querySelector('input')?.select();
                }
            });

            this.$emit('focus', e);
        },
        blur(e: FocusEvent) {
            this.isActive = false;
            this.$emit('blur', e);
        },
        inputChange(e: string) {
            if (e === this.inputValue) {
                return;
            }

            const val = parseFloat(e);
            let adjustedValue: number;

            if (this.minorUnit) {
                adjustedValue = round(this.minorUnit ? val * 10 ** this.decimalPlaces : val, 0);
            } else if (this.round) {
                adjustedValue = this.round ? round(val, this.decimalPlaces) : val;
            } else {
                adjustedValue = val;
            }

            if (!isNaN(adjustedValue)) {
                this.$emit('update:modelValue', adjustedValue);
            }
        },
    },
    render() {
        return this.$slots.default?.({
            nativeBindings: this.nativeBindings,
            componentBindings: this.componentBindings,
        });
    },
});
</script>
