// 1. Guarde em uma variável se algum valor da lista "numeros" é par, e logue-a no console.

const numeros = [1, 2, 3, 4, 5, 6];

let numerosPar = [undefined]

const algumNumeroEPar = numeros.some(numero => {
    if (numero % 2 === 0) {
        numerosPar += numero;
        return true;
    }
})

console.log(`Algum número é par? ${algumNumeroEPar}`)
// console.log(numerosPar) teste so kkk

// 2. Guarde uma variável se alguma pessoa da lista "pessoas" é maior de idade, e logue-a no console.

const pessoas = [
    {
		nome: "Ragnar Lothbrok",
		idade: 30,
	},
	{
		nome: "Harvey Specter",
		idade: 41,
	},
	{
		nome: "John Doe",
		idade: 12,
	},
];


const algumaPessoaEMaiorDeIdade = pessoas.some(pessoa => {
    return pessoa.idade > 18
})

console.log(`Tem alguma pessoa maior de idade? ${algumaPessoaEMaiorDeIdade}`)

// 3. Guarde em uma variável se todos os valores da lista "numeros2" é par, e logue-a no console.

const numeros2 = [2, 2, 8, 4, 14, 6];

const todosSaoPares = numeros2.every(numero =>  {
    return numero % 2 === 0;
})
console.log(`Todos os números sâo pares? ${todosSaoPares}`)

// 4. Guarde em uma variável se todos os itens da "listaDeDesejos" está em estoque (quantidadeEstoque maior que 0).

const listaDeDesejos = [
	{
		titulo: "Tesla Model S",
		quantidadeEstoque: 0,
	},
	{
		titulo: "MacBook Pro",
		quantidadeEstoque: 10,
	},
	{
		titulo: "Carro de Fórmula 1",
		quantidadeEstoque: 1,
	},
];


const todosTemEstoque = listaDeDesejos.every(item => {
    return item.quantidadeEstoque > 1;
})
console.log(`Todos os item da listaDeDesejos tem estoque? ${todosTemEstoque}`)