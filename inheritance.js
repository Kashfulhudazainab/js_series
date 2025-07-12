class user{
    constructor(username){
        this.username=username;
    }

    logme(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email, pass){
super(username);

 this.email=email;
        this.pass=pass;
    }
    addcourse(){
        console.log(`new teacher:${this.username}`)
    }
}

const retn=new teacher("huda","ghg","568")

retn.addcourse()