"use strict";
// 1. Crie os seguintes Types:
// - UserType, que contenha as propriedades id (number) e name (string)
// - BookType, que contenhas as propriedades id (number), name (string) e authorId (number)
// - AuthorType, que expanda o UserType e adicione a propriedade books (BookType[]) à ele
// Crie uma variável para cada um deles, e logue-as no console.
Object.defineProperty(exports, "__esModule", { value: true });
const userOne = {
    id: 1,
    name: 'Jimin do BTS'
};
const bookOne = {
    id: 1,
    name: 'As cronicas de Ryuk: O shinigami',
    authorId: 666
};
const bookTwo = {
    id: 2,
    name: 'Como criar A Vila da Folha',
    authorId: 667
};
const authorOne = {
    id: 69,
    name: 'Uchiha Madara',
    books: [
        bookOne,
        bookTwo
    ]
};
console.log({ userOne });
console.log({ bookOne });
console.log({ bookTwo });
console.log({ userOne });
// 2. Crie uma lista de usuários (utilizando o UserType criado no exercício anterior) e logue-a no console.
const aLotOfUsers = [
    {
        id: 1,
        name: 'Uchiha Obito'
    },
    {
        id: 2,
        name: 'Uchiha Sasuke'
    }
];
console.log(aLotOfUsers);
const max = (x, y) => {
    return x * y;
};
console.log(max(2, 9));
const productOne = {
    id: 1,
    name: 'Pó branco suspeito',
    price: 20
};
const orderOne = {
    id: 2,
    products: [
        productOne
    ]
};
