import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import CurrencyBehavior from './CurrencyBehavior.vue';

describe('CurrencyBehavior.vue', () => {
    describe('CurrencyBehavior', () => {
        it('should format the value as a currency', async () => {
            const wrapper = mount(CurrencyBehavior, {
                propsData: {
                    modelValue: 123,
                    currency: 'EUR',
                },
            });

            expect(wrapper.vm.inputValue).toBe('€123.00');
        });

        it('should handle a null value', async () => {
            const wrapper = mount(CurrencyBehavior, {
                propsData: {
                    modelValue: null,
                    currency: 'EUR',
                },
            });

            expect(wrapper.vm.inputValue).toBe(null);
        });

        it('should handle a null currency', async () => {
            const wrapper = mount(CurrencyBehavior, {
                propsData: {
                    modelValue: 100.2,
                    currency: null,
                },
            });

            expect(wrapper.vm.inputValue).toBe('100.2');
        });

        it('should support an alternative locale via provide/inject', async () => {
            const wrapper = mount(CurrencyBehavior, {
                propsData: {
                    modelValue: 123.45,
                    currency: 'USD',
                },
                global: {
                    provide: {
                        locale: 'en-US',
                    },
                },
            });

            expect(wrapper.vm.inputValue).toBe('$123.45');
        });

        it('should compute the number of decimal places according to the currency', async () => {
            const wrapper = mount(CurrencyBehavior, {
                propsData: {
                    modelValue: null,
                    currency: null,
                },
            });

            expect(wrapper.vm.decimalPlaces).toBe(2);

            await wrapper.setProps({
                currency: 'ISK',
            });

            expect(wrapper.vm.decimalPlaces).toBe(0);

            await wrapper.setProps({
                currency: 'USD',
            });

            expect(wrapper.vm.decimalPlaces).toBe(2);

            await wrapper.setProps({
                currency: 'JOD',
            });

            expect(wrapper.vm.decimalPlaces).toBe(3);
        });
    });
});
