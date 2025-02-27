import { Example } from "./generics_in_class";
import { Category, Product } from "./generics_in_class_real";
   

function main() {
    // const ex1 = new Example<string>("foi");
    // console.log("E aqui", ex1.getValue());

   
    const aCategory = new Category({name: "string", description: "string"})

    const aProduct = new Product({title: "Manga", price: 2000});

    console.log("aCategory: ", aCategory)
    console.log("aProduct: ", aProduct);
}

main();