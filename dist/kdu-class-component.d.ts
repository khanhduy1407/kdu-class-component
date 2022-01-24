import { ComponentOptions } from 'kdu';
import { ComponentPublicInstance } from 'kdu';
import { SetupContext } from 'kdu';
import { UnwrapRef } from 'kdu';
import { VNode } from 'kdu';

export declare interface ClassComponentHooks {
    data?(): object;
    beforeCreate?(): void;
    created?(): void;
    beforeMount?(): void;
    mounted?(): void;
    beforeUnmount?(): void;
    unmounted?(): void;
    beforeUpdate?(): void;
    updated?(): void;
    activated?(): void;
    deactivated?(): void;
    render?(): VNode | void;
    errorCaptured?(err: Error, vm: Kdu, info: string): boolean | undefined;
    serverPrefetch?(): Promise<unknown>;
}

export declare function createDecorator(factory: (options: ComponentOptions, key: string, index: number) => void): KduDecorator;

export declare type ExtractInstance<T> = T extends KduMixin<infer V> ? V : never;

export declare type MixedKduBase<Mixins extends KduMixin[]> = Mixins extends (infer T)[] ? KduBase<UnionToIntersection<ExtractInstance<T>> & Kdu> & PropsMixin : never;

export declare function mixins<T extends KduMixin[]>(...Ctors: T): MixedKduBase<T>;

export declare function Options<V extends Kdu>(options: ComponentOptions & ThisType<V>): <VC extends KduBase>(target: VC) => VC;

export declare interface PropsMixin {
    new <Props = unknown>(...args: any[]): {
        $props: Props;
    };
}

export declare function setup<R>(setupFn: () => R): UnwrapRef<R>;

export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export declare type Kdu<Props = unknown> = ComponentPublicInstance<{}, {}, {}, {}, {}, Record<string, any>, Props> & ClassComponentHooks;

export declare const Kdu: KduConstructor;

export declare type KduBase<V extends Kdu = Kdu> = KduMixin<V> & (new (...args: any[]) => V);

export declare interface KduConstructor extends KduStatic {
    new <Props = unknown>(prop: Props, ctx: SetupContext): Kdu<Props>;
}

export declare interface KduDecorator {
    (Ctor: KduBase): void;
    (target: Kdu, key: string): void;
    (target: Kdu, key: string, index: number): void;
}

export declare type KduMixin<V extends Kdu = Kdu> = KduStatic & {
    prototype: V;
};

export declare interface KduStatic {
    /* Excluded from this release type: __vccCache */
    /* Excluded from this release type: __vccBase */
    /* Excluded from this release type: __vccDecorators */
    /* Excluded from this release type: __vccMixins */
    /* Excluded from this release type: __vccHooks */
    /* Excluded from this release type: __vccOpts */
    /* Excluded from this release type: render */
    /* Excluded from this release type: ssrRender */
    /* Excluded from this release type: __file */
    /* Excluded from this release type: __cssModules */
    /* Excluded from this release type: __scopeId */
    /* Excluded from this release type: __hmrId */
    registerHooks(keys: string[]): void;
}

export { }
