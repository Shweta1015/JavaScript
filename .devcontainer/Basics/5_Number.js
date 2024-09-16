//two ways to define a number
const score = 490;
const balance = new Number(390);

//convert number to string
console.log(balance.toString().length);

//to set no. of values after decimal point
console.log(balance.toFixed(2));

//precision(round of)
const number = 123.8966
console.log(number.toPrecision(4));

//to make numbers readable
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


//* ************MATHS************* */

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

//random
console.log(Math.random()) //it contains values always between 0 to 1.
console.log((Math.random() * 10) + 1);   //to get value more than 0 and 1. 1 is to ignore 0.

// if we have certain limit of numbers eg. between 10 to 20

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);







