# Hooks Auto-complete

Kdu Class Component provides built-in hook types, which enables auto-complete for `data`, `render` and other lifecycle hooks in class component declarations, for TypeScript. To enable it, you need to import hooks type located at `kdu-class-component/hooks`.

```ts
// main.ts
import 'kdu-class-component/hooks' // import hooks type to enable auto-complete
import Kdu from 'kdu'
import App from './App.kdu'

new Kdu({
  render: h => h(App)
}).$mount('#app')
```

If you want to make it work with custom hooks, you can manually add it by yourself:

```ts
import Kdu from 'kdu'
import { Route, RawLocation } from 'kdu-router'

declare module 'kdu/types/kdu' {
  // Augment component instance type
  interface Kdu {
    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Kdu) => void)) => void
    ): void

    beforeRouteLeave?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Kdu) => void)) => void
    ): void

    beforeRouteUpdate?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Kdu) => void)) => void
    ): void
  }
}
```


