export const getPropperty = <T, K  extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key]
}

export let typescriptInfo = {
    name : "TypeScript",
    skills: ["JS", "TS"],
    level: "hard"
}
