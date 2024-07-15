// Day 3: Control Structures

// ! Activity 1: if-Else
let num = -23;

if(num > 0){
    console.log("Positive Number");
}
else if(num == 0){
    console.log("Zero Number");
}
else {
    console.log("Negative Number");
}

let age = 1;

if (age>=18) console.log("eligible to vote");
else console.log("not eligible to vote");

// ! Activity 2: Nested If-Else Statements
let num1 = 23;
let num2 = 22;
let num3 = 43;
let largest;
if(num1 > num2){
    if(num1 > num3){
        largest = num1
    }else{
        largest = num3
    }
}else{
    if(num2 > num3){
        largest = num2
    }
    else{
        largest = num3;
    }
}

console.log(`largest number is: ${largest}`);

// ! Activity 3:Switch Case
let weekDays = 12;

switch (weekDays) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Friday");
        break;

    default:
        console.log("please enter any number within 1-7");
        break;
}

let marks = 20;
let grade;

switch (true) {
    case marks >= 90:
        grade = "A";
        break;
    case marks >= 75:
        grade = "B";
        break;
    case marks >= 50:
        grade = "C";
        break;
    case marks >= 35:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`Grade for marks ${marks} is: ${grade}`);


// ! Conditional Ternary Operator
let var1 = 12;

var1%2==0 ? console.log("number is even") : console.log("number is odd");