const validator = require('validator');

const email = 'johnosso@gol.com.br'

const isEmailValid = validator.isEmail(email);

console.log(isEmailValid)

