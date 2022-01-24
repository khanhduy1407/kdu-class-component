import Kdu, { ComponentOptions } from 'kdu'
import { KduClass, DecoratedClass } from './declarations'

export const noop = () => {}

const fakeArray = { __proto__: [] }
export const hasProto = fakeArray instanceof Array

export interface KduDecorator {
  // Class decorator
  (Ctor: typeof Kdu): void

  // Property decorator
  (target: Kdu, key: string): void

  // Parameter decorator
  (target: Kdu, key: string, index: number): void
}

export function createDecorator (factory: (options: ComponentOptions<Kdu>, key: string, index: number) => void): KduDecorator {
  return (target: Kdu | typeof Kdu, key?: any, index?: any) => {
    const Ctor = typeof target === 'function'
      ? target as DecoratedClass
      : target.constructor as DecoratedClass
    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = []
    }
    if (typeof index !== 'number') {
      index = undefined
    }
    Ctor.__decorators__.push(options => factory(options, key, index))
  }
}

export type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never

export type ExtractInstance<T> = T extends KduClass<infer V> ? V : never

export type MixedKduClass<
  Mixins extends KduClass<Kdu>[]
> = Mixins extends (infer T)[]
  ? KduClass<UnionToIntersection<ExtractInstance<T>>>
  : never

// Retain legacy declaration for backward compatibility
export function mixins <A> (CtorA: KduClass<A>): KduClass<A>
export function mixins <A, B> (CtorA: KduClass<A>, CtorB: KduClass<B>): KduClass<A & B>
export function mixins <A, B, C> (CtorA: KduClass<A>, CtorB: KduClass<B>, CtorC: KduClass<C>): KduClass<A & B & C>
export function mixins <A, B, C, D> (CtorA: KduClass<A>, CtorB: KduClass<B>, CtorC: KduClass<C>, CtorD: KduClass<D>): KduClass<A & B & C & D>
export function mixins <A, B, C, D, E> (CtorA: KduClass<A>, CtorB: KduClass<B>, CtorC: KduClass<C>, CtorD: KduClass<D>, CtorE: KduClass<E>): KduClass<A & B & C & D & E>
export function mixins<T>(...Ctors: KduClass<Kdu>[]): KduClass<T>

export function mixins<T extends KduClass<Kdu>[]>(...Ctors: T): MixedKduClass<T>
export function mixins (...Ctors: KduClass<Kdu>[]): KduClass<Kdu> {
  return Kdu.extend({ mixins: Ctors })
}

export function isPrimitive (value: any): boolean {
  const type = typeof value
  return value == null || (type !== 'object' && type !== 'function')
}

export function warn (message: string): void {
  if (typeof console !== 'undefined') {
    console.warn('[kdu-class-component] ' + message)
  }
}
