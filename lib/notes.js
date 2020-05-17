'use strict'

function notes(note) {
}

notes.prototype.execute = function (note) {
    if (note.payload) {     // if there is a note then console the object
        console.log(note);
    }
}
notes.prototype.add = function (note) {
    if (note.payload) {

        let theMessage = {
            id: Math.ceil(Math.random() * 10), // random ID
            note: note.payload
        }
        console.log('Message :', theMessage);
    }


}
module.exports = notes;