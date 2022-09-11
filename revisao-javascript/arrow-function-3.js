// 1. Converta as funções abaixo para Arrow Functions.

function somar(a, b) {
    return a + b;
  };
  
  const somarArrow = (a, b) => a + b;
  console.log(somarArrow(2, 7))
  
  
  function verificarNegativo(numero) {
    return numero < 0;
  };
  
  const verificarNegativoArrow = num => num >= 0;
  console.log(verificarNegativoArrow(8))
  
  
  function criarUsuario(nome, idade) {
    return {
      nome,
      idade,
    }
  };
  
  const usuarios = (nome, idade) => ({
      nome,
      idade,
  })
  
  console.log(usuarios("Luiz", 19))
  
  setTimeout(function() {
    console.log('Hello world!')
  }, 1000)
  
  
  setTimeout(() => {
    console.log("Hello Mundo")
  }, 1000)