// ! Day 11: Promises and Async/Await

// * Activity 1: Understanding Promises.
let result = new Promise((res, rej) => {
    setTimeout(() => {
        res("Messsage has been resolved");
    }, 2000)
});

result.then((data) => {
    console.log(data);
})

let resultant = new Promise((res, rej) => {
    setTimeout(() => {
        res('Server has started at port:8080');
    }, 2000);
});

resultant.then((data) => {
    console.log(data);
})

let errMsg = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Oops! Message has been rejected")
    }, 2000)
})
errMsg.catch((msg) => {
    console.log(msg);
})

// * Chaining Promises.
let promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Server has started at port: 8080");
    }, 1000);
});

let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("User Login Page");
    }, 2000);
});

let promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("User Interfernce");
    }, 1000);
});

let promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        res("User Logout Page");
    }, 1000);
});

promise1.then((serverData) => {
    console.log(serverData);
    return promise2
})
.then((serverData) => {
    console.log(serverData);
    return promise3
})
.then((serverData) => {
    console.log(serverData);
    return promise4
})
.then((serverData) => {
    console.log(serverData);
})
.catch((err) => {
    console.error("An error occured", err);
})

// * Activity 3: Using Async/Await
async function promiseRes() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res("promise is resolve");
        }, 2000);
    });

    try{
        let resolvedVal = await promise;
        console.log(resolvedVal);
    }
    catch{
        console.log('Error hui hui!');
    }
}
promiseRes();


async function promiseRej() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            rej("promise is rejected");
        }, 2000);
    });

    try{
        let resolvedVal = await promise;
        console.log(resolvedVal);
    }
    catch{
        console.error('Error hui hui!');
    }
}
promiseRej();

// * Fetching Data from an API
const apiUrl = `https://fakestoreapi.com/products`;

fetch(apiUrl)
.then(response => {
    if(!response){
        throw new Error('Network response was not ok'+response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error)
});

// using async/await
async function fetchData(){
    const apiUrl = `https://fakestoreapi.com/products`;

    try{
        const response = await fetch(apiUrl);

        if(!response){
            throw new Error('HTTPS:Error Page Not Found');
        }

        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log('Error Fetching data:', err)
    }
}

fetchData();

// * Concurrent Promises
// Promise.all
async function fetchMultipleData() {
    const apiUrls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/todos',
        'https://jsonplaceholder.typicode.com/photos'
    ];

    try{
        const fetchPromises = apiUrls.map(url => fetch(url).then(response => {
            if(!response){
                throw new Error("Https: page not found");
            }
            return response.json();
        }));

        const results = await Promise.all(fetchPromises);
        console.log(results)
    }catch(err){
        console.log('Error fetching data', err);
    }
}

fetchMultipleData();

// Promise.race
async function fetchData() {
    const apiUrls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/todos',
        'https://jsonplaceholder.typicode.com/photos'
    ];

    try{
        const fetchRes = apiUrls.map(response  => fetch(response).then(response => {
            if(!response){
                throw new Error("Error while fetching the data");
                return response.json();
            }
        }));

        const results = await Promise.race(fetchRes);
        // console.log('ayush');
        console.log(results);
    }catch(err){
        console.log("Error :",err);
    }
}
fetchData()