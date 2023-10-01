const alphabets=['aaaa','bbbbb','c','ddd','e']
const [a,b]=alphabets;
console.log(a,b)

const [a1,,c1]=alphabets;
console.log(a1,c1)

const [newa,,...rest]=alphabets
console.log(rest)



const obj1={
    name:'shubham',
    age:21,
    sex:'male',
    college:{
        name:'GEHU',
        sem:7,
        branch:'cse'
    }
}

// const [name,branch,...rest]=[obj1.name, obj1.college.branch]
// console.log(name)
// console.log(branch)
// console.log(rest.age)
const {name, college: {branch,sem} }=obj1
// console.log(name,branch,sem)

function print({name,age,college:{branch}})
{
    console.log(`name:${name}, age:${age},branch:${branch}`)
}
print(obj1)



const obj2={
    name:'rhagar',
    age:21,
    sex:'male',
    college:{
        name:'GEHU',
        sem:7,
        branch:'ece'
    }
}

const arr3={...obj2,...obj1}; //obj1 overwrites obj2
console.log(arr3)
