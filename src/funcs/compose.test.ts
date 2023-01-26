// import {assert} from 'chai';
import { expect } from 'chai';
import { compose } from './compose';
// import {expectNumber} from '../../helpFuncs/testHelpFuncs';

// describe('compose', () => {
//     const increment = (a : any) => a + 1;
//     const double = (a : any) => a * 2;
//     const incrThenDouble = compose(double, increment);

//     it('should return the result of function As result into function B', () => {
//         const result = incrThenDouble(1);
//         expectNumber(4, result);
//     });

//     it('should compose second func argument into first func argument, according to conventions', () => {
//         const result = incrThenDouble(3);
//         assert.notEqual(7, result);
//         expectNumber(8, result);
//     });
// });

describe('compose', () => {
  const increment = (a: number) => a + 1;
  const double = (a: number) => a * 2;
  const toString = (x: number) => `${x}`;
  const isEmpty = (x: string) => x === "";
  const twice = (x: number) => x + x;

  it('should return the result of function As result into function B', () => {
    const doubleThenIncr =
      compose(toString)
        .to(isEmpty)
        .to(toString)
        .to(twice)
        .apply();

    const result = doubleThenIncr(5);
    expect(result).to.equal('falsefalse');
  });
});
