import Kdu, { VNode } from 'kdu'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Kdu {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
