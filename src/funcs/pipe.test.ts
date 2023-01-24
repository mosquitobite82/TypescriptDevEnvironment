import { expect } from "chai";
import { expectType } from "../../helpFuncs/testHelpFuncs";
import { curry } from "./curry";
import { pipe } from './pipe';
const double = (x: any) => x * 2 as any;
const add = curry((x: number, y: number) => x + y);

describe('pipe', () => {
  it('should take any val', () => {
    const ten = pipe(10);
    const result =
      ten
        .to(add(5))
        .to(double);

    expectType('object', result);
  });
});

describe('pipe object', () => {
  it('should have a "to" method', () => {
    const ten = pipe(10);
    const result =
      ten
        .to(add(1))
        .to(double);

    expectType('object', result);
  });
});

describe('pipe object', () => {
  it('should have a "apply" method', () => {
    const result =
      pipe(3)
        .to(add(5))
        .to((x) => (x as any / 4 as any))
        .apply();

    expect(result).to.equal(2);
  });
});

