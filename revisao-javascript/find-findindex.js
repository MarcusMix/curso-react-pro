const pessoas = [
    {
      nome: 'John', idade: 18,
    },
    {
      nome: 'Jane', idade: 24,
    },
    {
      nome: 'Jane', idade: 20,
    },
  ]
  
  const jane = pessoas.find((item) => {
    return item.nome === 'Jane'
  });

// console.log(jane)

const janeIndex = pessoas.findIndex((item) => {
    return item.nome === 'Jane'
  })
  
//   console.log(jane);
  console.log(`Index: ${janeIndex}`)


