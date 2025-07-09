const bal=70;
console.log(bal)   // 70
const score=new Number(100);   // definig as anumber
console.log(score);  // [Number:100]

console.log(bal.toString());   // remain as 100 butdata type is string
console.log(bal.toString().length);
console.log(bal.toFixed(2));  //2 decimal points

const annumber=23.97755;
console.log(annumber);
console.log(annumber.toPrecision(3));  //exact three digits, also round off

const hun=123455000000;
console.log(hun.toLocaleString()) //us strandard number with commas
console.log(hun.toLocaleString('en-IN'))  //indian numbers

//max and min value

//Maths

console.log(Math); //object with properties

console.log(Math.abs(-4));  // -ve to +ve
console.log(Math.round(4.3));  //4
console.log(Math.ceil(4.2));  //upper value 5
console.log(Math.floor(4.8)); //lower value 4 
console.log(Math.min(4, 7, 90, 45, 34));  // 4

console.log(Math.random());  // random value between 0 and 1
console.log(Math.floor(Math.random()*10)+1); //betwen 1 and 9 

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min)