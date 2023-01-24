import { compose } from "./compose";
import { curry } from "./curry";

type Predicate<T> = (x: T) => boolean;

export const not = curry(<T>(pred: Predicate<T>, x: T) => !pred(x));

export const pass = curry(<T>(pred: Predicate<T>, x: T) => pred(x));
export const passAll = curry(<T>(preds: Predicate<T>[], x: T) =>
  preds.every((pred) => pred(x)));

export const type = curry((typeName: string, x: any) => typeof x === typeName);
export const isBigInt: Predicate<any> = type('bigint');
export const isBoolean: Predicate<any> = type('boolean');
export const isFunction: Predicate<any> = type('function');
export const isString: Predicate<any> = type('string');
export const isSymbol: Predicate<any> = type('symbol');
export const isUndefined: Predicate<any> = type('undefined');
export const isArray = Array.isArray;
export const isNull = (x: any) => x === null;

/**
 * @returns true if it is not NaN and is a number, otherwise false
 */
export const isNumber = passAll([type('number'), not(isNaN)]);
/**
 * @returns true if input is not null and is an object, otherwise false
 */
export const isObject = passAll([type('object'), not(isNull)]);

export const withinRange = curry(
  function(
    min: number | string,
    max: number | string,
    x: number | string) {
    return x >= min && x <= max;
  });

