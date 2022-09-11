const foguetes = [
    { pais: "Russia", lancamentos: 32 },
    { pais: "US", lancamentos: 23 },
    { pais: "China", lancamentos: 16 },
    { pais: "Europe", lancamentos: 7 },
    { pais: "India", lancamentos: 4 },
    { pais: "Japan", lancamentos: 3 }
  ]
  
  const totalDeLancamentos = foguetes.reduce((contador, foguete) => {
    return contador + foguete.lancamentos
  }, 0)
  
  console.log(totalDeLancamentos)
  