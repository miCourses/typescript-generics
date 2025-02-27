export interface RepositoryInterface<T, U = boolean, V = void> {
    findById(id: string): T;
    findAll(): T[];
    save(props: T): Promise<V>;
    destroy(id: string): U
}