abstract class Entity<Props> {
    constructor(protected props: Props){}

    toJSON(): Props {
        return {...this.props}
    }
}

export  type CategoryProperties = {
    name: string,
    description: string
}  

export class Category extends Entity<CategoryProperties>{}

type ProductProperties = {
    title: string,
    price: number
}
export class Product extends Entity<ProductProperties>{}