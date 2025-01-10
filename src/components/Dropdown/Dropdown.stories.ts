import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import DropdownMenu from './DropdownMenu.vue';
import readme from './README.md';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
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

        appendToBody: {
            description:
                'By default the dropdown is teleported to the body, otherwise it will be part of the wrapper of the dropdown',
        },

        dropdown: {
            description: 'The content to show inside the popper',
        },

        default: {
            description:
                'The popper reference element. When this element is clicked/hovered etc, the popper will show. The popper will also be positioned relative to this element.',
        },
    },
};

const components = {
    Dropdown,
    DropdownItem,
    DropdownMenu,
};

export const Default = (args: any) => ({
    components,
    setup() {
        return {
            args,
        };
    },
    template: `<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown>
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`,
});

export const WithDropdownNotAppendedToBody = (args: any) => ({
    components,
    setup() {
        return {
            args,
        };
    },
    template: `<Dropdown v-bind="args" :append-to-body="false" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown>
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`,
});

export const WithNestedMenu = (args: any) => ({
    components,
    setup() {
        return {
            args,
        };
    },
    template: `<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown trigger="hover" placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu>
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`,
});

export const WithNestedMenuBeingClickable = (args: any) => ({
    components,
    setup() {
        return {
            args,
        };
    },
    template: `<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu>
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`,
});

export const WithNestedMenuAndHover = (args: any) => ({
    components,
    setup() {
        return {
            args,
        };
    },
    template: `<Dropdown v-bind="args" trigger="hover" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown trigger="hover" placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu >
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`,
});
