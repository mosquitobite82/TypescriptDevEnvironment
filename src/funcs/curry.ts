import { curryN } from "ramda";

// export const curriedBinaryFunc = <T1, T2, TResult>(arg1: T1, arg2: T2) => {
//   if (!arg1 && !arg2) return curriedBinaryFunc;
//   if (!arg2)
// };


// let copy = function(arr: Array<any>) {
//   return Array.prototype.slice.apply(arr);
// };

// export const curry = function curry<TResult>(fn: Function): CurriedFunc<TResult> {
//   return function curried(...argmnts: Array<any>) {
//     if (fn.length > argmnts.length) {
//       return function partiallyApplied(...moreArgs: Array<any>) {
//         return curried.apply(null,
//           copy(argmnts).concat(copy(moreArgs)));
//       };
//     }
//     return fn.apply(null, argmnts);
//   };
// };

export curryN