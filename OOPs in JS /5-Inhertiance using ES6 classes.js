//Inhertiance using ES6 classes//Inhertiance using ES6 classes
class PersonCl {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullname}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set fullname(name) {
  //   if (name.includes(' ')) this.fullname = name;
  //   else alert(`${name} is not full name!`);
  // }

  // get fullname() {
  //   return this.fullname;
  // }

  static hey() {
    console.log('Hey there');
  }
}

class student1 extends PersonCl {
  constructor(fullname, birthYear, course) {
    super(fullname, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hey there ${this.fullname} and i study ${this.course}`);
  }

  calcAge() {
    console.log(2037 - this.birthYear + 10);
  }
}

const martha = new student1('Matha jones', 2012, 'computer science');
martha.introduce();
martha.calcAge();

const jonas = new student1('Jonas', 2000, 'Psychology');
const shubham = new student1('shubham bhatt', 2002);

shubham.introduce();
shubham.calcAge();
