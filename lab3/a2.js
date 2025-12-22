let a=[{name:'raj',age:12},{name:'het',age:24}]
let names=[];
let ages=[];
a.forEach(element => {
    let {name,age}=element;
    names.push(name);
    ages.push(age);
});
console.log(names);
console.log(ages);