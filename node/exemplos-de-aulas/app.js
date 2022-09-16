const {firstName, lastName, add} = require('../exemplos-de-aulas/utils')


const messages = require('../exemplos-de-aulas/messages')

const sum = add(4, 4);
const message = messages.getMessages();

console.log(firstName, lastName);
console.log(sum);
console.log(message);