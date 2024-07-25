// const add = require('./script');

const num1 = 13;
const num2 = 43;

// const result = add(num1, num2);

// console.log(`Total Sum is ${result}`);


const personDetail = require('./script.js');
const name = personDetail.name;
const age = personDetail.age;
console.log(`Student name is ${name} & age is ${age}`);

const {About, Contact, add} = require('./script.js');

const total = add(29, 34);
console.log(total);
About();
Contact();

// import Services from './script.js';

// Services();

const {PI, multiply, substract} = require('./script.js');

console.log(`PI: ${script.PI}`);