// ! Day 12: Error Handling

// * Activity 1:Basic Error Handling with Try-catch

function throwErr() {
    throw new Error("This is an intentional error");
}

function handleErr(){
    try {
        throwErr();
    }catch(err){
        console.log('An error occured:', err.message);
    }
}

handleErr();

function divideNumbers(nume, denom){
    if(denom === 0){
        throw new Error('Division by zero is not allowed')
    }
    return nume / denom;
}

function handleDivision(numerator, denominator){
    try{
        const result = divideNumbers(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch(error){
        console.log('An error occured:', error.message)
    }
}

handleDivision(10, 2)
handleDivision(10, 0);

// * Activity 2: Finally Block
function finalBlock(){
    try{
        console.log('Inside the try block');
        throw new Error('This is an intentional error');
    }catch(error){
        console.log('Inside the catch block');
        console.log('An error occurred', error.message)
    }finally{
        console.log('Inside the finally block');
    }
}

finalBlock();

// * Activity 4: Error Handling in Promises

// ! using .then() & .catch()
const randomPromise = new Promise((res, rej) => {
    const result = Math.random() > 0.5;

    setTimeout(() => {
        if(result){
            res("Promisse resolved")
        }
        else{
            rej("Promise rejected");
        }
    }, 1000)
});

randomPromise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

// ! try-catch
async function handleError() {
    try{
        const message = await randomPromise;
        console.log(message);
    }catch(err){
        console.log(err);
    }
}

handleError();

// * Activity 5: Graceful Error Handling in Fetch.
const invalidUrl = "https://invalid-url";

fetch(invalidUrl)
.then(response => {
    if(!response){
        throw new Error("invalide url https error");
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log('fetch error', error);
});


async function fetchData(){
    const invalidUrl = 'https://invalid.com';

    try{
        const response = await fetch(invalidUrl);

        if(!response){
            throw new Error("Http error!");
        }

        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log('Fetch Error');
    }
}

fetchData();