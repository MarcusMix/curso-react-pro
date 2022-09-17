const iniciarBancoDeDados = (senha) => {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando o banco de dados... (senha inserida: ${senha})`);
        if(senha === '12345') {
            resolve("O banco de dados foi iniciado com sucesso!");
        } else {
            reject('Senha incorreta');
        }
    });
}

const prepararBancoDeDados = () => {
    return new Promise ((resolve, reject) => {
        console.log('Preparando o banco de dados...');
        resolve(`Banco de dados preparado com sucesso!`)
    })
}

// iniciarBancoDeDados('12345').then((value) => {
//     console.log(value);
//     return prepararBancoDeDados();
// })
// .then((value) => console.log(value))
// .catch((error) => console.log(error))

//mesma coisa que acima

const iniciarEPrepararBancoDeDados = async () => {

    try {
        const mensgagemDeInicio = await iniciarBancoDeDados('123452')
        console.log(mensgagemDeInicio)

        const mensagemDePreparo = await prepararBancoDeDados()
        console.log(mensagemDePreparo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Sou executado indepedentemente do resultado da promise.')
    }
  
}

iniciarEPrepararBancoDeDados()