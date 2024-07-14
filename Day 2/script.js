// ! Day 2: Operators

// ! Activity 1: Arithmetic Operator
let num1 = 19;
let num2 = 293;

let add = num1 + num2
console.log(add)

let substract = num2 - num1;
console.log(substract);

let multiply = num1 * num2;
console.log(multiply);

let divide = num2/num1;
console.log(divide);

let remainder = num2 % num1;
console.log(remainder);

// ! Acitivity 2: Assignment Operator
num1 += 2;
console.log(num1);

num2 -= 19;
console.log(num2);

// ! Comparison Operator
let oneNum = 12;
let twoNum = 23;

console.log(oneNum > twoNum);
console.log(oneNum < twoNum);
console.log(oneNum >= twoNum);
console.log(oneNum <= twoNum);
console.log(oneNum == twoNum);
console.log(oneNum === twoNum);

// ! Logical Operator
let numOne = 23;
let numTwo = 23;

let equal = numOne == numTwo;
let greater = oneNum > numTwo;
let lesser = oneNum < numTwo;
let strictEqual = numOne === numTwo

// * And operator -- both the condition should be true then only the and operator will work
console.log(equal && greater);
console.log(equal && strictEqual);

// * Or operator -- either one of the condition should be true the or operator will work
console.log(equal || greater);

// ! not operator
console.log(numOne != numTwo);
console.log(!true);

// ! Activity Operator: Ternary Operator
// condition ? true : false
numOne == numTwo ? console.log("true condition") : console.log("false condition");

// ! Feature Request

// * Arithmetic Operations Script:

let one = 122;
let two = 24;
console.log(`Addition is: ${one + two}`);
console.log(`Substraction is: ${one - two}`);
console.log(`Multiplication is: ${one * two}`);
console.log(`Division is: ${one / two}`);
console.log(`Remainder is: ${one % two}`);

// * Comparison and logical operators Script:
one = 28;
two = 29;

// ! comprison Operators
console.log(one < two);
console.log(one > two);
console.log(one <= two);
console.log(one >= two);
console.log(one == two);
console.log(one === two);

// ! logical operators
console.log(one < two && one <= two);
console.log(one > two && one <= two);
console.log(one < two || one <= two);
console.log(one > two || one <= two);
console.log(!false);

// * Ternary Operator Script:
let num = -11;

num >= 0 ? console.log("entered num is +ve") : console.log("Entered num is -ve");