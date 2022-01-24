import Kdu, { ComponentOptions } from 'kdu'

export type KduClass<V> = { new (...args: any[]): V & Kdu } & typeof Kdu

export type DecoratedClass = KduClass<Kdu> & {
  // Property, method and parameter decorators created by `createDecorator` helper
  // will enqueue functions that update component options for lazy processing.
  // They will be executed just before creating component constructor.
  __decorators__?: ((options: ComponentOptions<Kdu>) => void)[]
}
