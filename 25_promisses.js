//promisses are mostly consumed than cteated

//fetch('https:/sndrhhcg.com').then().catch().final()

const promiseOne= new Promise(function(resolve,reject){
//do an asyn task
//db calls
setTimeout(function(){
    console.log('async tsk is complete')
    resolve(); //connect with then()
},1000)
});

promiseOne.then(function(){
    console.log("promise is consumed")
})

new Promise(function(resolve,reject){
    setTimeout( function(){
        console.log('asyn 2');
        resolve();
    },1000)
}).then(function(){
    console.log('asyn 2is resolved')
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"chai",email:"chai@example"})
    },1000)
})

promisethree.then(function(user){
    console.log(user)
})


const promisfour=new Promise(function(){
    setTimeout(function(){
        let error=true;
        if(!error){
            reslove({username:"chai4",email:"chai@example4"})
        }else{
            reject('error')
        }
    })
})

promisefour.then( (user) =>{
    console.log(user)
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
console.log('the promise ids either resolved or rejected')
})

const promisefive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true;
        if(!error){
            reslove({username:"chai5",email:"chai@example5"})
        }else{
            reject('error,5')
        }
    })
})

async function consumedprofive(){
    try{
    const response=await promisefive;  //object
    console.log(response);
    }catch(error){
        console.log(error);
        }
}

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))