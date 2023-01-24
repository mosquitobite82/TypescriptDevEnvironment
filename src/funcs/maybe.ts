import { curry } from './curry';
import { isNull, isUndefined } from './input';

export interface Maybe<T> {
  val: () => T,
  map: <TResult>(func: (x: T) => TResult) => Maybe<TResult>,
  isSome: () => boolean,
  isNone: () => boolean
}

export const of = <T>(val: T) => {
  const itsSome = !isNull(val) && !isUndefined(val);
  const obj: Maybe<T> = {
    val: () => val,
    map: <TResult>(func: (x: T) => TResult) => {
      return of(func(val));
    },
    isSome: () => itsSome,
    isNone: () => !itsSome
  };
  return obj;
};
