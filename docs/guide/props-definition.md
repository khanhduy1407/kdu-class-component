# Props Definition

There is no dedicated API for props definition that Kdu Class Component provides. You, however, can do that by using canonical `Kdu.extend` API:

```kdu
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Kdu from 'kdu'
import Component from 'kdu-class-component'

// Define the props by using Kdu's canonical way.
const GreetingProps = Kdu.extend({
  props: {
    name: String
  }
})

// Use defined props by extending GreetingProps.
@Component
export default class Greeting extends GreetingProps {
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>
```

As `Kdu.extend` infers defined prop types, it is possible to use them in your class component by extending it.

If you have a super class component or mixins to extend, use `mixins` helper to combine defined props with them:

```kdu
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Kdu from 'kdu'
import Component, { mixins } from 'kdu-class-component'
import Super from './super'

// Define the props by using Kdu's canonical way.
const GreetingProps = Kdu.extend({
  props: {
    name: String
  }
})

// Use `mixins` helper to combine defined props and a mixin.
@Component
export default class Greeting extends mixins(GreetingProps, Super) {
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>
```
