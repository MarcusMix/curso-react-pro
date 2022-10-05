"use strict";
const returnValue = (value) => {
    return value;
};
const message = returnValue('Hello World!');
const number = returnValue(9);
// const getFirstValueFromArray = <T>(array: T[]) => {
//     return array[0]
// }
//mesma coisa q de cima
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromString = getFirstValueFromArray(['Naruto', 'One Piece', 'Death Note']);
const firstValueFromNumer = getFirstValueFromArray([1, 2, 3, 4]);
