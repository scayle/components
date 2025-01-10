import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import ResizeObserver from './ResizeObserver.vue';

// ResizeObserver is not supported in jsdom
// https://github.com/jsdom/jsdom/issues/3368
// TODO: Polyfill?
describe.skip('ResizeObserver.vue', () => {
    it('should fire an event on resize', async () => {
        const testComponent = defineComponent({
            components: {
                ResizeObserver,
            },
            emits: ['resize'],
            data() {
                return {
                    width: '100px',
                    observerOptions: {},
                };
            },
            methods: {
                resize(e: any) {
                    this.$emit('resize', e);
                },
            },
            template: `<ResizeObserver @resize="resize" :options="observerOptions">
                <div :style="{ width: width}"></div>
            </ResizeObserver>`,
        });

        const wrapper = mount(testComponent);

        await wrapper.setData({ width: '200px' });

        expect(wrapper.emitted()).toHaveProperty('resize');
    });
});
