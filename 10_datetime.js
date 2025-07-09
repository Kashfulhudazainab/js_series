
let myDate=new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); //object

//let mynewdate=new Date(2023,0,23)   //month starts from 0 
//let mynewdate=new Date("2023-01-12") 
let mynewdate=new Date("2-04-2025")  //mm-dd-yyyy

console.log(mynewdate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)

console.log(mynewdate.getTime())  //easy to compare
console.log(Math.floor(Date.now()/1000));    //compare in milliseconds

let neww=new Date();
console.log(neww.getDay())
