import { alertMe } from "./index";
import 'mocha';
import { expect, assert } from "chai";

describe('alertMe', () => {
    it('will call the alert method on the provided window object', () => {
        let calls = {nrOfCalls: 0, msgConcat: ""};
        let win = { 
            alert: (msg : string) => {calls.nrOfCalls++; calls.msgConcat += msg;} 
        };
        let msg = "Boo!";
        alertMe(msg, win);
        expect(calls.nrOfCalls).to.equal(1);
        expect(calls.msgConcat).to.equal(msg);
    });
});