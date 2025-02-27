import { Example } from "./generics_in_class";


function main() {
    const ex1 = new Example<string>("foi");
    console.log("E aqui", ex1.getValue())
}

main();