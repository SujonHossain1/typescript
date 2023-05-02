type CrushType = { // type alias
    name: string;
    age?: number;
    profession: string;
    address: string;
};

const crush1: CrushType = {
    name: 'Moina Pakhi',
    profession: 'Singer',
    address: 'Dhaka'
};

const crush2: CrushType = {
    name: 'Tia Pakhi',
    profession: 'CSE Student',
    address: 'Dhaka'
};


console.log(crush1, crush2);