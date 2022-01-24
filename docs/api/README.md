# API Reference

## `@Component([options])`

- **Arguments**
  - `{Object} [options]`

See also: [Class Component](../guide/class-component.md)

## `Component.registerHooks(hooks)`

- **Arguments**
  - `{Array} hooks`

Registers method names that class components handles them as hooks.

See [Additional Hooks](../guide/additional-hooks.md) for more details.

## `createDecorator(callback)`

- **Arguments**
  - `{Function} callback`
- **Return**
  - `{Function}`

Creates a new decorator which class components process.

See [Custom Decorators](../guide/custom-decorators.md) for more details.

## Built-in Hook Methods

The followings are built-in hook names that class components treat as special methods.

- data
- beforeCreate
- created
- beforeMount
- mounted
- beforeDestroy
- destroyed
- beforeUpdate
- updated
- activated
- deactivated
- render
- errorCaptured
- serverPrefetch

They will not be registered as component methods but (lifecycle) hooks. You should avoid these reserved names when your properties or methods are not supposed to be such hooks.

See also: [Hooks](../guide/class-component.md#Hooks)

## Built-in Hook Method Types

Only available in TypeScript. It enables built-in hooks methods auto-complete once your import it:

```ts
import 'kdu-class-component/hooks'
```
