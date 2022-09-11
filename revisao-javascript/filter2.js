// 1. Crie uma lista que contenha apenas os valores que são maiores que 5 da lista "numeros".

const numeros = [3, 6, 8, 2];

const numerosMaior5 = numeros.filter(numero => {
    return numero > 5
})

console.log(numerosMaior5)

// 2. Crie uma lista que contenha apenas os valores pares da lista "numeros2".

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosPares = numeros2.filter(numero => {
    return numero % 2 === 0
}) 

console.log(numerosPares)

// 3. Crie uma lista que contenha apenas as pessoas que têm idade o suficiente pra fazer parte da Matrix (a idade mínima é 18 anos), e logue-a no console.

const pessoas = [
	{ nome: "Angelina Jolie", idade: 80 },
	{ nome: "Eric Jones", idade: 2 },
	{ nome: "Paris Hilton", idade: 5 },
	{ nome: "Kayne West", idade: 16 },
	{ nome: "Bob Ziroll", idade: 100 },
];

const pessoasMatrix = pessoas.filter(pessoa => {
    return pessoa.idade >= 18
})

console.log(pessoasMatrix)

