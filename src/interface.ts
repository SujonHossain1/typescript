import { type } from "os";

type User2 = {
    name: string;
    age: number;
};

interface IUser2 {
    name: string;
    age: number;
}

type extendedUser = User2 & {
    role: string;
};

interface IExtendedUser {
    role: string;
}

type addTwoNumberType = (number1: number, number2: number) => number; // type alias

const addTwoNumber: addTwoNumberType = (number1, number2) => number1 + number2;

interface IAddTwoNumber {
    (number1: number, number2: number): number;
}

const addTwoNumber2: IAddTwoNumber = (number1, number2) => number1 + number2;






