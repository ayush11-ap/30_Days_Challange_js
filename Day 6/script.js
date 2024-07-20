// ! Day 6: Arrays

// ! Activity 1: Array Creation and Access

let arrNum = [1, 2, 3, 4, 5];
console.log(arrNum);

console.log(arrNum[0]);
console.log(arrNum[4]);

// * Activity 2: Array Methods

let arrMethod = ["Ayush", "Suresh", "Kamlesh", "Rupesh", "Ramesh"];

console.log(arrMethod.push("Kewal"));  // ! Add element to the end of the array
console.log(arrMethod.pop());   // ! Remove the element from the end of the array
console.log(arrMethod);
console.log(arrMethod.unshift("Aditya"));   // ! Add the element from start of the array
console.log(arrMethod.shift());     //! Remove the element from the start of the array
console.log(arrMethod);

// * Activity 3: Array Methods

// ! Map method using implicit and explicit return
let arrMap = [1, 2, 3, 4, 5];
let newArrMap = arrMap.map((double) => double*2)
console.log(newArrMap);

let arr = [2, 3, 5, 6, 7]
let newArr = arr.map((elem, index) => {
    return elem * 2
})
console.log(newArr);

// ! Filter method using implicit and explicit return
let arrFir = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let newFir = arrFir.filter((item) => item%2 == 0);
console.log(newFir);

let arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let newArrFir = arrFilter.filter( (elem) => {
    return elem % 2 == 0;
} )
console.log(newArrFir);

// ! Reduce Method
let arrReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let sum = arrReduce.reduce( (accumulator, currentVal) => {
    return accumulator + currentVal
}, 0);
console.log(sum);

// * Activity 4: Array iteration
let arrFor = [1, 2, 3, 4, 5];
for (let i = 0; i < arrFor.length; i++) {
    const element = arrFor[i];
    console.log(element);
}

let eachArr = arrFor.forEach( (item) => {
    console.log(item);
});


// ! Activiy 5: Creating multi-dimensional Array.

let multiArr = [
    [2, 4, 6],
    [3, 6, 9]
]
console.log(multiArr);

console.log(multiArr[0]);
console.log(multiArr[1]);
console.log(multiArr[0][1]);