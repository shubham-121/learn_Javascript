const Person=function(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
};

const jonas=new Person("Jonas","1994")
const shubham=new Person("shubham",2002)
console.log("\n",jonas,shubham)

//1. New empty object is created {};
//2. function is callled and this is set to empty obj, this={};
//3. empty obj {}, is linked to prototype;
//4. function automatically return  {}
