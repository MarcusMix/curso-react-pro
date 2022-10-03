"use strict";
// 1. Crie uma Tupla que represente a Response de uma requisição HTTP. O primeiro valor dela sempre deve ter uma string, representando o Body, e o segundo um number, representando o Status Code.
Object.defineProperty(exports, "__esModule", { value: true });
const responseHTTP = [['http://linkqualquer', 1]];
// 2. Crie uma lista que contenha apenas valores correspondentes à mesma Tupla criada no exercício anterior.
const lista = [['http://linkqualquer', 1],
    ['http://linkqualquer', 2],
    ['http://linkqualquer', 3]
];
// 2. Crie um Enum que guarde os status de uma compra, crie uma variável e assinale um valor à ela o utilizando. As opções são:
// WaitingForPayment ("Aguardando Pagamento");
// PaymentConfirmed ("Pagamento Confirmado");
// SentForCustomer ("Enviado para o Cliente");
// ReceivedByCustomer ("Recebido pelo Cliente");
var Status;
(function (Status) {
    Status["WaitingForPayment"] = "Aguardando Pagamento";
    Status["PaymentConfirmed"] = "Pagamento Confirmado";
    Status["SentForCustomer"] = "Enviado para o Cliente";
    Status["ReceivedByCustomer"] = "Recebido pelo Cliente";
})(Status || (Status = {}));
const status1 = Status.SentForCustomer;
// 3. Crie uma função chamada "sub", que receba dois numbers e que retorne a subtração de ambos. Essa função precisa ter um number como seu tipo de retorno.
const sub = (num1, num2) => {
    return num1 - num2;
};
// 4. Crie uma função chamada "printLog", que receba um parâmetro que possa ser um number ou uma string, e que logue-o no console.Essa função precisa ter um void como seu tipo de retorno.
const printLog = (log) => {
    console.log(log);
};
// 5. Assinale a variável "cid" como valor da "customerId", mas convertendo-a para number utilizando Type Assertion.
const cid = "123456";
const customerId = cid;
