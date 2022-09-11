

// 1. Guarde em uma variável se a string abaixo começa com "Meu", e logue-a no console.

const mensagem = 'Olá, meu nome é John!';

const comecaComMeu = mensagem.startsWith('Meu');

console.log(`A mensagem começa com 'Meu'? ${comecaComMeu}`)


// 2. Guarde em uma variável se a string abaixo, a partir da posição 4, começa com "meu", e logue-a no console.

const mensagem2 = 'Olá, meu nome é Jane!';

const comecaComMeuPosicao4 = mensagem2.startsWith('meu', 4)

console.log(`A mensagem tem 'meu' na posição 4? ${comecaComMeuPosicao4}`)




// 3. Guarde em uma variável se a string abaixo termina com "Doe!", e logue-a no console.

const mensagem3 = 'Olá, meu nome é Doe!';

const terminaComDoe = mensagem3.endsWith('Doe!')

console.log(`A mensagem termina com 'Doe!' ? ${terminaComDoe}`)
