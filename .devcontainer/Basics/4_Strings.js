 // String concatination
 const name = "Shweta"
 const count = "101"

 // to print string
 console.log("Hello my name is"+name +"and my repo is" + count );    //not a good practise
 console.log(`Hello my name is ${name} and my repo is ${count}`);    //good practise 

const StudentName = new String('Shweta')
console.log(StudentName[0]);

//string provides lots of inbuilt functions. eg: 
console.log(StudentName.length);
console.log(StudentName.toUpperCase());
console.log(StudentName.charAt(5));
console.log(StudentName.indexOf('w'));
const newString = StudentName.substring(0,5);   //last index will not be included
console.log(newString);

//trim
const anotherString = "      Shweta       ";
console.log(anotherString);
console.log(anotherString.trim());     //to ignore extra spaces

//replace
const url = "https://shweta.com/shweta%20choudhary"
console.log(url.replace('%20', '_'));

//to check if present or not
console.log(url.includes('shweta'));

// to split string
const arrayString = "shweta_Choudhary_Javascript";
console.log(arrayString.split('_')); //split by _


