interface PersonInterface {
    id: string;
    firstName: string;
    age: number;
    sayHello(): string;
}

interface EmployeeIterface {
    salary: number;
}

class Person implements PersonInterface {
    id: string;
    firstName: string;
    age: number;

    constructor(id: string, firstName: string, age: number) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }

    sayHello(): string {
        return 'Hello!';
    }
}


class Employee extends Person implements EmployeeIterface {
    salary: number;

    constructor(id: string, firstName: string, age: number, salary: number) {
        super(id, firstName, age);
        this.salary = salary;
    }
}

const p1 = new Person('123', 'Marcus', 20)


export { }