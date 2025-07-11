//const coding=["js","python","cppp","ruby"]

// const values = coding.forEach((val) => {
// console.log(val);
// return item;
// })
// //for each didnt return any value
// console.log(values); //undefined

const mynums=[9,8,7,6,5,4,3,2,1];

//const newnums=mynums.filter( (num) => num>5)  //call back

//in case we open he scope return is mandatory
//const newnums=mynums.filter( (num) =>{
//     return num>5
//     })
// console.log(newnums);  //6,7,8,9

const newnums=[]

mynums.forEach( (num)=> {
if(num>4){
    newnums.push(num);
}
})
console.log(newnums);

const mynumss=[1,2,3,4,5,6,7,8,9]

const mynu=mynumss.map( (num) => num+10)

const mynumm=mynumss.map( (num) => num*10).map( (num) =>num+1).filter( (num) => num>=40)

//reduce 
const mynewnum =[9,8,7]

// const mytotal= mynewnum.reduce( function(acc,currval){
//     return acc+currval;
// },0)

const mytotal=mynewnum.reduce ((acc,curr) => acc+curr,0)

console.log(mytotal)