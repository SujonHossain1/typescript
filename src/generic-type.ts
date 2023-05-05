type GenericType<T> = T[];

const numbers: number[] = [1, 2, 3, 4, 5];



function showListOfData<T>(data: T[]): void {
    data.forEach((item) => {
        console.log(item);
    });
}

showListOfData<string>(['1', '2', '3']);
showListOfData<number>(numbers);

const newArr: GenericType<number> = [1, 2, 3, 4, 5];
const newArr2: GenericType<string> = ['1', '2', '3', '4', '5'];

/***
 * Generic Tuple
 */

type GenericTuple<T, U> = [T, U];

interface IGenericTuple<T, U> {
    users: T[];
    data: U[];
}

const a: GenericTuple<number, string> = [1, '2'];

const b: IGenericTuple<number, string> = {
    users: [1, 2, 3],
    data: ['1', '2', '3']
};

