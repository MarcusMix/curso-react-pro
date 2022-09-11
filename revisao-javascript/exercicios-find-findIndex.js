// 1. Encontre na lista abaixo o objeto que tenha o valor "Japan" como "pais", guarde-o em uma variável e logue-a no console.

const foguetes = [
    { pais: "Russia", lancamentos: 32 },
    { pais: "US", lancamentos: 23 },
    { pais: "China", lancamentos: 16 },
    { pais: "Europe", lancamentos: 7 },
    { pais: "India", lancamentos: 4 },
    { pais: "Japan", lancamentos: 3 }
  ]
  
const fogueteJapan = foguetes.find(pais => {
    return pais.pais === 'Japan'
})

console.log(fogueteJapan)

// 2. Encontre, na lista abaixo, a posição que se encontra o item com o "titulo" igual a "Carro de Fórmula 1", guarde-a em uma variável e logue-a no console.
  
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
  

  const encontrarFormula1 = listaDeDesejos.findIndex(item => {
    return item.titulo === 'Carro de Fórmula 1'
  })
console.log(`O índice: ${encontrarFormula1}`)