import { Example } from "./generics_in_class";
import { Category, Product } from "./generics_in_class_real";
import { display, Person, User } from "./generics_in_constraints";
import { RepositoryInterface } from "./generics_in_interface";
   

function main() {
    // const ex1 = new Example<string>("foi");
    // console.log("E aqui", ex1.getValue());

   
    //generic in class
    // const aCategory = new Category({name: "string", description: "string"})

    // const aProduct = new Product({title: "Manga", price: 2000});

    // console.log("aCategory: ", aCategory.toJSON())
    // console.log("aProduct: ", aProduct.toJSON());
    
    // var apt=2;
    // console.log(apt = apt<<2)

    // var p = 2489.8237

    // console.log(p.toFixed(3));

    //generics with contraints

    const p1 = new Person("Adão", 23);
    display(p1, 123)
    const user1 = new User("adão", 23);
    display(user1, 234);


}

main();