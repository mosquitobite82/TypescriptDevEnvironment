import {curry} from './curry';

export const compose = curry(
    function compose(fnB : Function, fnA : Function){
        return function composed(...args : Array<any>){
            return fnB(fnA.apply(null, args));
        };
    }
);