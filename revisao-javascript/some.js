const numeros = [2, 5, 8, 1, 11];

const temNumeroMaiorDoQue10 = numeros.some((numero) => {
  if (numero > 10) {
    return true;
  } else {
    return false;
  }
})

const numeros2 = [2, 5, 8, 1, 11];

const temNumeroMaiordoQue10 = numeros.some((numero) => {
  return numero > 10
})

console.log(temNumeroMaiorDoQue10)
console.log(temNumeroMaiordoQue10)