// 1. Crie uma Tupla que represente a Response de uma requisição HTTP. O primeiro valor dela sempre deve ter uma string, representando o Body, e o segundo um number, representando o Status Code.

const responseHTTP: [string, number][] = [['http://linkqualquer', 1]]


// 2. Crie uma lista que contenha apenas valores correspondentes à mesma Tupla criada no exercício anterior.

const lista: [string, number][]= [['http://linkqualquer', 1],
                                    ['http://linkqualquer', 2] ,
                                    ['http://linkqualquer', 3]
                                ]



// 2. Crie um Enum que guarde os status de uma compra, crie uma variável e assinale um valor à ela o utilizando. As opções são:
// WaitingForPayment ("Aguardando Pagamento");
// PaymentConfirmed ("Pagamento Confirmado");
// SentForCustomer ("Enviado para o Cliente");
// ReceivedByCustomer ("Recebido pelo Cliente");

enum Status {
    WaitingForPayment = "Aguardando Pagamento",
    PaymentConfirmed = "Pagamento Confirmado",
    SentForCustomer = "Enviado para o Cliente",
    ReceivedByCustomer = "Recebido pelo Cliente"
}

const status1 = Status.SentForCustomer;

// 3. Crie uma função chamada "sub", que receba dois numbers e que retorne a subtração de ambos. Essa função precisa ter um number como seu tipo de retorno.

const sub = (num1: number, num2: number):number => {
    return num1 - num2;
}



// 4. Crie uma função chamada "printLog", que receba um parâmetro que possa ser um number ou uma string, e que logue-o no console.Essa função precisa ter um void como seu tipo de retorno.

const printLog = (log: number | string):void => {
    console.log(log)
}


// 5. Assinale a variável "cid" como valor da "customerId", mas convertendo-a para number utilizando Type Assertion.


const cid: any = "123456";
const customerId = cid as number;

export {};