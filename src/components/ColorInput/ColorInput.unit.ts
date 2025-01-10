import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import ColorInput from './ColorInput.vue';

describe('CountryFlag.vue', () => {
    it('should render default view', async () => {
        const defaultColor = '#817979';
        const colorInRgb = 'rgb(129, 121, 121)';

        const wrapper = mount(ColorInput, {
            props: {
                modelValue: defaultColor,
            },
        });

        expect((wrapper.find('input').element as HTMLInputElement)?.value).toBe(defaultColor);
        // getPropertyValue only returns values in RGB, so only for testing we're using rgb as comparison value
        expect(getComputedStyle(wrapper.find('label').element).getPropertyValue('background-color')).toBe(colorInRgb);
    });
});
