![scayle-logo-cr](https://cdn-prod.scayle.com/public/media/general/SCAYLE-Commerce-Engine-header.png)

<h1 align="center">
  SCAYLE Components Library
</h1>

<h4 align="center">
  <a href="https://scayle.dev/en/add-on-guide/getting-started/components-library">Documentation</a> |
  <a href="https://www.scayle.com/">Website</a>
</h4>

<p align="center">
  The SCAYLE <strong>Components Library</strong> offers essential components for developing SCAYLE Panel Add-ons written in Vue.js 3.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@scayle/components"><img src="https://img.shields.io/badge/components-45-success" alt="Components counter"></a>
  <a href="https://www.npmjs.com/package/@scayle/components"><img src="https://img.shields.io/npm/v/@scayle/components" alt="Latest Release"></a>
<a href="#"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="SCAYLE's *Component Library* is released under the MIT license." /></a>
  <a href="https://www.npmjs.com/package/@scayle/components"><img src="https://img.shields.io/npm/dt/@scayle/components" alt="Total Downloads"></a>
</p>

## Getting Started

Visit the [Add-On Developer Guide](https://scayle.dev/en/add-on-guide) to learn more on how to use the components.

Visit the [Components Upgrade Guide](https://scayle.dev/en/add-on-guide/getting-started/components-library) to learn more on how to update to the newest version.

Visit the [Docs](https://scayle.dev) to learn more about our system requirements.

## What is Scayle ?

[SCAYLE](https://www.scayle.com) is a full-featured e-commerce software solution that comes with flexible APIs. Within SCAYLE, you can manage all aspects of your shop, such as products, stocks, customers, and transactions.

Learn more about [SCAYLE’s architecture](https://scayle.dev/en/developer-guide/introduction/infrastructure) and [commerce modules](https://scayle.dev/en/getting-started) in the Docs.

## Installation

```shell
npm i -S @scayle/components
```

## Usage

All components

```typescript
import * as components from '@scayle/components';
import '@scayle/components/dist/style.css';

for (let component of components) {
    app.use(component);
}
```

Individual components

```typescript
import { Spinner, Modal } from '@scayle/components';
import '@scayle/components/dist/style.css';

app.use(Spinner).use(Modal);
```

### Auto-load components

Alternatively components can be automatically registered on demand using [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

Install the package (`npm i unplugin-vue-components -D`) and add the following to your webpack config.

```typescript
plugins: [
    /*...*/
    require('unplugin-vue-components/webpack')({
        dts: true,
        resolvers: [
            componentName => {
                if (componentName.startsWith('Ay')) {
                    return {
                        name: componentName.slice(2),
                        from: '@scayle/components',
                    };
                }
            },
        ],
    }),
];
```

Afterwards, whenever a component matching the pattern `ay-name` or `AyName` is found in a template, the component will automatically be registered for that component.

for example, this SFC

```html
<template>
    <ay-modal>Foo</ay-modal>
</template>
<script>
    export default { name: 'MyComponent' };
</script>
```

is compiled as

```html
<template>
    <ay-modal>Foo</ay-modal>
</template>
<script>
    import { Modal } from '@scayle/components';
    export default { name: 'MyComponent', components: { 'ay-modal': Modal } };
</script>
```

### RTL

The library is designed to work well in both left-to-right and right-to-left languages.
For this it depends on the `:dir()` pseudo-class.
There is a polyfill for [unsupported browsers](https://caniuse.com/css-dir-pseudo), included as well, but it requires that you explicitly specify a [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute in your DOM. (Usually on `html` or `body`)

## Other channels

- [LinkedIn](https://www.linkedin.com/company/scaylecommerce/)
- [Jobs](https://www.scayle.com/company/career/)
- [SCAYLE](https://scayle.com)

## License
Licensed under the [MIT](https://opensource.org/license/mit/)
