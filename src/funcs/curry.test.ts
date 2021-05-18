import {curry} from "./curry";
import 'mocha';
import {expectType, expectNumber} from '../../helpFuncs/testHelpFuncs';

describe('curry', () => {
    function testFunc(a : any, b : any, c : any , d : any)
    {
        return a + b + c + d;
    }
    let testCurry = curry(testFunc);

    it('should return function, given less args than required', () => {
        let result = testCurry(1)(2)(3);
        expectType('function', result);
    });

    it('should return function result, given all func args', () => {
        let result = testCurry(1)(2)(3)(4);
        expectType('number', result);
        expectNumber(10, result);
    });

    it('should return same function result, given more func args than it needs', () => {
        let result = testCurry(1,2,3,4,5,6,7);
        expectType('number', result);
        expectNumber(10, result);
    });
});
