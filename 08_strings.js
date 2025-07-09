//string can be in single or double quote

const name="huda"
const repoCount=50

// console.log(name+repoCount+"val"+70)  // huda50val70

// console.log(`Hello my name is ${name} and repoCount is ${repoCount}`)
// hello my name is huda and repoCount is 50
// ${}   variable nae can be written inside {} along with any functions methods

const gameName=new String("huda") //onject declaration
//same delaration but when run in console it gives the output as
// String{"huda"}
// 0:"h"
// 1:"u"
// 2:"d"
// 3:"a"
//legth:8
// alomg with methods

// console.log(gameName);  // huda
// console.log(gameName[0]);  //h
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));  // NOT PRESENT SO -1
// console.log(gameName.indexOf('a'));

const game=new String("hudaa-za");

const newString=game.substring(1,4); //start from 1 index and add 4 chars
console.log(newString);

const anString=game.slice(-4,3);  //uda
console.log(anString);

const annString=game.slice(4,3);  //uda
console.log(annString);

const antString="    hitest    ";  //to avoid spaces
console.log(antString.trim());

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-'))
console.log(url.includes('hitesh'))  //finds either true or false

//string into array

console.log(game.split('-'))   //based on -
