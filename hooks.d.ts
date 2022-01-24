import { VNode } from 'kdu'

declare module 'kdu/types/kdu' {
  interface Kdu {
    data?(): object
    beforeCreate?(): void
    created?(): void
    beforeMount?(): void
    mounted?(): void
    beforeDestroy?(): void
    destroyed?(): void
    beforeUpdate?(): void
    updated?(): void
    activated?(): void
    deactivated?(): void
    render?(createElement: CreateElement): VNode
    errorCaptured?(err: Error, vm: Kdu, info: string): boolean | undefined
    serverPrefetch?(): Promise<unknown>
  }
}
