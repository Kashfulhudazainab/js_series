//for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

let myarray=["ugfyf","jhj","vbhjgyug"];

 for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
 }

 //keywords

 //break to stop the loop
 //continue to carry on process(only one jump not out of loop)

 //while loop

 let i=0;

 while (i<=10) {
    console.log(`vue is ${i}`)
    i=i+2;
 }

 //do while 
 //first execute then check 
let score=1;
 do {
    console.log(`score is ${score}`);
    score++;
 } while (score<=10);


 // for of loop

 let arr=[7,8,9,5,3,8]

 for (const num of arr) {
    console.log(num);
 }

 let vari="greetings"

 for (const greet of vari) {
    console.log(`each char is ${greet}`)
 }

 //maps
//remember order in objects 
//no dupiaction

const map=new Map()
map.set('in',"india")
map.set('ind',"in")
map.set('id',"ind")
map.set('ia',"indi")
map.set('i',"india")

console.log(map);

for (const key of map) {
    console.log(key);   //full array
}

for (const [key, value] of map) {
    console.log(key," ", value);   //array destruction
}

const myobj={
   ' game1':"fg",
   'game 2':"ghjf"
}   // for loop cannot be used 
//for in loop 

for (const key in myobj) {
   console.log(`${key} is ${myobj[key]}`);   
    }


//for in loop gives only keys in arrays

const progamming=["js","cpp","gy"]

for (const key in progamming) {
    console.log(key)  //0,1,2
console.log(progamming[key])  //0 js 1 cpp 2 gy
}

//for each loop
const coding=["js","python","cppp","ruby"]

coding.forEach(function (val) {
console.log(val);
})

coding.forEach( (val) => {
    console.log(val);
})

function printme(item){
    console.log(item);
}

coding.forEach(printme);

coding.forEach( (item, index, arr) =>{
    console.log(item,index,arr);
}
)

//objects in array

const mycoding=[
    {
        languagename:"js",
        file:"j_s"
    },
    {
        languagename:"cpp",
        file:"c++"
    },
    {
        languagename:"ruby",
        file:"rb"
    },
    {
        languagename:"execution",
        file:"exe"
    }
    
]

mycoding.forEach( (item) => {
console.log(item.languagename)
}
)