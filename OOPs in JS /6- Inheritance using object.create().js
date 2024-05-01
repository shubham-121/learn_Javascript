//Using object.create()
//Most easiest way
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstname, birthYear) {
    this.firstName = firstname;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstname, birthYear, course) {
  PersonProto.init.call(this, firstname, birthYear);
  this.course = course;
};
console.log(StudentProto.init);

StudentProto.introduce = function () {
  console.log(`Hi there i am ${this.firstName}`);
};

const jay = Object.create(StudentProto);
jay.init('JAY', 2002);
jay.introduce();
jay.calcAge();

