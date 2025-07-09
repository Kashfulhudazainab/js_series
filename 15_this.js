const user={
    name:"huda",
    price:65566644,

    welcomemessage:function(){
        console.log(`${this.name} , wlcm to website`)
    }
}

user.welcomemessage()
user.name="sam"
user.welcomemessage()