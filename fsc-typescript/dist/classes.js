"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(id, firstName, age) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }
    sayHello() {
        return 'Hello!';
    }
}
class Employee extends Person {
    constructor(id, firstName, age, salary) {
        super(id, firstName, age);
        this.salary = salary;
    }
}
const p1 = new Person('123', 'Marcus', 20);
