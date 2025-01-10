import { defineComponent, nextTick } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { config, DOMWrapper, enableAutoUnmount, mount } from '@vue/test-utils';
import Popper from './Popper.vue';
import type { ComponentMountingOptions } from '@/test-utils';

type PopperType = InstanceType<typeof Popper>;

const mountPopper = (options: ComponentMountingOptions<PopperType> = {}, attachToBody = true) => {
    if (attachToBody) {
        options.attachTo = document.body;
    }

    return mount(Popper, options as any);
};

describe('Popper.vue', () => {
    const refSelector = '.ay-popper__reference';
    const contentSelector = '.ay-popper__tooltip-content';

    enableAutoUnmount(afterEach);

    it('should render popper with arrow and trigger events on click', async () => {
        const wrapper = await mountPopper({
            props: {
                appendToBody: false,
            },

            slots: {
                reference: '<button class="btn custom-btn">Popper ref</button>',
                content: '<div class="popper-content">Popper content</div>',
            },
        });

        // check that reference content exists
        expect(wrapper.html()).toContain('Popper ref');
        expect(wrapper.html()).toContain('Popper content');
        expect(wrapper.html()).not.toContain('ay-popper__arrow');

        // click on reference button
        wrapper.find(refSelector).trigger('click');

        // make sure ref is clicked and popper is shown
        expect(wrapper.emitted('update:visible')?.[0]).toEqual([true]);
        await nextTick();

        const styleBefore = wrapper.get(contentSelector).element as HTMLElement;
        expect(styleBefore.style.getPropertyValue('display')).toBe('');

        // click on reference button again
        wrapper.find(refSelector).trigger('click');

        await nextTick();

        // make sure popper is hidden after second click
        const stylesAfter = wrapper.get(contentSelector).element as HTMLElement;
        expect(stylesAfter.style.getPropertyValue('display')).toBe('none');
    });

    it('should render popper with custom class and trigger events on hover', async () => {
        const wrapper = await mountPopper({
            props: {
                trigger: 'hover',
                showArrow: true,
                appendToBody: false,
            },
            slots: {
                reference: '<button class="btn custom-btn">Popper ref</button>',
                content: '<div class="popper-content">Popper content</div>',
            },
        });

        // make sure arrow is visible
        expect(wrapper.html()).toContain('ay-popper__arrow');

        // click on reference button
        wrapper.find(refSelector).trigger('mouseenter');

        // make sure ref is clicked and popper is shown
        expect(wrapper.emitted('update:visible')?.[0]).toEqual([true]);
        await nextTick();

        // @ts-ignore
        const styleBefore = wrapper.get(contentSelector).element.style;
        expect(styleBefore.getPropertyValue('display')).toBe('');

        // click on reference button again
        wrapper.find(refSelector).trigger('mouseleave');

        await nextTick();

        // make sure popper is hidden after second click
        // @ts-ignore
        const stylesAfter = wrapper.get(contentSelector).element.style;
        expect(stylesAfter.getPropertyValue('display')).toBe('none');
    });

    it('closes popper tooltip when we click outside of its container', async () => {
        const wrapper = await mountPopper({
            slots: {
                reference: '<button class="btn custom-btn">Popper ref</button>',
                content: '<div class="popper-content">Popper content</div>',
            },
        });

        // click on reference button
        wrapper.find(refSelector).trigger('click');

        // make sure ref is clicked and popper is shown
        expect(wrapper.emitted('update:visible')?.[0]).toEqual([true]);
        await nextTick();

        const bodyWrapper = new DOMWrapper(document.body);

        expect(bodyWrapper.find(contentSelector).attributes('style')).toEqual('');

        bodyWrapper.trigger('click');

        await nextTick();

        expect(bodyWrapper.find(contentSelector).attributes('style')).toEqual('display: none;');
    });

    it('does not close popper if we click tooltip when it is appended to body', async () => {
        const wrapper = await mountPopper({
            slots: {
                reference: '<button class="btn custom-btn">Popper ref</button>',
                content: '<div class="popper-content">Popper content</div>',
            },
        });

        // click on reference button
        wrapper.find(refSelector).trigger('click');

        // make sure ref is clicked and popper is shown
        expect(wrapper.emitted('update:visible')?.[0]).toEqual([true]);
        await nextTick();

        const bodyWrapper = new DOMWrapper(document.body);

        expect(bodyWrapper.find(contentSelector).attributes('style')).toEqual('');

        bodyWrapper.find('.popper-content').trigger('click');

        await nextTick();

        expect(bodyWrapper.find(contentSelector).attributes('style')).toEqual('');
    });

    it('should emit fully opened event when transition has finished opening', async () => {
        // Faking transition
        // @link: https://stackoverflow.com/questions/71996356/how-to-test-transition-function-in-vue-3-test-utils
        config.global.stubs = {
            transition: false,
        };

        const wrapper = await mountPopper({
            props: {
                appendToBody: false,
            },

            slots: {
                reference: '<button class="btn custom-btn">Popper ref</button>',
                content: '<div class="popper-content">Popper content</div>',
            },
        });

        vi.useFakeTimers();

        // check that reference content exists
        expect(wrapper.html()).toContain('Popper ref');
        expect(wrapper.html()).toContain('Popper content');
        expect(wrapper.html()).not.toContain('ay-popper__arrow');

        // click on reference button
        wrapper.find(refSelector).trigger('click');

        // make sure ref is clicked and popper is shown
        expect(wrapper.emitted('fully-opened')).toBeUndefined();

        await nextTick();

        vi.advanceTimersByTime(100);

        expect(wrapper.emitted('fully-opened')).not.toBeUndefined();
    });

    it('should emit fully closed event when transition has finished closing', async () => {
        // Faking transition
        // @link: https://stackoverflow.com/questions/71996356/how-to-test-transition-function-in-vue-3-test-utils
        config.global.stubs = {
            transition: false,
        };

        const wrapper = await mountPopper({
            props: {
                appendToBody: false,
            },

            slots: {
                reference: '<button class="btn custom-btn">Popper ref</button>',
                content: '<div class="popper-content">Popper content</div>',
            },
        });

        vi.useFakeTimers();

        // check that reference content exists
        expect(wrapper.html()).toContain('Popper ref');
        expect(wrapper.html()).toContain('Popper content');
        expect(wrapper.html()).not.toContain('ay-popper__arrow');

        // click on reference button
        wrapper.find(refSelector).trigger('click');
        await nextTick();

        vi.advanceTimersByTime(100);
        expect(wrapper.emitted('fully-closed')).toBeUndefined();
        expect(wrapper.emitted('fully-opened')).not.toBeUndefined();

        wrapper.find(refSelector).trigger('click');
        await nextTick();

        vi.advanceTimersByTime(100);
        expect(wrapper.emitted('fully-closed')).not.toBeUndefined();
    });

    it("doesn't propagate click event to the parent when reference is clicked", async () => {
        const AComponentToTestPropagationClick = defineComponent({
            components: {
                Popper,
            },

            template: `<div @click="$emit('clicked')">
                            <Popper :append-to-body="false">
                               <template #reference>
                                   <button class="btn custom-btn">Popper ref</button>
                                </template>

                                <template #content>
                                   <div class="popper-content">Popper content</div>
                                </template>
                            </Popper>
                        </div>`,
        });
        const wrapper = mount(AComponentToTestPropagationClick);

        // click on reference button
        wrapper.find(refSelector).trigger('click');

        // make sure ref is clicked and popper is shown
        expect(wrapper.emitted('click')).toBeUndefined();
    });

    it("doesn't propagate click event to the parent when reference is clicked even with other trigger types", async () => {
        const AComponentToTestPropagationClick = defineComponent({
            components: {
                Popper,
            },

            template: `<div @click="$emit('clicked')">
                            <Popper trigger="hover" :append-to-body="false">
                               <template #reference>
                                   <button class="btn custom-btn">Popper ref</button>
                                </template>

                                <template #content>
                                   <div class="popper-content">Popper content</div>
                                </template>
                            </Popper>
                        </div>`,
        });
        const wrapper = mount(AComponentToTestPropagationClick);

        // click on reference button
        wrapper.find(refSelector).trigger('click');

        // make sure ref is clicked and popper is shown
        expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('mounts to body if that is the root element', async () => {
        const body = document.body;
        await mountPopper({ attachTo: body }, false);

        expect(body.querySelector(contentSelector)).not.toBeFalsy();
    });

    it('mounts to the first root element', async () => {
        const element = document.createElement('div');
        const shadowRootElement = element.attachShadow({ mode: 'open' });

        document.body.append(element);

        await mountPopper({ attachTo: shadowRootElement as any }, false);

        expect(document.body.querySelector(contentSelector)).toBeFalsy();
        expect(shadowRootElement.querySelector(contentSelector)).not.toBeFalsy();
    });

    it('mounts to the dialog element if it has it as a parent', async () => {
        const element = document.createElement('div');
        const shadowRootElement = element.attachShadow({ mode: 'open' });
        const dialogElement = document.createElement('dialog');

        shadowRootElement.appendChild(dialogElement);

        document.body.append(element);

        await mountPopper({ attachTo: dialogElement as any }, false);

        expect(document.body.querySelector(contentSelector)).toBeFalsy();
        expect(shadowRootElement.querySelector(contentSelector)).not.toBeFalsy();
        expect(dialogElement.querySelector(contentSelector)).not.toBeFalsy();
    });
});
