const texto = 'Ser ou não ser, eis a questão';

const comecaComSer = texto.startsWith('não ser', 7)
// não ser, eis a questão

// endsWith
const terminaComQuestao = texto.endsWith('questão')

console.log(comecaComSer)
console.log(terminaComQuestao)