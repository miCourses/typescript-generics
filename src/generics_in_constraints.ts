export class Person {
    constructor(public name: string, public age:  number){}
}

export const display = <T extends Person, U>(person: T, prm2: U): void => {
    console.log(person.name)
}

export class User extends Person {}

export {}