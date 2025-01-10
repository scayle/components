import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CountryFlag from './CountryFlag.vue';

describe('CountryFlag.vue', () => {
    it('should render correct flag based on 2 digit code', async () => {
        const wrapper = mount(CountryFlag, {
            props: {
                countryCode: 'de',
            },
        });

        expect(wrapper.html()).toContain('<svg');
        expect(wrapper.html()).toContain('title="DE"');
    });

    it('should render correct flag based on 2 digit uppercase code', async () => {
        const wrapper = mount(CountryFlag, {
            props: {
                countryCode: 'DE',
            },
        });

        expect(wrapper.html()).toContain('<svg');
        expect(wrapper.html()).toContain('title="DE"');
    });

    it('should render default svg when correct country code is not passed', async () => {
        const wrapper = mount(CountryFlag, {
            props: {
                countryCode: 'aa',
            },
        });

        expect(wrapper.html()).toContain('ay-country-flag--empty');
    });
});
