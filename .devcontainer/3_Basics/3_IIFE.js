/*Immediately Invoked Function Expressions(IIFE): They are typically used to create a local scope for variables
 to prevent them from polluting the global scope. IIFEs are commonly used to create private scope allowing
variables and functions to be encapsulated and inaccessible from outside the function. */

//Basic function
function code(){
    console.log(`DB CONNECTED`);
}
code();  //function calling

//immediate invoke: first parenthesis ie.() for function and second () is for calling.
(function coding(){   //named IIFE ie name is coding 
    console.log(`You can access database.`);   
})();

//arrow function
((name) => {
    console.log(`Connection using Arrow function for ${name}`);  
})('Shweta');


//IIFE in variable
var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();

console.log(result); 