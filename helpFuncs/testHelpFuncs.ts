import {expect, assert} from "chai";
export let log = console.log;
export let expectType = function (type, result) {
    expect(typeof(result)).to.equal(type);
};
export let expectNumber = function(nr, result) {
    expectType('number', result);
    assert.strictEqual(result, nr);
};