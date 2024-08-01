// !Day 19: Regular Expression

// ! Activity 1: Basic Regular Expression.
const str = "I am learning Javascript. Javascript is awesome!";
const regex = /Javascript/g;
const matches = str.match(regex); //* new

console.log(matches);



const str1 = "There are 123 apples, 456 oranges, and 789 bananas.";
const regex2 = /\d+/g;
const matches2 = str1.match(regex2);

console.log(matches2);

// ! Activity 2: Character Classes and Quantifiers

const str3 = "Hello World! This is a Test String with Capitalized Words.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = str.match(regex3);

console.log(matches3);
