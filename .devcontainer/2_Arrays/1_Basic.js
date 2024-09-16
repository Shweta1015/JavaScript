//it can contain different type of values in one array
const myArr = [0, 1, 2, 3, "Shweta", 33.60];

//to access array : using index
console.log(myArr[2]);

//Array Methods
myArr.push(80);
console.log(myArr);

myArr.pop();   //removes the last value
console.log(myArr);

myArr.unshift(81);    //adds at initial index
console.log(myArr);

myArr.shift();        //removes value from initial index
console.log(myArr);

console.log(myArr.includes(2));     //check if present or not
console.log(myArr.indexOf(33.6));   //check index 

const newArr = myArr.join();   //converts into string
console.log(newArr);

//slice and splice
let temp = [10,20,30,40,50,60,70];
console.log("A", temp);

let sliceArr = temp.slice(1,4);    //it gives a subarray and doesn't harm the original array
console.log(sliceArr);        
console.log("B", temp);


let spliceArr = temp.splice(1,4);   //it eliminates the subarray from original array
console.log(spliceArr);
console.log("C", temp);






