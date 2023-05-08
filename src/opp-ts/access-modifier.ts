// class BankAccount {
//   id: number;
//   name: string;
//   //   private _balance: number;
//   protected _balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }

//   getBalance() {
//     console.log(`${this.name} has balance of ${this._balance}`);
//   }

//   addDeposit(amount: number) {
//     this._balance += amount;
//     this.getBalance();
//   }
// }

// const bankAccount1 = new BankAccount(1, 'John Doe', 1000);
// console.log(bankAccount1);

// class StudentAccount extends BankAccount {
//   constructor(id: number, name: string, _balance: number) {
//     super(id, name, _balance);
//   }

//   test() {
//     this._balance = 100;
//   }
// }

// const studentAccount1 = new StudentAccount(2, 'Jane Doe', 2000);

// console.log(studentAccount1);
// studentAccount1.getBalance();
