export class Example<T> {
    private value: T;

    constructor(value: T){
        this.value = value;
    }


    public getValue(): T {
        return this.value;
    }

}
