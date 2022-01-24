# Extend and Mixins

## Extend

You can extend an existing class component as native class inheritance. Imagine you have following super class component:

```js
// super.js
import Kdu from 'kdu'
import Component from 'kdu-class-component'

// Define a super class component
@Component
export default class Super extends Kdu {
  superValue = 'Hello'
}
```

You can extend it by using native class inheritance syntax:

```js
import Super from './super'
import Component from 'kdu-class-component'

// Extending the Super class component
@Component
export default class HelloWorld extends Super {
  created() {
    console.log(this.superValue) // -> Hello
  }
}
```

Note that every super class must be a class component. In other words, it needs to inherit `Kdu` constructor as an ancestor and be decorated by `@Component` decorator.

## Mixins

Example of declaring mixins `Hello` and `World`:

```js
// mixins.js
import Kdu from 'kdu'
import Component from 'kdu-class-component'

// You can declare mixins as the same style as components.
@Component
export class Hello extends Kdu {
  hello = 'Hello'
}

@Component
export class World extends Kdu {
  world = 'World'
}
```

Use them in a class style component:

```js
import Component, { mixins } from 'kdu-class-component'
import { Hello, World } from './mixins'

// Use `mixins` helper function instead of `Kdu`.
// `mixins` can receive any number of arguments.
@Component
export class HelloWorld extends mixins(Hello, World) {
  created () {
    console.log(this.hello + ' ' + this.world + '!') // -> Hello World!
  }
}
```

As same as super class, all mixins must be declared as class components.
