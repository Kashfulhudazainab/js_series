const myArr=[2,9,8,7,6,5]

console.log(myArr[3]); //7

const myheros=["avcb","bgy","fttd"];
const myarr2=new Array(1,2,3,4);

//arrays methods

myArr.push(6); //add value in end
console.log(myArr); 

myArr.pop();  // remove last value
console.log(myArr); 

myArr.unshift(9);  // add value at start 
console.log(myArr); 

myArr.shift(); // remove from start
console.log(myArr); 

//questions
console.log(myArr.includes(9)); //true or false 
console.log(myArr.indexOf(9)); // either index or -1 if not present

const newnew=myArr.join()  // not in form of array now it is string not array

//slice and splice

console.log("a",myArr);  //original array

const myn1=myArr.slice(1,3)  //  start from index 1 and add 2(total 2)
console.log(myn1);
console.log("b",myArr); //after slice original array didnot change

const myn2=myArr.splice(1,3) // start from index 1 and add 3(total 3)
console.log(myn2);
console.log("c",myArr); //after splice original array become myArr-myn2

const hero=["mnb","nbh"];
const name=["sre","vjhvh "]

//hero.push(name)
console.log(hero) //[ 'mnb', 'nbh', [ 'sre', 'vjhvh ' ] ]

//hero.concat(name)
console.log(hero) //[ 'mnb', 'nbh', [ 'sre', 'vjhvh ' ] ]

//const all=hero.concat(name)
//console.log(all)    //[ 'mnb', 'nbh', 'sre', 'vjhvh ' ]

//alternate for oncat

const allnew=[...hero,...name]
console.log(allnew)  //[ 'mnb', 'nbh', 'sre', 'vjhvh ' ]

const anotheraray=[1,2,3,[4,5,6],[8,9,0,[6,7]]]

const realarray=anotheraray.flat(Infinity)
console.log(realarray)


console.log(Array.from("huda"))   //[ 'h', 'u', 'd', 'a' ]
console.log(Array.from({names :"huda"}))    //object