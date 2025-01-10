/* eslint-disable vue/one-component-per-file */

/**
 * External dependencies.
 */
import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import sanitizeHtmlDirective from './sanitize-html';

describe('sanitize-html directive', () => {
    it('renders html values', async () => {
        const html = '<p>Some Text</p>';
        const component = defineComponent({
            directives: {
                'sanitize-html': sanitizeHtmlDirective,
            },
            data() {
                return { value: html };
            },
            template: '<div v-sanitize-html="value"></div>',
        });

        const wrapper = mount(component);

        expect(wrapper.find('div').element.innerHTML).toEqual(html);
    });

    it('renders non html values', async () => {
        const text = 'Some Text';
        const component = defineComponent({
            directives: {
                'sanitize-html': sanitizeHtmlDirective,
            },
            data() {
                return { value: text };
            },
            template: '<div v-sanitize-html="value"></div>',
        });

        const wrapper = mount(component);

        expect(wrapper.find('div').element.innerHTML).toEqual(text);
    });

    it('purifies html to avoid XSS', async () => {
        const html = '<script>alert("XSS")</script><p>SomeText</p>';
        const component = defineComponent({
            directives: {
                'sanitize-html': sanitizeHtmlDirective,
            },
            data() {
                return { value: html };
            },
            template: '<div v-sanitize-html="value"></div>',
        });

        const wrapper = mount(component);

        expect(wrapper.find('div').element.innerHTML).toEqual('<p>SomeText</p>');
    });
});
