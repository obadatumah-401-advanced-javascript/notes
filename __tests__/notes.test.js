'use strict';

const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('execute()', () => {
    it('nothing do when invoked invalid note', () => {
        const creatNote = new Notes();
        creatNote.execute();
        expect(console.log).not.toHaveBeenCalled();
    });

    it('do when invoked valid note', () => {
        const creatNote = new Notes();
        creatNote.execute({ payload: 'my first test' });
        expect(console.log).toHaveBeenCalled();
    });
});

// describe('add()', () => {

    
//     it('logs the output message when add function is invoked with a valid note', () => {
//         const createNote = new Notes();
//         createNote.add({ payload: 'my first test' });
//         expect(console.log).toHaveBeenCalled();
//     });

//     it('Do nothing when add function is invoked with invalid note', () => {
//         const createNote = new Notes();
//         createNote.add();
//         expect(console.log).not.toHaveBeenCalled();
//     });

// });