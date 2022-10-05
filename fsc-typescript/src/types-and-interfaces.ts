type UserType = {
    id: number,
    name: string,
    email: string,
    age?: number
}

type AuthorType = {
    books: string[];
}

const user: UserType = {
    id: 1,
    name: 'Marcus',
    email: 'email@email.com',
    age: 21 // opcional
}

const user2: UserType = {
    id: 2,
    name: 'Milena',
    email: 'email@email.com'
}

const users: UserType[] = [
    {
        id: 2,
        name: 'Milena',
        email: 'email@email.com'
    },
    {
        id: 1,
        name: 'Marcus',
        email: 'email@email.com',
        age: 21 
    }
]

const author2: UserType & AuthorType = {
    name: 'Jesse Pinkman',
    id: 69,
    email: 'jessehomemrosa@gmail.com',
    books: ['Fuma é baum', 'Como fazer metanfetamina com agua e sal']
}

//interfaces
interface UserInterface {
    id: number,
    name: string,
    email: string
}

const user3: UserInterface = {
    id: 1,
    name: 'Marcus',
    email: 'email@email.com'
}

//interfaces com funções
interface MathFunction {
    (x: number, y:number) : number
}

const add: MathFunction = (x: number, y:number) => {
    return x + y;
}

const sub: MathFunction = (x: number, y:number) => {
    return x - y;
}

//interfaces com métodos
interface UserInterface2 {
    id: number;
    name: string;
    register(message: string): string;
}

const user10: UserInterface2 = {
    id: 1,
    name: 'Marcus',
    register() {
        return 'Registrado com sucesso!'
    }
}


// interfaces com unions
interface AuthorInterface {
    books: string[]
}

const author: AuthorInterface & UserInterface = {
    name: 'Walter White',
    id: 2,
    email: 'walterbranco@gmail.com',
    books: ['Better Call Saul', 'Breaking Bad']
}


const author3: AuthorInterface | UserInterface = {
    books: ['Los pollos hermanos e a droga', 'Melhor ligar pro Sal']
}

const author4: AuthorInterface | UserInterface = {
    name: 'Mike',
    id: 7,
    email: 'mikeehrmantraut@gmail.com'
}


//quando usar um ou outro?
interface Man {
    name: string;
}

interface Woman {
    name: string;
}

// interface Person {
//     Man & Woman
// }

type Person = Man & Woman;

export {}