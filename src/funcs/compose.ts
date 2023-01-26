import { curry } from './curry';
/**
 * Creates a new function that combines the functions in order right to left.
 * That is: the last function argument is applied first, sending the result 
 * to the first function argument.
 */
// export const compose = curry(
//   function compose(fnB: CompositionFunction, fnA: CompositionFunction) {
//     return function composed(...args: Array<any>) {
//       return fnB(fnA.apply(null, args));
//     };
//   }
// );
type CompositionFunc<T, U> = (x: T) => U;

interface Composition<T, U> {
  to: <U, V>(func: (x: U) => V) => Composition<T, V>
  apply: () => (x: T) => U
}

export const compose = <T, U>(x: (x: T) => U) => {
  const first: (...args: any[]) => U = x;
  const to = <X, Y>(funcs: CompositionFunc<X, Y>[], func: CompositionFunc<T, Y>) => {
    const untypedArray: CompositionFunc<any, any>[] = funcs;
    untypedArray[funcs.length++] = func;
    return composeOf(untypedArray) as Composition<X, Y>;
  };

  const composeOf = <T, U>(funcs: CompositionFunc<T, U>[]) => {
    const composition: Composition<T, U> = {
      /**
       * Adds the given function to the composition
       * @param func 
       * @returns the composition
       */
      to: <U, V>(func: (x: U) => V) => {
        return to(funcs as any, func as any) as any as Composition<T, V>;
      },
      /**
       * @returns the composed function
       */
      apply: () => {
        return (...args: any[]) => {
          let result: any = first(...args);
          funcs.map(func => result = func(result));
          return result;
        };
      }
    };

    return composition;
  };

  return composeOf([] as CompositionFunc<T, U>[]);
};
