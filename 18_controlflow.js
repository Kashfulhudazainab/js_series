if(true){

}else{

}
//>,<,<=,>=,!=
//=assignment
//==checking 
//===value+type checking 
const balance=1000;
//not good oractice
if(balance>500) console.log("test"),
console.log("test2");


const month=3;
switch (month){
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    case 4:
        console.log("apr")
        break;
       //case "feb": for string 

    default:
        console.log("not found")
        break;
}

const useremail="huda"
if(useremail){
    console.log("got");
}else{
    console.log("not found");
}

//falsy values:- false, 0, -0, BigInt 0n, null, undefined, nan, ""
//true values:- true,"0", 'false', " ", [],{}, function(){}

//to check empty array and object
//useremail.length===0;  //array
//Object.keys(user).length===0;   //object

//nullish coalescing opeator(??): null or undefined , handle error

let val1;
//val1=5??10;   //val1=5
//val1=null??10; //val1=10
//val1=undefined??15;   //val1=15

//ternary operator
//condition?true:false