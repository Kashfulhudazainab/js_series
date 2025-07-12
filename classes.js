//After ES6

class user{
    constructor(username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass;
    }

    encrptpass(){
        return `${this.pass}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new user("huda","gggh","123")

console.log(chai.encrptpass());