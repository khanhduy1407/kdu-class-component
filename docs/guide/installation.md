# Installation

## Kdu CLI Setup

You can easily setup your Kdu Class Component project by using` Kdu CLI`. Run the following command to create a new project:

```sh
$ kdu create hello-world
```

You will be asked whether using preset or not. Select "Manually select features":

Check TypeScript feature to use Kdu Class Component. You can add other features in addition if you need:

Press `y` for the question `Use class-style component syntax?`:

You can answer the remaining questions as your preferences. After finishing this setup process, Kdu CLI creates a new project directory with Kdu Class Component installed.

## Manual Setup

If you prefer manual setup, install it via npm and configure your build tool.

### npm

You can install Kdu Class Component with `npm` command. Please make sure to also install Kdu core library as Kdu Class Component depends on it:

```sh
$ npm install --save kdu kdu-class-component
```

You can use `yarn` command if you prefer:

```sh
$ yarn add --save kdu kdu-class-component
```

### Build Setup

To use Kdu Class Component, you need to configure [TypeScript](https://www.typescriptlang.org/) or [Babel](https://babeljs.io/) in your project as it relies on [ECMAScript stage 1 decorators](https://github.com/wycats/javascript-decorators/blob/master/README.md) which is needed to transpile to run on browsers.

::: warning
It does not support the stage 2 decorators yet since TypeScript transpiler still only supports the old decorators spec.
:::

#### TypeScript

Create `tsconfig.json` on your project root and specify `experimentalDecorators` option so that it transpiles decorator syntax:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "strict": true,
    "experimentalDecorators": true
  }
}
```

#### Babel

Install `@babel/plugin-proposal-decorators` and `@babel/plugin-proposal-class-properties`:

```sh
$ npm install --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
```

Then configure `.babelrc` on your project root:

```json
{
  "plugins": [
    ["@babel/proposal-decorators", { "legacy": true }],
    ["@babel/proposal-class-properties", { "loose": true }]
  ]
}
```

Note that `legacy` and `loose` option are needed as Kdu Class Component only supports stage 1 (legacy) decorator spec yet.

## CDN

[unpkg.com](https://unpkg.com/) provides npm-based CDN links. You can choose specific version of Kdu Class Component by replacing the `@latest` part in url (e.g. `https://unpkg.com/kdu-class-component@7.2.6/dist/kdu-class-component.js` to use version 7.2.2).

```html
<!-- UMD build -->
<script src="https://unpkg.com/kdu-class-component@latest/dist/kdu-class-component.js"></script>

<!-- UMD minified build -->
<script src="https://unpkg.com/kdu-class-component@latest/dist/kdu-class-component.min.js"></script>

<!-- ES Module build -->
<script src="https://unpkg.com/kdu-class-component@latest/dist/kdu-class-component.esm.browser.js"></script>

<!-- ES Module minified build -->
<script src="https://unpkg.com/kdu-class-component@latest/dist/kdu-class-component.esm.browser.min.js"></script>
```

## Different Builds

Kdu Class Component is provided as different builds for different environments and usages.

- **For development**
  - `kdu-class-component.js` (UMD)
  - `kdu-class-component.common.js` (CommonJS)
  - `kdu-class-component.esm.js` (ES Module for bundlers)
  - `kdu-class-component.esm.browser.js` (ES Module for browsers)
- **For production (minified)**
  - `kdu-class-component.min.js` (UMD)
  - `kdu-class-component.esm.browser.min.js` (ES Module for browsers)
