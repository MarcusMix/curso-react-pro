"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1. Crie uma função que receba um valor e que apenas retorne-o.
// Torne o tipo desse valor dinâmico utilizando Generics.
const returnValueDinamic = (value) => {
    return value;
};
function returnValueDinamic2(value) {
    return value;
}
const valor = returnValueDinamic(2);
console.log({ valor });
const valor2 = returnValueDinamic2('Bom dia');
console.log({ valor2 });
// 2. Crie uma função que receba um valor e retorne um Array contendo ele.
// Torne o tipo do valor recebido e do retorno da função dinâmicos utilizando Generics.
const functionReturn = (array) => {
    return [array];
};
const conts = functionReturn(2);
console.log({ conts });
// 3. Crie uma função que receba um Array e retorne o segundo elemento dele.
// Torne o tipo desse Array dinâmico utilizanado Generics.
const getSecondValueArray = (value) => {
    return value[1];
};
const valuesArray = getSecondValueArray([1, 3, 7]);
console.log({ valuesArray });
// 4. Crie uma função assíncrona que receba dois valores: x e y (numbers) e que retorna soma deles.
// Deixe explicito o tipo de retorno dessa função, utilizando Generics.
const sum = (x, y) => __awaiter(void 0, void 0, void 0, function* () {
    return x + y;
});
console.log(sum(2, 9));
