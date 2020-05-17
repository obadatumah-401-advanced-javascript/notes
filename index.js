'use strict'

const Input = require('./lib/input') 

const Notes = require('./lib/notes') 


let createNote = new Input();
// console.log('hhhhhhhh',createNote);
let newNote = new Notes(createNote);

newNote.execute(createNote);
newNote.add(createNote);

