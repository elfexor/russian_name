declare type GenderType = 'male' | 'female';
export interface IRussianName {
    name: string;
    surname: string;
    fullname: string;
    gender: GenderType;
    transliteration: {
        name: string;
        surname: string;
        fullname: string;
    };
}
interface IModuleRussianName {
    one(gender?: GenderType): IRussianName;
    many(amount: number, gender?: GenderType): IRussianName[];
    JSON: {
        male: {
            name: string;
            surname: string;
        };
        female: {
            name: string;
            surname: string;
        };
    };
}
declare const russianName: IModuleRussianName;
export { russianName };
//# sourceMappingURL=index.d.ts.map