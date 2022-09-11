function verificarPositivo (num) {
    return num >= 0;
}


const verificarPositivoArrow = num => num >= 0;


// verificarPositivo(1)
// verificarPositivoArrow(-2)



function retornarObjeto() {
    return {
        nome: 'Marcus',
        sobrenome: 'Sandi',
    }
}

const retornarObjetoArrow = () => ({
    nome: 'Marcus',
    sobrenome: 'Sandi',
})

// console.log(retornarObjeto())
// console.log(retornarObjetoArrow())



class Pessoa {
    constructor(nome) {
      this.nome = nome
    }

    printNomeArrow() {
        setTimeout(() => {
            console.log(`Arrow: ${this.nome}`)
        },100)
    }

    printNomeFunction() {
        setTimeout(function() {
            console.log(`Function: ${this.nome}`)
        },100)
    }

}

const bob = new Pessoa("bob");
bob.printNomeArrow()
bob.printNomeFunction()



