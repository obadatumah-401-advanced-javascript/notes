'use strict';
const mongoose = require('mongoose');
const NoteSchema = require('./notes-schema');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Notes {
    constructor() {

    }

    async get(note) {
        if (note) {
            if (note.categoryValue) {
                console.log('hhhhhhhhhh', note.categoryValue)

                return await NoteSchema.find({ category: note.categoryValue });
            }
            else {

                return await NoteSchema.find({});
            }
        }
    }

    async create(note) {
        if (note) {
            if (note.payload !== true && note.payload !== undefined) {
                let outMessage = {
                    text: note.payload,
                    category: note.categoryValue,
                };
                console.log('Message:', outMessage);

                const savedNote = new NoteSchema(outMessage);
                return await savedNote.save();
            }
        }
        
        
    }
    async delete(_id) {
            console.log(`Deleted Note`, _id);
            await NoteSchema.findByIdAndDelete(_id);
            
    }
}

module.exports = Notes;