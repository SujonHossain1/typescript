interface ICrush<T, U = null> {
    name: string;
    age: number;
    husband: T,
    job?: U;
}

const crush: ICrush<string> = {
    name: 'Sarlina Hossain',
    age: 25,
    husband: 'Unknown',
};

const crush3: ICrush<string, string> = {
    name: 'Sarlina Hossain',
    age: 25,
    husband: 'Unknown',
    job: 'Actor'
};

const meAtMyCrush = <T>(obj: T) => {
    const crush = "My Crush Sarlina Hossain";

    const newObj = {
        ...obj,
        crush
    };

    return newObj;
};

const newCrush = {
    name: 'Sujon Hossain',
    age: 23,
    wife: 'Sarlina Hossain',
};

const result = meAtMyCrush(newCrush);
