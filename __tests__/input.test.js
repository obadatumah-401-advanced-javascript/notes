'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
    return {
        add: 'some message '
    };
});
describe('valid()', () => {
    it('respects a proper object', () => {
        const noteInput = new Input();
        console.log(noteInput);
        expect(noteInput.valid(noteInput.argv2)).toBeTruthy();
    });

    it('reject invalid object', () => {
        const noteInput = new Input();

        noteInput.argv2 = undefined;


        expect(noteInput.valid(undefined)).toBeFalsy();
    });
});