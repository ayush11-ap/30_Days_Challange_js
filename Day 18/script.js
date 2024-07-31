// Day 18: Algorithms
// ! Activity 1: Sorting Algorithms

function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j =0; j < len - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [23, 44, 35, 65, 88, 45, 33];
const sortedArr = bubbleSort(arr);
console.log(sortedArr);

function selectionArr(arr){
    let len = arr.length;
    for(let i = 0; i < len - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const numbers = [23, 44, 11, 65, 8, 45, 33];
console.log(selectionArr(numbers));

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length; i++){
        if(i === Math.floor(arr.length / 2)){
            continue;
        }
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const num = [23, 44, 11, 65, 8, 45, 33];
console.log(quickSort(num));

// ! Activity 2: Searching Algorithms

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return `Taget value not found in the array`;
}

const linearSearchArr = [23, 44, 11, 65, 8, 45, 33];
const index = linearSearch(linearSearchArr, 5);
console.log(index);


function binarySearch(arr, target){
    let left = 0; 
    let right = arr.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2);

        if(arr[middle] === target){
            return middle
        }

        if(arr[middle] < target){
            left = middle + 1;
        }else {
            right = middle - 1;
        }
    }
    return `Target value not found in the array`;
}

const binarySearchArr = [23, 44, 11, 65, 8, 45, 33];
const index2 = binarySearch(binarySearchArr, 44)
console.log(index2);

// ! String Algorithm
function countCharOccurance(str){
    const charCount = {};

    for(let char of str){
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char] = 1;
        }
    }

    return charCount;
}
const inpStr = 'Ayush Foundation';
const charCounts = countCharOccurance(inpStr);
console.log(charCounts);

function lengthOfLongStr(str){
    let n = str.length;
    let longest = 0;
    let start = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < n; end++){
        let char = str[end];
        if(charIndexMap.has(char)){
            start = Math.max(charIndexMap.get(char) + 1, start);
        }
        charIndexMap.set(char, end);
        longest = Math.max(longest, end - start + 1);
    }
    return longest;
}

const inpString = "Ayush Pawar Foundation";
const length = lengthOfLongStr(inpString);
console.log(length);

// ! Array Algorithms

function rotateArray(arr, k){
    let n = arr.length;
    k = k % n;

    function reverse(subArr, start, end){
        while(start < end){
            let temp = subArr[start];
            subArr[start] = subArr[end];
            subArr[end] = temp;
            start++;
            end--;
        }
    }

    reverse(arr, 0, n-1);
    reverse(arr, 0, k-1);
    reverse(arr, k, n-1);
    
    return arr;
}

const rotateArr = [1, 2, 3, 4, 5, 6, 7,8];
const k = 3;
console.log(rotateArray(rotateArr));
console.log(rotateArray(rotateArr, k));


function mergerSortedArray(arr1, arr2){
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

const arr1 =[2, 4, 6, 8];
const arr2 = [3, 6, 9, 12];
console.log(mergerSortedArray(arr1, arr2));