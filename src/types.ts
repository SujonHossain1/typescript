/**
 * Typescript - Basic Types
 * - undefined, null, void, never, any, unknown
 * - boolean, number, string, symbol
 * - object, array, tuple, enum, function
 */

let course: string = 'Next Level Web Development Course'; // explicit type declaration
course.toUpperCase();

let myName = "Sujon Hossain"; // implicit type declaration

console.log(course, myName);

/**
 *  Reference type
 * - object
 * - array
 */

const arr: string[] = ['a', 'b', 'c']; // string array
const arr2: Array<string> = ['a', 'b', 'c']; // string array using generic type

const arr3: number[] = [1, 2, 3]; // number array using primitive type
const arr4: Array<number> = [1, 2, 3]; // number array using generic type

const mixedArr: (string | number)[] = ["Sujon", 160, '3rd year']; // mixed array using union type
const mixedArr2: Array<string | number> = ["Sujon", 160, '3rd year']; // mixed array using generic type

type stringNumber = string | number;

const mixedArr3: stringNumber[] = ["Sujon", 160, '3rd year']; // mixed array using type alias

/**
 * Tuple type
 */

const user: [number, string] = [1, 'Sujon']; // tuple type

/**
 * Object type
 */
type User = {
    id: number,
    name: string;
    readonly company: string;
};
const user2: User = {
    id: 1,
    name: 'Sujon',
    company: 'Ollyo'
};

// user2.company = 'JoomShaper'; // error
