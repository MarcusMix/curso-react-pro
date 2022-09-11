const {firstName, lastName, add} = require('./utils')


const messages = require('./messages')

const sum = add(4, 4);
const message = messages.getMessages();

console.log(firstName, lastName);
console.log(sum);
console.log(message);