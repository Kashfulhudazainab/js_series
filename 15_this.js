const user={
    name:"huda",
    price:65566644,

    welcomemessage:function(){
        console.log(`${this.name} , wlcm to website`)
        console.log(this);  //current contxt
    }
}

user.welcomemessage()  //huda , wlcm to website
user.name="sam"
user.welcomemessage()  //sam , wlcm to website

console.log(this);  //{}  no global object

function chai(){
    console.log(this)   //multiple evaluations

}

// function chai(){
//     let uname="huda";
//     console.log(this.uname)   //undefined
    
// }

//arrow function
const chai =() => {
      let uname="huda";
    console.log(this)   //{}
}

//chai()

const addtwoo = (num1,num2)=> {
return num1+num2;
}  

//or
//const addtwoo = (num1,num2)=> return num1+num2;   //no need for return
//const addtwoo = (num1,num2)=> return (num1+num2);  //no need for return

console.log(addtwoo(3,4))