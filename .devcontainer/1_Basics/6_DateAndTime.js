/*NOTE: months is 0 based indexing. In output month will appear first then date then year*/


//Dates
let currentDate = new Date();
console.log(typeof currentDate);  //object

// console.log(currentDate);     //not readable by default json
// console.log(currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleString());

//set date and time by urself
let myDate = new Date(23, 8, 22);
console.log(myDate.toLocaleString());

let dateTime = new Date(2024, 8, 22, 9, 5, 0);   //YY-MM-DD-HH-MM-SS
console.log(dateTime.toLocaleString());

let date1 = new Date("09-22-2003");   //MM-DD-YY
console.log(date1.toLocaleString());
console.log(date1.getTime());

//get function to get: year, month, day, hr, min, sec etc
let date2 = new Date();
console.log(date2.getMonth() + 1);           //becoz of 0 based indexing

//can customize 
date2.toLocaleString('default',{
    weekday: "long"
}) 







