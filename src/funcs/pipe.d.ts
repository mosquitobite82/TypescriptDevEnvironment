interface Pipe<T> {
    to: <T, U>(func: (x: T) => U) => Pipe<U>;
    apply: <U>() => U;
}
export declare const pipe: <T>(x: T) => Pipe<T>;
export {};
