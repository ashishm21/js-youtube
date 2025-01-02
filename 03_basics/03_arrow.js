const user = {
    username : "ashish",
    price : 999,

    welcomeMessage : function(){
       console.log(`${this.username}, welcome to website`);
       console.log(this);
       
    }

}
user.welcomeMessage() // here, this was contexting to ashish
user.username = "ajay"
user.welcomeMessage() // here, this was contexting to ajay


console.log(this);
// in browser global object is window, and in node it is global