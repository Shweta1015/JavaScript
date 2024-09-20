const user = new Object()  //singleton obj
const user1 = {}           //non-singleton obj

user.id = "121";
user.name = "tony";
user.isLoggedIn = false;
//console.log(user);

/* Objects are mutable: if i create an object and then gives the same reference to other object, if we make 
changes in the second object the 1st object will be modified automatically as they share same address.*/
const person = {
    name: "Shweta",
    age: 21,
    language: "javascript"
}

const x = person;
x.age = 20;
//console.log(person);

//the delete keyword delete the property of object
delete person.language; //or delete person["language"];
console.log(person);



//ways to concarinate objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
//const obj3 = {obj1, obj2};    //way1
//const obj3 = Object.assign({}, obj1, obj2)   ///way2
const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "simple@gmail.com"
    },
    {
        id: 2,
        email: "smile@gmail.com"
    }
]

console.log(users[1].email);

//access all keys/values of an obj
//console.log(Object.keys(regularUser));
//console.log(Object.values(regularUser));
//console.log(Object.entries(regularUser));       //convert each key-value pair in seperate array
//console.log(regularUser.hasOwnProperty('fullname')); 


//NESTED OBJECTS:
const regularUser = {
    email: "harry@gmail.com",
    fullname: {
        userfullName: {
            firstName: "Harry",
            lastName: "Sharma"
        }
    } 
}
//console.log(regularUser.fullname.userfullName.firstName); or console.log(regularUser["fullname"]["firstName"]);

//DISPLAYING OBJECT
const member ={
    name: "Yoyo",
    age: 26,
    city: "New York"
}
document.getElementById("demo").innerHTML = member;

/* OBJECT DE-STRUCTURE: generally if we want to access object property we do: objName.propertyName , suppose we 
want to access the property several time then each time we have to write : objName.propertyName which is hectic 
so to get rid of this we de structur the object ie.  is a syntax that allows you to extract values from objects
and assign them to variables in a concise way.*/
const course = {
    courseName: "Javascript",
    price: 2999,
    courseInstructor: "Shweta"
}

//without deconstruct
const name = course.courseName;
const rate = course.price;

//with deconstruct
const {Name, price, teacher} = person;






