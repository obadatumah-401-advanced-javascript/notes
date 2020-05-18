'use strict'

const minimist = require('minimist');


class Input {

    constructor() {

        const argv = minimist(process.argv.slice(2));
        this.argv2 = argv;

        const valid = this.valid(this.argv2);

        if (valid) {
            const argv = minimist(process.argv.slice(2));
            this.argv2 = argv;
            this.payload = argv.add || argv.a;
            Object.keys(argv)[1] === 'add' || Object.keys(argv)[1] === 'a' ? this.action = Object.keys(argv)[1] : this.action = undefined;

            if (this.payload === undefined || this.payload === true) {
                console.log("Error: Please use (--add) or (-a) followed by your note to add it");
            }
            else {
                console.log(`Adding Note: ${this.payload}`);
            }
        }

    }

    valid(validNote) {

        if (validNote !== undefined) {
            return true;
        }
        else {
            return false;
        }
    }

}



module.exports = Input;