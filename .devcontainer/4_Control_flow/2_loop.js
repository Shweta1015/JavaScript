//FOR LOOP
let myArray = ["Twin Roses", "Obsession", " Healed"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(element);
}

//WHILE LOOP
let index = 2;
while (index <= 10) {
   // console.log(`value of index is ${index}`);
    index += 2;
}

//DO-WHILE LOOP
let score = 1;
do {
    //console.log(`Score is ${score}`);
    score++;
}while(score <= 10);

//FOR-EACH 
const greetings = "HAR HAR MAHADEV.....!!";
for (const greet of greetings){
   // console.log(`Each char is ${greet}`);
}


//MAP
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
console.log(map);

//print in key-value pair
for (const [key, value] of map){
    console.log(key, ':', value);
}

