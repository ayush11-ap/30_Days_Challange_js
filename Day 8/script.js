// ! Day 8: ES6+ Features

// * Activity 1: Template Literals

let name = "Ayush";
let age = 19;

// console.log(`My name is ${name}, & age is ${age}`);

// multi-line string
let multiStr = `Hellow myself Ayush Pawar and short term goal
is getting any internship till the end of this year & long term
goal is to start a business till 2026 net worth of $1 million.`
console.log(multiStr);

// * Activity 2: Destructing
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numsArr[0]);
console.log(numsArr[1]);

let book = {
    title:"Atomic Habits",
    author: "Clear James",
    year: 2016
}

let {title: nameOfBook, author: authorName} = book
console.log(nameOfBook, authorName);

// * Activity 3: Spread and Rest Operators

const arr = ["Get Rich", "Atomic Habits", "Rich Dad & Poor Dad", "The 48 Laws Of Power", "Chanakya Niti"];

let newArr = [...arr];
console.log(newArr.push("Monk who sold his ferrari"));
console.log(newArr);

function restOper(...sum){
    return sum.reduce((add, current) => add + current, 0);
}
let total = restOper(1, 2,3, 4,5, 6, 7, 8, 9, 10)
console.log(total);

// * Default Parameters

function defPara(a, b = 1){
    return a*b;
}
console.log(defPara(2,4));
console.log(defPara(2));

// * Enhanced Object Literals

let object = {
    name,
    age,
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    'dynamic-property': 'This is a dynamic property'
};

console.log(object);
object.greet();

// ! Create an object with computed property names based on variables and log the object to the console.
let property1 = "leaderName";
let property2 = "teamName";
let property3 = "teamMembers";

let teamDetails = {
    [property1]: 'Ayush Pawar',
    [property2]: "ASAN TECH",
    [property3]: 4
}

console.log(teamDetails);