'use strict';
require('@code-fellows/supergoose');

const NoteSchema = require('../lib/model/notes-collection');
const collectionNotes = new NoteSchema();

describe('new note', () => {
    it('can create() a new note ', () => {
        let obj = { text: 'create test note', category: 'test' };
        return collectionNotes.create(obj)
            .then(record => {
                // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhh',record);

                expect(record.text).toEqual(obj.text);
                expect(record.category).toEqual(obj.category);

            });
    });
});

describe('get notes ', () => {
    it('can get() a note ', () => {
        let obj = { text: 'create test note', category: 'test' };
        return collectionNotes.create(obj)
            .then(record => {
                return collectionNotes.get(record._id)
                    .then(notes => {
                        Object.keys(obj).forEach(key => {
                            expect(notes[key]).toEqual(obj[key]);
                        })
                    });
            });
    });
});

describe('delete notes ', () => {
    it('can felete() a note ', () => {
        let obj = { text: 'create test note', category: 'test' };
        return collectionNotes.create(obj)
            .then(record => {
                return collectionNotes.delete(record._id)
                    .then(notes => {

                        expect(notes).toBeNull();

                    });
            });
    });
});