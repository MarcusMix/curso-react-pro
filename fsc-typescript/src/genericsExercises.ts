// 1. Crie uma função que receba um valor e que apenas retorne-o.
// Torne o tipo desse valor dinâmico utilizando Generics.
const returnValueDinamic = <T>(value: T): T => {
    return value;
}

function returnValueDinamic2<T>(value: T): T {
    return value;
}
const valor = returnValueDinamic<number>(2)
console.log({ valor })

const valor2 = returnValueDinamic2<string>('Bom dia')
console.log({ valor2 })

// 2. Crie uma função que receba um valor e retorne um Array contendo ele.
// Torne o tipo do valor recebido e do retorno da função dinâmicos utilizando Generics.

const functionReturn = <T>(array: T): T[] => {
    return [array];
}


const conts = functionReturn<number>(2)
console.log({ conts })




// 3. Crie uma função que receba um Array e retorne o segundo elemento dele.
// Torne o tipo desse Array dinâmico utilizanado Generics.

const getSecondValueArray = <T>(value: T[]): T => {
    return value[1]
}

const valuesArray = getSecondValueArray<number>([1, 3, 7]);

console.log({ valuesArray })

// 4. Crie uma função assíncrona que receba dois valores: x e y (numbers) e que retorna soma deles.
// Deixe explicito o tipo de retorno dessa função, utilizando Generics.

const sum = async (x: number, y: number): Promise<number> => {
    return x + y;
}

console.log(sum(2, 9))