
//This feature is not currently released 
//Encapsulation- keeping some data private in class so that it is not accessed from outside world

// 4  ways to be provided in fututre :
// 1- public fields
// 2- private fields
// 3- public methods
// 4- public methods

class Account {
  //1-public field
  locale = navigator.language;
  //2-private field
  #movements = [];
  #pin;
  constructor(name, currency, pin) {
    this.name = name;
    this.currency = currency;
    this.#pin = pin;

    console.log(`thanks for opening an account ${this.owner}`);
  }

  //3-public methods
  deposit(val) {
    this.#movements.push(val);
    return this; //in case of chaining
  }
  withdrawl(val) {
    this.deposit(-val);
    return this; //in case of chaining
  }
  getMovements() {
    return this.#movements;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan amount of ${val} sanctioned`);
      return this; //in case of chaining
    }
  }

  //4-private methods
  // #approveLoan(val) {
  //   return true;
  // }

  //protected method
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('shubhaam', 'INR', 6969);
// console.log(acc1);
// acc1.movements.push(1000);
// acc1.movements.push(-250);
acc1.deposit(1000);
acc1.deposit(1250);
console.log(acc1);

console.log(acc1.getMovements());
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

//Note: '#" is for private data  and "_" is for protected data

//Chaining
acc1.deposit(300).deposit(500).withdrawl(35).requestLoan(6969).withdrawl(4000);
console.log(acc1.getMovements());
