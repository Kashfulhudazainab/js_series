//immediatelt invoked function expression

//if we dont want to pollute the internal values by global variable or immediate running 

//sysntax:-(function)(function execution)

(function chai(){
    //named iife
    console.log(`db connected`)   
})();

//arrow function
((mname)=>{
    //unnamed iife
    console.log(`db connected  ${mname}`)   
})("huda");