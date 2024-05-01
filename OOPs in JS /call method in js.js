// this keyword
const student1 = {
  name: 'Priya',
  printName: function () {
    console.log(this.name);
  },
};

const student2 = {
  age: 21,
  name: 'abhinav',
  getAge() {
    console.log(`Hey there ${this.name}, welcome, your age is ${this.age}`);
  },
};

const student3 = {
  name: 'Raman',
  age: 69,
};

student1.printName();

student1.printName.call(student2);

student2.getAge.call(student3);
// console.log(this.student1);
