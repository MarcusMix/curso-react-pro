// tipos básicos

let num: number = 10.2;

const course: string = 'Marcus';

const isPublished: boolean = true;

let id2: any;

id2 = 5;
id2 = 'Sandi';
id2 = true;


// arrays

const numbers: number[] = [1, 2, 3]

const names: string[] = ['marcus','sandi']

const isCompleted: boolean[] = [false, true]

const anyValues: any[] = [1, 'marcus', false]


// tuples (tuplas)

const employee: [number, string, boolean] = [1, 'sandi', true]
// const employee: [number, string, boolean] = [1, true ,'sandi',]

const employees: [number, string, boolean][]= [[1, 'sandi', true]]

// UNIONS, podemos escolher qual será, um ou outro
const userid: number | string = '5';

//Enums
enum Direction {
    Up = 'para cima',
    Down = 'para baixo',
    Right = 'para direita',
    Left = 'para esquerda'
}

const direction1 = Direction.Left;

//type assertion
const cid: any = 1;
const customerId = cid as string;

const customerIds = [1, 2, 3]

let uid = 5;
// let uid = '5' 

//functions

const sum = (num1: number, num2: number):any => {
    return (num1 + num2).toString();
}

sum(1, 3)

//void
const printMessege = (message: string) => {
    console.log(message)
}

