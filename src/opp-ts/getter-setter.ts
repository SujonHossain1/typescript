class BankAccount {
  id: number;
  name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    this._balance += amount;
  }
}

const bankAccount1 = new BankAccount(1, 'John Doe', 50000);
bankAccount1.balance = 1000;

console.log({ bankAccount: bankAccount1.balance });
