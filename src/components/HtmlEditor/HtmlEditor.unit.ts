/**
 * External dependencies.
 */
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import HtmlEditor from './HtmlEditor.vue';

describe('HtmlEditor.vue', () => {
    it('renders text tab by default', () => {
        const wrapper = mount(HtmlEditor);

        expect(wrapper.find('.ay-html-editor__text').exists()).toBeTruthy();
        expect(wrapper.find('.ay-html-editor__preview').exists()).toBeFalsy();
    });

    it('renders preview tab if changed by a prop', () => {
        const wrapper = mount(HtmlEditor, {
            props: {
                selectedTab: 'preview',
            },
        });

        expect(wrapper.find('.ay-html-editor__text').exists()).toBeFalsy();
        expect(wrapper.find('.ay-html-editor__preview').exists()).toBeTruthy();
    });

    it('has the necessary buttons on text mode are visible', () => {
        const wrapper = mount(HtmlEditor);
        const actionsWrapper = wrapper.find('.ay-html-editor__actions');

        expect(actionsWrapper.exists()).toBeTruthy();
        expect(actionsWrapper.findAll('.ay-html-editor__button').length).toEqual(3);
    });

    it('has textarea visible on text mode', () => {
        const wrapper = mount(HtmlEditor);

        expect(wrapper.find('.ay-html-editor__text textarea').exists()).toBeTruthy();
    });

    it('emits events when textarea is changed', () => {
        const wrapper = mount(HtmlEditor);
        const textareaValue = 'Hey there!';

        wrapper.find('textarea').setValue('Hey there!');

        expect(wrapper.emitted()).toHaveProperty('input');
        expect(wrapper.emitted().input[0]).toEqual([textareaValue]);

        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([textareaValue]);
    });

    it('emits an event when tab is clicked', async () => {
        const wrapper = mount(HtmlEditor);

        await nextTick();

        wrapper.findAll('.ay-tabs__tab')[1].trigger('click');

        expect(wrapper.emitted()).toHaveProperty('tab-click');
        expect(wrapper.emitted()['tab-click'][0]).toEqual(['preview']);
    });

    it('doesn\'t disable the buttons and textarea if the disabled prop is not set', () => {
        const wrapper = mount(HtmlEditor);

        expect(wrapper.find('textarea').attributes()).not.toHaveProperty('disabled');
        wrapper
            .findAll('ay-html-editor__button')
            .forEach(button => expect(button.attributes()).not.toHaveProperty('disabled'));
    });

    it('disables the buttons and textarea if the disabled prop is set', () => {
        const wrapper = mount(HtmlEditor, {
            props: {
                disabled: true,
            },
        });

        expect(wrapper.find('textarea').attributes()).toHaveProperty('disabled');
        wrapper
            .findAll('ay-html-editor__button')
            .forEach(button => expect(button.attributes()).toHaveProperty('disabled'));
    });

    it.each([
        ['.ay-html-editor__button:first-child', 'p'],
        ['.ay-html-editor__button:nth-child(2)', 'b'],
        ['.ay-html-editor__button:last-child', 'i'],
    ])('emits events when one of the wrap buttons is called', (buttonSelector, tag) => {
        const textareaValue = 'Hey there!';
        const wrapper = mount(HtmlEditor, {
            props: {
                modelValue: textareaValue,
            },
        });
        const textAreaWrapper = wrapper.find('textarea');
        const buttonWrapper = wrapper.find(buttonSelector);

        textAreaWrapper.element.setSelectionRange(0, textareaValue.length);

        buttonWrapper.trigger('click');

        expect(wrapper.emitted()).toHaveProperty('input');
        expect(wrapper.emitted().input[0]).toEqual([`<${tag}>${textareaValue}</${tag}>`]);
        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([`<${tag}>${textareaValue}</${tag}>`]);
    });

    it('preview has the same content as in text', () => {
        const html = '<b>Hello I love it here</b>';
        const wrapper = mount(HtmlEditor, {
            props: {
                modelValue: html,
                selectedTab: 'preview',
            },
        });
        const previewWrapper = wrapper.find('.ay-html-editor__preview > div');

        expect(previewWrapper.element.innerHTML).toEqual(html);
    });

    it('passes validation if selected tab is from the expected ones', () => {
        const validator = HtmlEditor.props.selectedTab.validator;

        expect(validator('text')).toBeTruthy();
        expect(validator('preview')).toBeTruthy();
    });

    it('fails validation if selected tab is not from the expected ones', () => {
        const validator = HtmlEditor.props.selectedTab.validator;

        expect(validator('something-else')).toBeFalsy();
    });

    it('converts the line breaks to <br> for preview tab mode', () => {
        const html = `<b>Hello I love it here</b>

Will this add two br's?`;
        const wrapper = mount(HtmlEditor, {
            props: {
                modelValue: html,
                selectedTab: 'preview',
            },
        });
        const previewWrapper = wrapper.find('.ay-html-editor__preview > div');

        expect(previewWrapper.element.innerHTML).toEqual('<b>Hello I love it here</b><br><br>Will this add two br\'s?');
    });
});
