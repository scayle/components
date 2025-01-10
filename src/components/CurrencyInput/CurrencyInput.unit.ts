import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import CurrencyInput from './CurrencyInput.vue';

describe('CurrencyInput.vue', () => {
    describe('CurrencyInput', () => {
        it('should format the value as a currency', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: 123,
                    currency: 'EUR',
                },
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('€123.00');
        });

        it('should handle a null value', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: null,
                    currency: 'EUR',
                },
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('');
        });

        it('should handle a null currency', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: 100.2,
                    currency: null,
                },
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('100.2');
        });

        it('should support an alternative locale via provide/inject', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: 123.45,
                    currency: 'EUR',
                },
                provide() {
                    return {
                        locale: 'de-DE',
                    };
                },
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('123,45 €');
        });

        it('should show the numeric value when focused', async () => {
            const div = document.createElement('div');
            document.body.appendChild(div);

            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: 123.45,
                    currency: 'EUR',
                },
                attachTo: div, // So focus() works
            });

            await wrapper.find('input')?.trigger('focus');

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('123.45');

            wrapper.unmount();
        });

        it('should emit the input as a number', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: null,
                    currency: 'EUR',
                },
            });

            const input = wrapper.find('input');
            input.element.value = '10.99';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue'][0]).toEqual([10.99]);
        });

        it('should ignore invalid values', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: null,
                    currency: 'EUR',
                },
            });

            const input = wrapper.find('input');

            input.element.value = 'asdf';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue']).toEqual(undefined);
        });

        it('should round the emitted value according to the currency', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: null,
                    currency: 'EUR',
                    round: true,
                },
            });

            const input = wrapper.find('input');
            input.element.value = '10.123';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue'][0]).toEqual([10.12]);

            await wrapper.setProps({
                modelValue: null,
                currency: 'ISK',
                round: true,
            });

            input.element.value = '10.123';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue'][1]).toEqual([10]);

            await wrapper.setProps({
                modelValue: null,
                currency: 'JOD',
                round: true,
            });

            input.element.value = '10.123';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue'][2]).toEqual([10.123]);
        });

        it('should accept a value in cents and format it properly', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: 123,
                    currency: 'EUR',
                    minorUnit: true,
                },
                global: {
                    provide: {
                        locale: 'en-US',
                    },
                },
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('€1.23');

            await wrapper.setProps({
                modelValue: 123,
                currency: 'ISK',
                minorUnit: true,
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('ISK 123');

            await wrapper.setProps({
                modelValue: 123,
                currency: 'USD',
                minorUnit: true,
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('$1.23');

            await wrapper.setProps({
                modelValue: 123,
                currency: 'JOD',
                minorUnit: true,
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('JOD 0.123');

            await wrapper.setProps({
                modelValue: null,
                currency: 'USD',
                minorUnit: true,
            });

            expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('');
        });

        it('should emit a value in cents', async () => {
            const wrapper = mount(CurrencyInput, {
                propsData: {
                    modelValue: null,
                    currency: 'EUR',
                    minorUnit: true,
                },
            });

            const input = wrapper.find('input');
            input.element.value = '10.123';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue'][0]).toEqual([1012]);

            await wrapper.setProps({
                modelValue: null,
                currency: 'ISK',
                minorUnit: true,
            });

            input.element.value = '10.123';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue'][1]).toEqual([10]);

            await wrapper.setProps({
                modelValue: null,
                currency: 'JOD',
                minorUnit: true,
            });

            input.element.value = '10.123';
            await input.trigger('input');

            expect(wrapper.emitted()['update:modelValue'][2]).toEqual([10123]);
        });
    });
});
