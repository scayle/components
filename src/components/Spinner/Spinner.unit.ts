import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Spinner from './Spinner.vue';

describe('Spinner.vue', () => {
    it('should change the size class based on the size prop', async () => {
        const wrapper = mount(Spinner);

        const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

        for (const size of sizes) {
            await wrapper.setProps({ size });
            expect(wrapper.element.classList.contains(`spinner-${size}`)).toBe(true);
        }
    });
});
