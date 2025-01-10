import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import InfoBanner from './InfoBanner.vue';

describe('InfoBanner.vue', () => {
    it('should display title and subtitle', async () => {
        const title = 'Testing title';
        const subtitle = 'Testing subtitle';

        const wrapper = await mount(InfoBanner, {
            props: {
                title,
                subtitle,
            },
        });

        expect(wrapper.html()).toContain(`<div class="title">${title}</div>`);
        expect(wrapper.html()).toContain(`<div class="subtitle">${subtitle}</div>`);
    });

    it('should show a button in case the prop buttonText was provided', async () => {
        const title = 'Testing title';
        const subtitle = 'Testing subtitle';
        const buttonText = 'Button test';

        const wrapper = await mount(InfoBanner, {
            props: {
                title,
                subtitle,
                buttonText,
            },
        });

        expect(wrapper.html()).toContain(
            `<div class="action"><button class="btn" type="button">${buttonText}</button></div>`
        );
    });
});
