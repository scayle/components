/**
 * External dependencies.
 */
import merge from 'lodash.merge';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

/**
 * Internal dependencies.
 */
import MultiSelectTagInput from './MultiSelectTagInput.vue';
import type { ComponentMountingOptions } from '@/test-utils';
import { fc, itProp } from '@/fast-check-utils';

type TagInputType = InstanceType<typeof MultiSelectTagInput>;

const mountTagInput = (options: ComponentMountingOptions<TagInputType> = {}): VueWrapper<TagInputType, any> => {
    const defaultOptions = {
        props: {
            tags: [],
        },
    };

    return mount(MultiSelectTagInput as any, merge(defaultOptions, options) as any);
};

describe('MultiSelectTagInput.vue', () => {
    it('shows input placeholder when we do not have tags', () => {
        const wrapper = mountTagInput();

        expect(wrapper.find('.ay-multiselect__tags-placeholder').classes()).not.toContain('hidden');
        expect(wrapper.find('.ay-tag').exists()).toBeFalsy();
    });

    it('shows disabled state when disabled', () => {
        const wrapper = mountTagInput({ props: { disabled: true } });

        expect(wrapper.find('.ay-multiselect__tags-placeholder').classes()).toContain('disabled');
        expect(wrapper.find('.ay-tag').exists()).toBeFalsy();
    });

    it('hides input placeholder when we do have tags', () => {
        const wrapper = mountTagInput({ props: { tags: ['Name 1'] } });

        expect(wrapper.find('.ay-tag').exists()).toBeTruthy();
        expect(wrapper.find('.ay-multiselect__tags-placeholder').classes()).toContain('hidden');
    });

    describe('has isOpen prop', () => {
        it('that does not add extra class to chevron down icon if set to false', () => {
            const wrapper = mountTagInput({ props: { isOpen: false } });

            expect(wrapper.find('.ay-select__chevron-icon').classes()).not.toContain('ay-select__chevron-icon--open');
        });

        it('that adds extra class to chevron down icon if set to true', () => {
            const wrapper = mountTagInput({ props: { isOpen: true } });

            expect(wrapper.find('.ay-select__chevron-icon').classes()).toContain('ay-select__chevron-icon--open');
        });
    });

    describe('has getLabel prop', () => {
        it('that changes how tags are displayed', () => {
            const wrapper = mountTagInput({
                props: { getLabel: (tag: string) => `Testing - ${tag}`, tags: ['Test 1', 'Test 2'] },
            });

            const tagTexts = wrapper.findAll('.ay-tag:not(.ay-multiselect__tags-more)').map(tag => tag.text());

            expect(tagTexts[0]).toEqual('Testing - Test 1');
            expect(tagTexts[1]).toEqual('Testing - Test 2');
        });
    });

    describe('has maxTags prop', () => {
        it('that display short more tag element when we exceed limit', () => {
            const wrapper = mountTagInput({ props: { maxTags: 2, tags: ['Test 1', 'Test 2', 'Test 3'] } });
            const tagMoreWrapper = wrapper.find('.ay-multiselect__tags-more');

            expect(tagMoreWrapper.exists()).toBeTruthy();
            expect(tagMoreWrapper.text()).toEqual('+1');
        });

        it('that does not display short more tag element when we do not exceed limit', () => {
            const wrapper = mountTagInput({ props: { maxTags: 2, tags: ['Test 1', 'Test 2'] } });
            const tagMoreWrapper = wrapper.find('.ay-multiselect__tags-more');

            expect(tagMoreWrapper.exists()).toBeFalsy();
        });

        itProp(
            'that manipulates how many tags we show',
            [fc.integer({ min: -50, max: 100 }), fc.array(fc.string(), { minLength: 1, maxLength: 100 })],
            (maxTags, tags) => {
                const wrapper = mountTagInput({ props: { tags, maxTags } });
                const maxTagsLimited = Math.max(1, maxTags);
                const tagMoreWrapper = wrapper.find('.ay-multiselect__tags-more');

                if (tags.length > maxTagsLimited) {
                    expect(tagMoreWrapper.exists()).toBeTruthy();
                    expect(tagMoreWrapper.text()).toEqual(`+${tags.length - maxTagsLimited}`);
                } else {
                    expect(tagMoreWrapper.exists()).toBeFalsy();
                }

                const tagTexts = wrapper.findAll('.ay-tag:not(.ay-multiselect__tags-more)').map(tag => tag.text());

                tags.slice(0, maxTagsLimited).forEach(tag => {
                    expect(tagTexts.find(t => t === tag)).not.toBeNull();
                });
            }
        );
    });
});
