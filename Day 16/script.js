// ! Day 16: Recursion.

function factorial(n){
    // ! Base case
    if( n <= 1){
        return 1;
    }else{
        return n * factorial(n - 1)
    }
}

// * Test Cases.
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

function fabionacci(n){
    // ! Base case
    if(n <= 1){
        return n;
    }else{
        return fabionacci(n - 1) + fabionacci(n - 2);
    }
}

console.log(fabionacci(0));
console.log(fabionacci(1));
console.log(fabionacci(3));
console.log(fabionacci(4));
console.log(fabionacci(5));
console.log(fabionacci(6));

// !Activity 2: Recursion with Arrays.
function sumArr(arr){
    // ! Base case
    if(arr.length === 0){
        return 0;
    }else{
        return arr[0] + sumArr(arr.slice(1));
    }
}

console.log(sumArr([1, 2, 3, 4, 5, 6, 7]));


function findMax(arr){
    if(arr.length === 1){
        return arr[0];
    }else{
        let maxNum = findMax(arr.slice(1));
        return arr[0] > maxNum ? arr[0] : maxNum;
    }
}

console.log(findMax([1, 2, 3, 48, 59, 78]));


// ! Activity 3: String Manipulation and Recursion.
function reverseStr(str){
    // ! Base condition
    if(str === ''){
        return ''
    }else {
        return reverseStr(str.slice(1)) + str[0];
    }
}

console.log(reverseStr('Ayush'));

function isPlaindrome(str){
    // Base
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length - 1]){
        return false;
    }
    // repeated
    return isPlaindrome(str.slice(1, -1))
}

console.log(isPlaindrome('racecar'));
console.log(isPlaindrome('coc'));
console.log(isPlaindrome('hellow'));

// ! Activity 4: Recursive Search.

function binarySearch(arr, target, left = 0, right = arr.length -1){
    if(left > right){
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if(arr[mid] === target){
        return mid;
    }

    if(target < arr[mid]){
        return binarySearch(arr, target, left, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, right);
}
function logBinarySearchResult(arr, target){
    const index = binarySearch(arr, target);
    console.log(`Index of ${target} in [${arr.join(', ')}]: ${index}`);
}

console.log(binarySearch([2, 3,5, 6, 7,38], 38));
console.log(binarySearch([10, 20, 30, 40, 50], 20));

function countOccurance(arr, targetVal){
    if(arr.length === 0){
        return 0;
    }
    return (arr[0] === targetVal ? 1 : 0) + countOccurance(arr.slice(1), targetVal)
}

function logCountOccuranceRes(arr, target){
    const count = countOccurance(arr, target);
    console.log(`Count of ${target} in [${arr.join(', ')}]: ${count}`);
}

logCountOccuranceRes([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1], 1);