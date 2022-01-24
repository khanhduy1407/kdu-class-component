import Kdu, { ComponentOptions } from 'kdu'
import { KduClass } from './declarations'
import { componentFactory, $internalHooks } from './component'

export { createDecorator, KduDecorator, mixins } from './util'

function Component <V extends Kdu>(options: ComponentOptions<V> & ThisType<V>): <VC extends KduClass<V>>(target: VC) => VC
function Component <VC extends KduClass<Kdu>>(target: VC): VC
function Component (options: ComponentOptions<Kdu> | KduClass<Kdu>): any {
  if (typeof options === 'function') {
    return componentFactory(options)
  }
  return function (Component: KduClass<Kdu>) {
    return componentFactory(Component, options)
  }
}

Component.registerHooks = function registerHooks (keys: string[]): void {
  $internalHooks.push(...keys)
}

export default Component
