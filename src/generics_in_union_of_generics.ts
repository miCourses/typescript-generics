export const report = <T extends object, U extends object>(salesOld: T, salesNew: U): T & U => {
    // return {...salesOld, ...salesNew}
    return Object.assign({}, salesOld, salesNew);
}

export const sales2021_2 = {
    agosto: 123,
    setembro: 122,
    outubro: 456
}

export const sales2022_2 = {
    janeiro: 123,
    fevereiro: 122,
    marco: 456
}

