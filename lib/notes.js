'use strict'


class notes {
    constructor(note){
        this.note = note;
    }
    execute(note) {
        if (note) {
            if (note.payload !== true && note.payload !== undefined) {
                console.log(note);
            }
        }
    }
    
    add(note) {
        if (note){
        if (note.payload !== true && note.payload !== undefined) {
            let theMessage = {
                id: Math.ceil(Math.random() * 10),
                note: note.payload
            }
            console.log('Message:', theMessage)
        }
    }
    }

}
module.exports = notes;