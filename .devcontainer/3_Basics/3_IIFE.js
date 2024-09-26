//Immediately Invoked Function Expressions(IIFE)

//Basic
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