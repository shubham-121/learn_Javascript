//ES6 classes         2 ways:-
//1-class expressions
// const Davis = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey, ${this.firstName}`);
//   }
// };

//2-class declaration            //use this
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`Hey, ${this.firstName}`);
  }
}

const jessica = new PersonCl('jessica', 2002);
console.log(jessica);

jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

//1- classes works only in Strict mode
//2- classes are first calss citizens i.e they can be passed and returned using functions
//3- classes are hoisted  i.e they cannot be used until they are declared
