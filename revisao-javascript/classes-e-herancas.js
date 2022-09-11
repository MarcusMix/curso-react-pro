class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} fez algum barulho!!`)
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome)
    }

    falar() {
        console.log(`${this.nome} latiu!!`)
    }

    sentar() {
        console.log(`${this.nome} sentou!`)
    }
}

// const animal = new Animal('Simba');
// animal.falar()

const cachorro = new Cachorro('Bob');
cachorro.falar()
cachorro.sentar()

