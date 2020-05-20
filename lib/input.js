'use strict';

const minimist = require('minimist');

class Input {

  constructor() {

    const argv = minimist(process.argv.slice(2));
    this.argvProp = argv;
    console.log(argv);
    const valid = this.valid(this.argvProp);

    if (valid) {
      const argv = minimist(process.argv.slice(2));
      this.argvProp = argv;
      this.action = Object.keys(argv)[1];
      this.payload = argv.add || argv.a;
      this.category = Object.keys(argv)[2];
      this.categoryValue = argv.category;
      if (this.action === 'delete') {
        this.deleteID = argv.delete;
      }
      if (this.action === 'add' || this.action === 'a' || this.action === 'list' || this.action === 'delete') {

        if (this.action === 'add' || this.action === 'a') {

          if (this.payload === undefined || this.payload === true) {

            console.log('Error: Please use (--add) or (-a) followed by your note to add it');

          }

          else {

            console.log(`Note Saved: ${this.payload}`);

          }
        }
      }

      else{

        console.log('Error: Please use (--add) or (-a) or (--list) or (--delete) followed by your note to add it');

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
