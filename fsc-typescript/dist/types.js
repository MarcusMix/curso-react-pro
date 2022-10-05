"use strict";
// tipos básicos
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10.2;
const course = 'Marcus';
const isPublished = true;
let id2;
id2 = 5;
id2 = 'Sandi';
id2 = true;
// arrays
const numbers = [1, 2, 3];
const names = ['marcus', 'sandi'];
const isCompleted = [false, true];
const anyValues = [1, 'marcus', false];
// tuples (tuplas)
const employee = [1, 'sandi', true];
// const employee: [number, string, boolean] = [1, true ,'sandi',]
const employees = [[1, 'sandi', true]];
// UNIONS, podemos escolher qual será, um ou outro
const userid = '5';
//Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "para cima";
    Direction["Down"] = "para baixo";
    Direction["Right"] = "para direita";
    Direction["Left"] = "para esquerda";
})(Direction || (Direction = {}));
const direction1 = Direction.Left;
//type assertion
const cid = 1;
const customerId = cid;
const customerIds = [1, 2, 3];
let uid = 5;
// let uid = '5' 
//functions
const sum = (num1, num2) => {
    return (num1 + num2).toString();
};
sum(1, 3);
//void
const printMessege = (message) => {
    console.log(message);
};
