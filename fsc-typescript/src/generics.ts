const returnValue = <T>(value: T): T => {
    return value;
}

const message  = returnValue <string> ('Hello World!')
const number = returnValue <number> (9)

// const getFirstValueFromArray = <T>(array: T[]) => {
//     return array[0]
// }


//mesma coisa q de cima
function getFirstValueFromArray <T>(array: T[]) {
    return array[0]
}

const firstValueFromString = getFirstValueFromArray <string>(['Naruto', 'One Piece', 'Death Note'])

const firstValueFromNumer = getFirstValueFromArray <number> ([1, 2, 3, 4])
