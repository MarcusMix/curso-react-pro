
const numeros = [1, 2, 3];

const numerosMultiplicadosPor2 = numeros.map((item, index) => {
  return item * 2
})



// console.log(numerosMultiplicadosPor2)
// primeira iteração
// lista map = [];
// lista map = [2]

// segunda iteração
// lista map = [2, 4]

// terceira iteração
// lista map = [2, 4, 6]

const usuarios = [
  {
    nome: 'John',
    idade: 20,
  },
  {
    nome: 'Doe',
    idade: 40
  }
]

const usuariosComIdadeMultiplicadaPor2 = 
    usuarios.map((item, index) => {
        return {...item, idade: item.idade * 2}
})

const usuariosComIdadeMultiplicadaPor22 = 
    usuarios.map((item, index) => (
        {...item, idade: item.idade * 2}
    )
)

console.log(usuariosComIdadeMultiplicadaPor2)
console.log(usuariosComIdadeMultiplicadaPor22)