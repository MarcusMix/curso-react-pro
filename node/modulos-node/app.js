import validator from 'validator';
import chalk from 'chalk';

const email = 'johnosso@gol.com.br'

const isEmailValid = validator.isEmail(email);

console.log(isEmailValid)


const log = console.log;

// const letraColorida = 'OI, sou um texto de cor verde!'

// log(chalk.blue('OI, sou um texto de cor verde!'))

console.log(chalk.bold.green("Hello World!"))
const oi = log(chalk.bold.bgWhite('valeu meu chapa'))