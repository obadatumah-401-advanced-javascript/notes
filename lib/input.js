'use strict'

const minimist = require('minimist');

function input (){
    
let methodTest = process.argv[2]; //the command(add||a)
let argv = minimist(process.argv.slice(2)); // take the command(add||a) and the message
let method = Object.keys(argv)[1]; // make a command(add||a) as a object's key
let msg = argv[method]; // make a message as a value for the choosing key
let reg = /^add$|^a$/g // regular expression for the keys (add||a)


if(reg.test(method) && (methodTest === '--add' || methodTest === '-a')  ){
    if(typeof(msg) === 'string'){
        this.action = method;
        this.payload = msg;   
    }else{
        console.log('you should enter a message');
    }
}else{
   console.log('you should use (--add) or (-a) to add a message');
    
}   
}
module.exports = input;