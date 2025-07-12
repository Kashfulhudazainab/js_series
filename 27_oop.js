const user={
    username:"huda",
    logincount:0,
    signedin:true,

    getuserdetailds:function(){
        console.log("got details");
        console.log(`username:${this.username}`);
    }

}

console.log(user.username)
console.log(user.getuserdetailds())