# Class Component

`@Component` decorator makes your class a Kdu component:

```js
import Kdu from 'kdu'
import Component from 'kdu-class-component'

// HelloWorld class will be a Kdu component
@Component
export default class HelloWorld extends Kdu {}
```

## Data

Initial `data` can be declared as class properties:

```kdu
<template>
  <div>{{ message }}</div>
</template>

<script>
import Kdu from 'kdu'
import Component from 'kdu-class-component'

@Component
export default class HelloWorld extends Kdu {
  // Declared as component data
  message = 'Hello World!'
}
</script>
```

The above component renders `Hello World!` in the `<div>` element as `message` is component data.

Note that if the initial value is `undefined`, the class property will not be reactive which means the changes for the properties will not be detected:

```js
import Kdu from 'kdu'
import Component from 'kdu-class-component'

@Component
export default class HelloWorld extends Kdu {
  // `message` will not be reactive value
  message = undefined
}
```

To avoid this, you can use `null` value or use `data` hook instead:

```js
import Kdu from 'kdu'
import Component from 'kdu-class-component'

@Component
export default class HelloWorld extends Kdu {
  // `message` will be reactive with `null` value
  message = null

  // See Hooks section for details about `data` hook inside class.
  data() {
    return {
      // `hello` will be reactive as it is declared via `data` hook.
      hello: undefined
    }
  }
}
```

## Methods

Components `methods` can be declared directly as class prototype methods:

```kdu
<template>
  <button v-on:click="hello">Click</button>
</template>

<script>
import Kdu from 'kdu'
import Component from 'kdu-class-component'

@Component
export default class HelloWorld extends Kdu {
  // Declared as component method
  hello() {
    console.log('Hello World!')
  }
}
</script>
```

## Computed Properties

Computed properties can be declared as class property getter / setter:

```kdu
<template>
  <input v-model="name">
</template>

<script>
import Kdu from 'kdu'
import Component from 'kdu-class-component'

@Component
export default class HelloWorld extends Kdu {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
}
</script>
```

## Hooks

`data`, `render` and all Kdu lifecycle hooks can be directly declared as class prototype methods as well, but you cannot invoke them on the instance itself. When declaring custom methods, you should avoid these reserved names.

```jsx
import Kdu from 'kdu'
import Component from 'kdu-class-component'

@Component
export default class HelloWorld extends Kdu {
  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // Declare render function
  render() {
    return <div>Hello World!</div>
  }
}
```

## Other Options

For all other options, pass them to the decorator function:

```kdu
<template>
  <OtherComponent />
</template>

<script>
import Kdu from 'kdu'
import Component from 'kdu-class-component'
import OtherComponent from './OtherComponent.kdu'

@Component({
  // Specify `components` option.
  components: {
    OtherComponent
  }
})
export default class HelloWorld extends Kdu {}
</script>
```