import { expect } from 'chai';
import { expectType, expectNumber } from '../../helpFuncs/testHelpFuncs';
import { of } from './maybe';

const expectMaybe = (x: any) => {
  expectType('boolean', x.isSome());
  expectType('boolean', x.isNone());
  expectType('function', x.map);
  expectType('function', x.val);
};

describe('Maybe', () => {
  describe('of', () => {
    it('should return a Maybe<T>', () => {
      expectMaybe(of(1));
    });
  });

  describe('Some', () => {
    describe('map', () => {
      it('should return a maybe with applied function result', () => {
        const someDigit = of(5);
        const double = (digit: number) => digit * 2;
        const result = someDigit.map(double);
        expectMaybe(result);
        expect(result.val()).to.equals(10);
      })
    })
  })
})
