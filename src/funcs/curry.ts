let copy = function(arr: Array<any>) {
  return Array.prototype.slice.apply(arr);
};

export const curry = function curry(fn: Function) {
  return function curried(...argmnts: Array<any>) {
    if (fn.length > argmnts.length) {
      return function partiallyApplied(...moreArgs: Array<any>) {
        return curried.apply(null,
          copy(argmnts).concat(copy(moreArgs)));
      };
    }
    return fn.apply(null, argmnts);
  };
};
