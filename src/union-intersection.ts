type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};

enum Level {
    Junior = 'Junior',
    Mid = 'Mid',
    Senior = 'Senior'
}
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    // level: 'Junior' | 'Mid' | 'Senior'; // union type (is good practice)
    level: Level;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = { // union type
    name: 'Sujon',
    expertise: 'JavaScript',
    experience: 2
};

const newDeveloper2: NoobDeveloper & JuniorDeveloper = { // intersection type
    name: 'Sujon',
    expertise: 'JavaScript',
    experience: 2
};

const newDeveloper3: NextLevelDeveloper = {
    name: 'Sujon',
    expertise: 'JavaScript',
    experience: 2,
    level: Level.Mid,
    leadershipExperience: 1
};