//object: set of key-value pairs

//symbol
const mySym = Symbol("Key11")


//object literals
const User = {
    name: "Shweta",
    "full name": "Shweta Choudhary",
    [mySym]: "Key12",         //add symbol in object
    age: 21,
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

//ways to access obj
console.log(User.name);
console.log(User["name"]);
console.log(User[mySym]);

//change values 
User.isLoggedIn = true;

//freeze obj if don't want to make any change
//Object.freeze(User);
//console.log(User);

//create function in Object
User.greet = function(){
    console.log(`Hello from, ${this.name}`);
}
console.log(User.greet());







