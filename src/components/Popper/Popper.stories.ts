import Popper from './Popper.vue';
import readme from './README.md';

export default {
    title: 'Components/Popper',
    component: Popper,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        trigger: {
            description: 'The triggering event for the popper (e.g. click, hover, manual)',
        },

        popperClass: {
            description: 'A class to add to the popper element',
        },

        placement: {
            description: 'The placement preference of the popper (e.g. top, bottom, left, right)',
        },

        showArrow: {
            description: 'Whether or not to show the arrow on the popper',
        },

        transition: {
            description: 'A transition to use when showing/hiding the popper',
        },

        content: {
            description: 'The slot used to show the content inside the popper',
        },

        reference: {
            description:
                'The slot used to provide the popper reference element. When this element is clicked/hovered etc, the popper will show. The popper will also be positioned relative to this element.',
        },
    },
};

const Template = (args: any) => ({
    components: { Popper },
    setup() {
        return { args };
    },
    template:
        '<Popper v-bind="args" class="pt-12">' +
        '<template #reference>' +
        '<button class="btn">{{ args.trigger ? "Open on hover" : "Open on click" }}</button>' +
        '</template>' +
        '<template #content>' +
        '<div class="text-white">content</div>' +
        '</template>' +
        '</Popper>',
});

export const Default = Template.bind({});
Default.args = {};

export const OpenOnHover = Template.bind({});
OpenOnHover.args = {
    trigger: 'hover',
};

export const WithArrow = Template.bind({});
WithArrow.args = {
    showArrow: true,
};

export const RightAligned = Template.bind({});
RightAligned.args = {
    showArrow: true,
    placement: 'right',
};
