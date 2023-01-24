import { curry } from './curry';
/**
 * Creates a new function that combines the functions in order right to left.
 * That is: the last function argument is applied first, sending the result 
 * to the first function argument.
 */
export const compose = curry(
  function compose(fnB: Function, fnA: Function) {
    return function composed(...args: Array<any>) {
      return fnB(fnA.apply(null, args));
    };
  }
);
