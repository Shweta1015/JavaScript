//FUNCTION: It is a block of code which is used to perform a particular task

//basic eg:
function addTwoNum(num1, num2){
    return num1 + num2;
}

// const result = addTwoNum(3, 0);
// console.log("Result: ", result);

function login(username){
    return `${username} logged in`
}
//console.log(login("Shweta"));

/*using rest/spread operator we can pass multiple values in a single parameter it will create an array */
function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(200,400,7000));

//another example using rest opeartor
function calculate(num1, num2, ...num3){
    return num3;
}
console.log(calculate(200,440,999,1024));      //output: [999, 1024]

const product = {
    brand: "sugar",
    price: 799
} 

function handleProduct(obj){
    console.log(`Name is ${obj.brand} and price is ${obj.price}`);    
}
handleProduct(product);

//STORE FUNCTION IN VARIABLE
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(2));


