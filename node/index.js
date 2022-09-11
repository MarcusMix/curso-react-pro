// Antes do **node**, só dava pra executar um código **JavaScript** dentro de um navegador.

// É um ambiente, assim como um navegador que possui um **motor JavaScript**(é responsável por processar o código), e por ter esse motor, ele consegue ler um código **JavaScript**.

// Portanto possui algumas diferenças dos navegadores, como:

// ❌Não possui o window

// ❌Não possui o document

// ✔️Possui o global

setTimeout(() => {
    console.log('Hello World!')
},2000)