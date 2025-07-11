// let a=10;
// const b=67;
// var c=90;



//{}  //scope
if(true){
let a=10;
const b=67;
var c=90;   //var cannot be used bcoz of scope issue
}

//console.log(a);  //10
//console.log(b);  //67
//console.log(c);   //90

function one(){
    const username="huda";
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

one();
//child can access parent variable

function addone(value){   //function
return value+1;
}

addone(5); 

const addtwo=function(value){   //expression(function can not be called before declaration)
    return value+2
}

addtwo(8);