import {expect, assert} from "chai";
export let log = console.log;
export let expectType = function (type : any, result : any) {
    expect(typeof(result)).to.equal(type);
};
export let expectNumber = function(nr : any, result : any) {
    expectType('number', result);
    assert.strictEqual(result, nr);
};