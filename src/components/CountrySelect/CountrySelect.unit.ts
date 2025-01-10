import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CountrySelect from './CountrySelect.vue';

const selector = 'body > .ay-popper__tooltip .ay-select__listbox';
describe('CountrySelect.vue', () => {
    it('should render correct options', async () => {
        await mount(CountrySelect, {
            props: {
                countries: ['DE', 'US', 'BG', 'RM'],
            },
            attachTo: document.body,
        });

        const elementMovedOutsideOfWrapper = document.querySelector(selector) as HTMLDivElement;
        expect(elementMovedOutsideOfWrapper.innerHTML).toContain('ay-country-flag');
        expect(elementMovedOutsideOfWrapper.innerHTML).toContain('title="DE"');
        expect(elementMovedOutsideOfWrapper.innerHTML).toContain('Germany');
    });

    it('should render correct language', async () => {
        mount(CountrySelect, {
            props: {
                countries: ['DE', 'US', 'BG', 'RM'],
                languageTag: 'de',
            },
        });

        const elementMovedOutsideOfWrapper = document.querySelector(selector) as HTMLDivElement;
        expect(elementMovedOutsideOfWrapper.innerHTML).toContain('ay-country-flag');
        expect(elementMovedOutsideOfWrapper.innerHTML).toContain('title="DE"');
        expect(elementMovedOutsideOfWrapper.innerHTML).toContain('Germany');
    });

    it('should display correct selected country', async () => {
        const wrapper = await mount(CountrySelect, {
            props: {
                countries: ['DE', 'US', 'BG', 'RM'],
                modelValue: 'DE',
            },
        });

        expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('Germany');
    });

    it('should display correct selected country with non-default translation', async () => {
        const wrapper = await mount(CountrySelect, {
            props: {
                countries: ['DE', 'US', 'BG', 'RM'],
                modelValue: 'DE',
                languageTag: 'de',
            },
        });

        expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe('Deutschland');
    });
});
