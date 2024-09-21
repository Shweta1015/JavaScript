//this : specifies the current context.

const product = {
    brand: "Loreal",
    price: "449",

    welcomeMessage: function(){
        console.log(`welcome to, ${this.brand}`);
        console.log(this);      
    }
}

// product.welcomeMessage();
// product.brand = "Coco Honey";
// product.welcomeMessage();
//console.log(this);

//ARROW FUNCTION
//this does't work in arrow function. It will give undefined or empty output
const one = () => {
    let user = "admin"
    console.log(this);
}
one();

const addNum = (num1, num2) =>{
    return num1 + num2;
} 
console.log(addNum(3,4));

//IMPLICITE RETURN : If the function is of one line ie. return line
// const addNum = (num1, num2) => (num1+ num2);

//if we want to return object by implicite return then we have to wrap it in{}
const example = () => ({username: "Admin"})
console.log(example());



