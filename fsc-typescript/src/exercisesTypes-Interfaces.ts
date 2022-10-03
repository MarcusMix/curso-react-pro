// 1. Crie os seguintes Types:
// - UserType, que contenha as propriedades id (number) e name (string)
// - BookType, que contenhas as propriedades id (number), name (string) e authorId (number)
// - AuthorType, que expanda o UserType e adicione a propriedade books (BookType[]) à ele
// Crie uma variável para cada um deles, e logue-as no console.

type UserType = {
    id: number,
    name: string
}

type BookType = {
    id: number,
    name: string,
    authorId: number
}

type AuthorType = UserType & {
    books: BookType[]
}

const userOne: UserType = {
    id: 1,
    name: 'Jimin do BTS'
}

const bookOne: BookType = {
    id: 1,
    name: 'As cronicas de Ryuk: O shinigami',
    authorId: 666
}

const bookTwo: BookType = {
    id: 2,
    name: 'Como criar A Vila da Folha',
    authorId: 667
}

const authorOne: AuthorType = {
    id: 69,
    name: 'Uchiha Madara',
    books: [
        bookOne,
        bookTwo
    ]
}

console.log({ userOne })
console.log({ bookOne })
console.log({ bookTwo })
console.log({ userOne })


// 2. Crie uma lista de usuários (utilizando o UserType criado no exercício anterior) e logue-a no console.

const aLotOfUsers: UserType[] = [
    {
        id: 1,
        name: 'Uchiha Obito'
    },
    {
        id: 2,
        name: 'Uchiha Sasuke'
    }
]

console.log(aLotOfUsers)


// 3. Crie uma interface chamada "MathFunc", que represente uma função que receba x (number) e y (number) e que retorne um number.
// Implemente a interface criada em duas funções.


interface MathFunc {
    (x: number, y: number): number
}

const max: MathFunc = (x: number, y: number): number => {
    return x * y;
}

console.log(max(2, 9))

// 4. Crie as seguintes Interfaces:
// - ProductInterface, que contenhas as propriedades id (number), name (string) e price (number)
// - OrderInterface, que contenha as propriedades id (number) e products (ProductInterface[])
// Crie uma variável para cada uma deles, e logue-as no console.

interface ProductInterface {
    id: number,
    name: string,
    price: number
}

interface OrderInterface {
    id: number,
    products: ProductInterface[]
}

const productOne: ProductInterface = {
    id: 1,
    name: 'Pó branco suspeito',
    price: 20
}

const orderOne: OrderInterface = {
    id: 2,
    products: [
        productOne
    ]
}

export { };