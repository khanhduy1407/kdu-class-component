# Additional Hooks

```js
// class-component-hooks.js
import Component from 'kdu-class-component'

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
```

After registering the hooks, class component realizes them as class prototype methods:

```js
import Kdu from 'kdu'
import Component from 'kdu-class-component'

@Component
export default class HelloWorld extends Kdu {
  // The class component now treats beforeRouteEnter,
  // beforeRouteUpdate and beforeRouteLeave as Kdu Router hooks
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next()
  }

  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  }

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
}
```

It is recommended to write this registration code in a separated file because you have to register them before any component definitions. You can make sure the execution order by putting `import` statement for the hooks registration on the top of the main file:

```js
// main.js

// Make sure to register before importing any components
import './class-component-hooks'

import Kdu from 'kdu'
import App from './App'

new Kdu({
  el: '#app',
  render: h => h(App)
})
```