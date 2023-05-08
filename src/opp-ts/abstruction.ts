// interface IVehicle {
//   name: string;
//   model: string;
// }

// const car: IVehicle = {
//   name: 'Toyota',
//   model: 'Corolla',
// };

// const bike: IVehicle = {
//   name: 'Honda',
//   model: 'CBR',
// };

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car implements IVehicle {
  constructor(public name: string, public model: string) {}

  startEngine(): void {
    console.log('Car engine started');
  }
  stopEngine(): void {
    console.log('Car engine stopped');
  }
  move(): void {
    console.log('Car is moving');
  }
}

const car = new Car('Toyota', 'Corolla');
car.startEngine();
car.move();
car.stopEngine();

/**
 * Abstract class
 */

abstract class Vehicle {
  constructor(public name: string, public model: string) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
}

class Car2 extends Vehicle {
  constructor(public name: string, public model: string) {
    super(name, model);
  }

  startEngine(): void {
    console.log('Car engine started');
  }
  stopEngine(): void {
    console.log('Car engine stopped');
  }
  move(): void {
    console.log('Car is moving');
  }
}
