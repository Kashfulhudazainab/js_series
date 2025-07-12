function setuser(username){
    this.username=username;
}

function createuser(username,email,pass){
    this.email=email;
    this.password=this.password;

    setuser.call(this,username);
}

const chai=new createuser("user","gddg","123")
console.log(chai)