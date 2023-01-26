export interface Maybe<T> {
    val: () => T;
    map: <TResult>(func: (x: T) => TResult) => Maybe<TResult>;
    isSome: () => boolean;
    isNone: () => boolean;
}
export declare const of: <T>(val: T) => Maybe<T>;
