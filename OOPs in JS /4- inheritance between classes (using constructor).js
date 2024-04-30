
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // Person(firstName, birthYear); //regular func call 'this' is set to undefinde. So we also set this keyword using call( func)
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking the prototype manually
Student.prototype = Object.create(Person.prototype); //student.prototype inherits from person.prototype


Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I studey in ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
Student.prototype.constructor = Student;
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);
