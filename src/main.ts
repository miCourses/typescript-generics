import { Example } from "./generics_in_class";
import { Category, Product } from "./generics_in_class_real";
import { display, Person, User } from "./generics_in_constraints";
import { getPropperty, typescriptInfo } from "./generics_in_constraints2";
import { RepositoryInterface } from "./generics_in_interface";
import { report, sales2021_2, sales2022_2 } from "./generics_in_union_of_generics";
   

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

    // const p1 = new Person("Adão", 23);
    // display(p1, 123)
    // const user1 = new User("adão", 23);
    // display(user1, 234);

    //generics with contraints 2
    // console.log(getPropperty(typescriptInfo, "name"));

    //uniao de generics
    console.log(report(sales2021_2, sales2022_2))



}

main();