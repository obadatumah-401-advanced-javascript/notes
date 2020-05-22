'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const NoteSchema = require('../lib/model/notes-collection');
const collectionNotes = new NoteSchema();


class Notes {
  constructor() {

  }

  execute(note) {
    if (note) {
      if (note.payload !== true && note.payload !== undefined) {
        console.log(note);
      }
    }
  }

  async add(note) {
    let newNote = await collectionNotes.create(note);
    console.log("newNote >>>> ",newNote);
    
    
  }

  async list(note) {
    if (note.categoryValue) {
    let oneNote = await collectionNotes.get(note);
    console.log(`Your ${note.categoryValue} category notes`, oneNote);
    
    
  }
  else{
    let allNotes = await collectionNotes.get(note.category == undefined);
    console.log('All your notes', allNotes);}
}

  delete(note){

    if (note) {
      if (note.deleteID) {
        collectionNotes.delete(note.deleteID);
        console.log('DELETED', note.deleteID);
      }
    }
  }
}
module.exports = Notes;
