 


const numeros = [5, 10, 15, 20, 25, 30];

const numerosMaioresDoQue10 = numeros.filter((numero) => {
  if (numero > 10) {
    return true;
  } else {
    return false
  }

//   return numero > 10
})











const usuarios = [
  {
    nome: 'Steve Jobs',
    idade: 17,
  },
  {
    nome: 'Elon Musk',
    idade: 37
  },
  {
    nome: 'Jeff Bezos',
    idade: 40,
  }
]



const usuariosMaior = usuarios.filter((usuario) => {
    if(usuario.idade >= 18) {
        return true
    }else {
        return false
    }
})


const usuariosMaioresDeIdade = usuarios.filter((usuario) => {
    return usuario.idade >= 18
    }
)

console.log(usuariosMaioresDeIdade)
console.log(usuariosMaior)
// console.log(`algo: ${usuariosMaior}`)
