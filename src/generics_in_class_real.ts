export  type CategoryProperties = {
    name: string,
    description: string
}  

type ProductProperties = {
    title: string,
    price: number
}

abstract class Entity<Props> {
    constructor(protected props: Props){}
}

export class Category extends Entity<CategoryProperties>{}

export class Product extends Entity<ProductProperties>{}