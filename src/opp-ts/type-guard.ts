type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: string;
};

function userInfo(user: NormalUserType | AdminUserType) {
  if ('role' in user) {
    console.log(`${user.name} is an admin`);
  } else {
    console.log(`${user.name} is a normal user`);
  }
}

/***
 * Instance of guard;
 */

class Animal2 {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound(sound: string) {
    console.log(`${this.name} make ${sound} sound`);
  }
}

class Dog extends Animal2 {
  bread: string;

  constructor(name: string, species: string, bread: string) {
    super(name, species);
    this.bread = bread;
  }

  makeBark() {
    console.log(`${this.name} make bark sound`);
  }
}

class Cat extends Animal2 {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeow() {
    console.log(`${this.name} make meow sound`);
  }
}

const animal1 = new Dog('Doggy', 'Dog', 'Pug'); // instance of Dog
const animal2 = new Cat('Kitty', 'Cat'); // instance of Cat

function getAnimal(animal: Animal2) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeow();
  } else {
    animal.makeSound('Yuuu');
  }
}

getAnimal(animal1);

function isDog(animal: Animal2): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal2): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal2(animal: Animal2) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound('uuuu');
  }
}
