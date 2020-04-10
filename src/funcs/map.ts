import {curry} from './curry';

export const map = curry(function map(func : Function, obj: any){
    return obj.map(func);
});