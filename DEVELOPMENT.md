### Common build commands

-   `npm run build` - runs the production build and generates typescript declarations
-   `npm run unit` - run the unit tests
-   `npm run unit:watch` - run the unit tests and watch for changes
-   `npm run dev` - run the build in development mode

### Testing with npm link

To test your local build of the components package in another project you can use npm link.
First run `npm link` inside the `packages/components` directory.
Then run `npm link @scayle/components` in the project that depends on `@scayle/components`

### Development guidelines

When making API changes to an existing component or creating a new one, please make sure to always describe the props/slots/emits of the component like this:

```vue
export default {
    argTypes: {
        propXY: {
            description: 'Prop description which will be shown in Storybook',
        },

        slotXY: {
            description: 'Slot description which will be shown in Storybook',
        },

        '@update:model-value': {
            description: 'Emit description which will be shown in Storybook',
        },
    },
};
```

Also, make sure to describe Storybook-only props as `This prop does only exist in Storybook`.

#### Code style

When in doubt, follow the existing [backbone-panel best-practices](../../docs/BEST_PRACTICES.md).

#### TypeScript

New code (including tests) should be written using TypeScript. For Vue Single-file Components, add `lang="ts"` to the script tag.
For script files, use `.ts` as the extension rather than `.js`.

#### RTL

We want these components to also work well for right-to-left languages.
Whenever possible we should use [CSS logical properties](https://rtlstyling.com/posts/rtl-styling#css-logical-properties) over the physical alternatives.
We include [tailwindcss-logical](https://github.com/stevecochrane/tailwindcss-logical), postcss-logical and postcss-dir-pseudo-class to make this easier.

#### Renderless Components

It often makes sense to create renderless (or nearly renderless) components to enable flexibility.

For example, we provide a `Modal` component in this library which follows the standard layout and styling of backbone-panel.
But there is also a `BaseModal` (which Modal uses internally) that focuses solely on the modal logic and does not have any styling or layout opinions.
It has just a single slot for the modal content.

If a user needs to create a modal that looks very different from the standard `Modal` component, they can still depend on `BaseModal` and not have to rewrite the behavior logic.

Renderless components can also be used for other purposes such as providing data or wrapping DOM APIs in a way that makes them easier to use through Vue templates. (e.g. `ResizeObserver`)

See more: https://adamwathan.me/renderless-components-in-vuejs/

#### Styling

We should use Tailwind classes via `@apply` in css files instead of directly using them in the Vue templates.
We want to avoid exporting common Tailwind classes in our CSS to avoid possible conflicts.

Slots are an easy way to provide flexibility for component users.
Props can be used for simple cases, but when there's a need for a lot of customization, slots are a better option.
For example, instead of having a half-dozen props to configure the modal header, we can allow the title to be configured via a prop, or the whole header to be replaced via a slot.

The user who needs a custom header can easily supply it via a slot, and the user who does not can simply use the default header.

```vue
<template>
    <div class="ay-modal">
        <template v-if="$slots.header">
            <slot name="header" />
        </template>
        <div v-else class="ay-modal__header">
            <span>{{ title }}</span>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        title: String,
    },
};
</script>
```
