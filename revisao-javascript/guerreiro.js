// 1. Crie uma classe chamada "Guerreiro", que receba, em seu constructor, um "nome" e uma "idade", e que contenha um método chamado "lutar" que logue uma mensagem dizendo "O guerreiro {nome}, de {idade} anos está lutando!"

// 2. Crie uma classe chamada "Viking", derivada da classe "Guerreiro" criada acima. Sobrescreva o método "lutar", que agora logará uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando em nome de Odin!"
// 
// Crie também, na classe "Viking" um método chamado "lutarComMartelo", que logue uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando com seu martelo no nome de Thor!"

class Guerreiro {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    lutar() {
        console.log(`O guerreiro ${this.nome}, de ${this.idade} anos está lutando!`)
    }
}


class Viking extends Guerreiro {
    constructor(nome, idade) {
        super(nome, idade) 
    }

    lutar() {
        console.log(`O viking ${this.nome}, de ${this.idade} anos está lutando em nome de Odin!`)
    }

    lutarComMartelo() {
        console.log(`O viking ${this.nome}, de ${this.idade} anos está lutando com seu martelo de Thor!`)
    }
}


const guerreiro1 = new Guerreiro('Thoors', 40)
guerreiro1.lutar()

const viking1 = new Viking ('Askkelad', 50)
viking1.lutar()

const viking2 = new Viking ('Canute', 16)
viking2.lutarComMartelo()

