import {assert} from 'chai';
import {compose} from './compose';
import {expectNumber} from '../../helpFuncs/testhelpfuncs';

describe('compose', () => {
    const increment = (a) => a + 1;
    const double = (a) => a * 2;
    const incrThenDouble = compose(double, increment);
    
    it('should return the result of function As result into function B', () => {
        const result = incrThenDouble(1);
        expectNumber(4, result);
    });

    it('should compose second func argument into first func argument, according to conventions', () => {
        const result = incrThenDouble(3);
        assert.notEqual(7, result);
        expectNumber(8, result);
    });
});