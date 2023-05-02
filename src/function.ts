const friends = ['Harry', 'Ron', 'Hermione'];
const newFriends = ['Nevilla', 'Ima', "Saima", 'Parvati'];

friends.push(...newFriends); // Spread Operator

const gettingFriends = (greeting: string, ...friends: string[]) => {  // Rest Parameter
    friends.forEach(friend => console.log(`${greeting} ${friend}`));
};

gettingFriends('Hello', ...friends);

type IUser = {
    name: string;
    age: number;
    job: string;
    company?: string;
};

const person: IUser = {
    name: 'Sujon',
    age: 24,
    job: 'Web Developer'
};
