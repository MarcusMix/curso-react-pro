const {firstName, lastName, add} = require('../exemplos-de-aulas/utils')


const messages = require('../exemplos-de-aulas/messages')

const sum = add(4, 4);
const message = messages.getMessages();

console.log(firstName, lastName);
console.log(sum);
console.log(message);

import validator from 'validator';
import chalk from 'chalk';

const email = 'johnosso@gol.com.br'

const isEmailValid = validator.isEmail(email);

console.log(isEmailValid)


const log = console.log;

// const letraColorida = 'OI, sou um texto de cor verde!'

// log(chalk.blue('OI, sou um texto de cor verde!'))

console.log(chalk.bold.green("Hello World!"))
const oi = log(chalk.bold.white('Será que está funcionando?'))
const erro = log(chalk.bold.red('Erro!!'))

