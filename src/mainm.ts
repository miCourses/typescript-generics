//com um generic
// function example<T> (value: T): T {
//     return value;
// }

// console.log("String", example<string>("Ok"));
// console.log("number", example<number>(123));
// console.log("boolean", example<boolean>(true));

//com um dois array

// function example<T, U> (value: T, prm2: U): T {
//     return value;
// }

//anotation do ES6

const  example = <T, U>(value: T, prm2: U): T => {
    return value;
}

console.log("string e String", example<string, string>("OK", "string"));
console.log("number e boolean", example<number, boolean>(123, true));
console.log("boolean e string", example<boolean, string>(true, "vamos lá"));
