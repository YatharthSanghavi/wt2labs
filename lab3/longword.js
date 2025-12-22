let a="hi hello how are you doings"
let s=a.split(" ");
max=""
for(const ele of s){
    if(ele.length>max.length){
        max=ele;
    }
}
console.log(max);