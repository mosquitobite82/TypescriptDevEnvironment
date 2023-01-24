import { expect } from 'chai';
import 'mocha';
import { expectType } from '../../helpFuncs/testHelpFuncs';
import { isObject, pass, type, withinRange } from './input';

describe('type', () => {

  it('should return function, given less args than required', () => {
    let result = type('number');
    expectType('function', result);
  });

  it('should return boolean', () => {
    let result = type('number', 'as');
    expectType('boolean', result);
  });
});

describe('isObject', () => {
  it('should return false when input is null', () => {
    expect(isObject(null)).to.be.false;
  });
});

describe('withinRange', () => {

  it('should return true', () => {
    let result = withinRange(1, 7, 3);
    expect(result).to.be.true;

    expect(withinRange("abc", "abf", "abf")).to.be.true;
    expect(withinRange("abc", "abf", "abc")).to.be.true;
    expect(withinRange("abc", "abf", "abe")).to.be.true;
  });

  it('should return false', () => {
    let range = withinRange(5, 10);
    expect(range(2)).to.be.false;

    expect(withinRange("abc", "abf", "b")).to.be.false;
    expect(withinRange("abc", "abf", "")).to.be.false;
  });

  it('should curry', () => {
    let minFive = withinRange(5);
    expectType('function', minFive);
    let betweenFiveAndSixteen = minFive(16);
    expectType('function', betweenFiveAndSixteen);
    expectType('boolean', betweenFiveAndSixteen(-45));
  });
});

describe('pass', () => {
  it('returns a function', () => {
    let notBar = pass((str: string) => str !== "bar");
    expectType('function', notBar);
  });

  it('returns a function that takes a value and returns boolean', () => {
    let notBar = pass((str: string) => str !== "bar");
    expectType('boolean', notBar('foo'));
  });

});

