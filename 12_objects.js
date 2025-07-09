//literal or constructor
//singleton-> single instance(not in literals)
//constructor method -> object.create

//object literals

const mySym=Symbol("key1")

const user={
    name:"huda",  //key:value
    age:20,
    contact:6754,
    mySym:"mykey1",  // data type string
    [mySym]:"mykey1",  // data type symbol
    isloggedin:false
}

console.log(user.name)  // dont use when the key has two parts separated by space
console.log(user["name"])

//Object.freeze(user)  //value can not be changed

user.greeting=function(){
    console.log("hello");
}
console.log(user.greeting)   //function reference


user.greetingtwo=function(){
    console.log(`hello, ${this.name}`);
}
console.log(user.greetingtwo)   

//onjects singleton or constructor

const tinderUser= new Object()

tinderUser.id="123gg"
tinderUser.name="huda"

//console.log(tinderUser);

const reg={
    email:"cffrsr",
    fullname:{
        userfull:"vhg",
        lastname:"awewaweew"
    }
}

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

//array can have multiple objs

const course={
    coursename:"ytt vy ftfti",
    price:89087,
    instructor:"tr"
}

const{coursename}=course;  //or const{coursename: name}=course;
console.log(coursename);

//api

// {
//     "coursename":"ytt vy ftfti",
//    " price":89087,
//     "instructor":"tr"
// }

[
    {},
    {},
    {}
]