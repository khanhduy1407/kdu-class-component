# Property Type Declaration

Sometimes, you have to define component properties and methods out of a class component. For example, [Kduxs](https://github.com/khanhduy1407/kduxs), the official state management library for Kdu, provides `mapGetters` and `mapActions` helpers to map a store to component properties and methods. These helpers need to be used in a component options object.

Even in this case, you can pass component options to the `@Component` decorator's argument. However it does not automatically declare the properties and methods on type level while they work on runtime.

You need to manually declare their types in the class component:

```ts
import Kdu from 'kdu'
import Component from 'kdu-class-component'
import { mapGetters, mapActions } from 'kduxs'

// Interface of post
import { Post } from './post'

@Component({
  computed: mapGetters([
    'posts'
  ]),

  methods: mapActions([
    'fetchPosts'
  ])
})
export default class Posts extends Kdu {
  // Declare mapped getters and actions on type level.
  // You may need to add `!` after the property name
  // to avoid compilation error (definite assignment assertion).

  // Type the mapped posts getter.
  posts!: Post[]

  // Type the mapped fetchPosts action.
  fetchPosts!: () => Promise<void>

  mounted() {
    // Use the mapped getter and action.
    this.fetchPosts().then(() => {
      console.log(this.posts)
    })
  }
}
```
