/**
 * External dependencies.
 */
import { defineComponent, nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import fragmentDirective from './fragment';

describe('fragment directive', () => {
    it('renders a document fragment', async () => {
        const myFragment = new DocumentFragment();

        const p = document.createElement('p');
        p.textContent = 'Hello, world!';
        myFragment.append(p);

        const component = defineComponent({
            directives: {
                fragment: fragmentDirective,
            },
            data() {
                return { value: myFragment };
            },
            template: '<div v-fragment="value"></div>',
        });

        const wrapper = mount(component);

        expect(wrapper.find('div').element.innerHTML).toEqual('<p>Hello, world!</p>');

        const newFragment = new DocumentFragment();

        const span = document.createElement('span');
        span.textContent = 'Bye!';
        newFragment.append(span);

        // We could do this in one line with wrapper.setData({value: newFragment})
        // But setData's recursive merge breaks with DocumentFragment
        // A similar issue happened with Date objects
        // https://github.com/vuejs/test-utils/issues/1717
        wrapper.vm.value = newFragment;
        await nextTick();

        expect(wrapper.find('div').element.innerHTML).toEqual('<span>Bye!</span>');
    });
});
