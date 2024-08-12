//! Activity 1: Variable Declaration

var num = 11;
console.log(num);

let name = "Ayush Pawar"
console.log(name);

// ! Activity 2: Constant Declaration

const bool = true;
console.log(bool);

// ! Activity 3: Data Types

let num1 = 2005;
console.log(typeof(num1));

let name2 = "Ayush";
console.log(typeof(name2));

let boolVal = false;
console.log(typeof(boolVal));

let obj = {
    name: "Ayush Pawar",
    age : 18
}
console.log(typeof(obj));

let carsName = ["Range Rover", "Defender", "Discovery", "TATA Safari"];
console.log(typeof(carsName));

// ! Activity 4: Reassiging Variables
let val1 = "captian america"
console.log(val1);

val1 = "iron man"
console.log(val1);

// ! Activity 5: Understanding const
const car = "Range Rover";
console.log(car);

// car = "Defender"
console.log(car);

// * Feature Request:
// ? 1.Variable Types Console log:
let numVal = 18;
let strVal = "ayush";
let undefinedVal;
let nullVal = null;
let bolVal = true;
let objVal = {
    name: "Ayush",
    age : 18
}
let arrVal = ["Millionare", "Billionare", "Trillionare"];

console.log(`number: ${numVal} & type of number is: ${typeof(numVal)}`);
console.log(`string: ${strVal} & type of string is: ${typeof(strVal)}`);
console.log(`undefined: ${undefinedVal} & type of undefined is: ${typeof(undefinedVal)}`);
console.log(`Null: ${nullVal} & type of Null is: ${typeof(nullVal)}`);
console.log(`boolean: ${bolVal} & type of boolean is: ${typeof(bolVal)}`);
console.log(`objVal: ${JSON.stringify(objVal)} & type of objVal is: ${typeof(objVal)}`);
console.log(`Array: ${arrVal} & type of Array is: ${typeof(arrVal)}`);

// ? 2.Reassigment Demo:
let studentName = "Ayush";
console.log(studentName);

studentName = 'Piyush';
console.log(studentName);

const marks = 89;
console.log(marks);

marks = 90;     //Assignment to constant variable is not allowed

// var and let are mutable while const are immutable.