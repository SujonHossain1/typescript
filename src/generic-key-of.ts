type PersonType = {
    name: string;
    age: number;
    address: string;
};

type newType = 'name' | 'age' | 'address';
type newTypeWithKeyOf = keyof PersonType;

const dd: newType = 'name';
const dd2: newTypeWithKeyOf = 'name';


function getProp<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key]);
    return obj[key];
}

getProp({ name: 'John', age: 35 }, 'name');

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];

}



const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users, 0, 'name'));

type Data = { num1: number; };





interface Person {

    firstName: string;

    lastName: string;

}



function fullName<T extends Person>(person: T): string {

    return `${person.firstName} ${person.lastName}`;

}

