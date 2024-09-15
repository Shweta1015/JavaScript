/*There are 2 types of datatype ie. primitive and non primitive 
1: Primitive: means pass by value (7 types)
String, Number, Boolean, BigInt, null, undefined, Symbol

2: Non-Primitive: means pass by reference
 Array, Objects, Functions*/

let score = 33;
console.log(typeof score)  
// OR console.log(typeof (score))
// output: number

//Now we set the value of score in string and then pass the value to another variable by converting in Number type
score = "33abc"
let valueInNuber = Number(score);
console.log(typeof valueInNuber);
console.log(valueInNuber);
/* output: Number(type)
NaN(Not a number)  because abc cannot be converted into Number */

//now we set score as true and then covert ot Number
score = true
valueInNuber = Number(score);
console.log(valueInNuber);
//output: 1 (becoz true = 1) if false then 0.

//now we will covert a Number/String into Boolean
let check = 1;
let checkBoolean = Boolean(check);
console.log(checkBoolean);
/*output: true(becoz of 1)
if 0 => false, if ""(empty string) => false, if"ShivPArvati" => true */