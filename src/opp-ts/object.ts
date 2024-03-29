class Animal {
  // public name: string;
  // public species: string;
  // public sound: string;

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal('Dog', 'Canis', 'Woof');
const cat = new Animal('Cat', 'Felis', 'Meow');
