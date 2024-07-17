// ! Day 5: functions

// ! Activity 1: Function Declaration
let a = 34;
function oddOrEven(){
    if(a%2 == 0) console.log("Entered number is even");
    else console.log("Entered number is odd");
}
oddOrEven();

let n = 2;
function square(){
    sqr = n*n;
    return sqr;
}
console.log(square())

// ! Activity 2: Function Expression

let maxOfTwo = function(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(maxOfTwo(12,43));

let conStr = function(){
    let a = "Ayush ", b = "Pawar";
    return a+""+b
}
console.log(conStr());

// Arrow functions
const sumOfTwo = (a, b) => {
    let sum = a + b;
    return sum;
}
console.log(sumOfTwo(345, 334));


const containsChar = () => {
    let str = "a"
    let incStr = "Aayush";
    if(incStr.includes(str)) {
        return true;
    }
    else {
        return false;
    };
}

console.log(containsChar())

// ! Activity 4
function product(a,b=4){
    return a*b;
}
console.log(product(2,5));

const greeting = (name, age = 18) => {
    console.log(`Hello, ${name} your age is ${age}`);
}
greeting("Ayush", 19);

// ! Activity 5: Higher-Order Functions
function callFunction(func, n){
    return function(){
        for(let i =0; i < n; i++){
            func()
        }
    };
}

function callName() {
    console.log("Billionare Ayush");
}

const sayName = callFunction(callName, 5);
sayName()

function composeFunction(fnc1, fnc2, value) {
    return fnc2(fnc1(value));

}
    function add5(x) {
        return x + 5
    }

    function multiply(x){
        return x * 2;
    }

const result = composeFunction(add5, multiply, 10);
console.log(result);


// ! Add Collabrator to reimagine