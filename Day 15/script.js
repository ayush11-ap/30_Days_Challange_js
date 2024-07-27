// ! Day 15 Closures

// *Activity 1: Understanding Closures

function outerFunc(){
    let name = "Ayush Pawar";
    function innerFunc(){
        console.log(`my name is ${name}`);
    }
    innerFunc()
}
outerFunc();

function createCounter(){
    let counter = 0;

    function increment(){
        return `${++counter}`
    }
    // ! counter++ --> This is print first and then update the value of coutner variable.
    // ! ++counter --> This will update the value first and then print.

    function getCurrVal(){
        return `${counter}`
    }

    console.log(increment());
    console.log(getCurrVal());
}

createCounter()

// *Activity 2: Practical Closures

function uniqueId(){
    let Id = Math.ceil(Math.random() * 100)
    return Id;
}
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());

function greetFunc(name){
    return function greet(){
        console.log(`Hellow ${name} Sir!`);
    }
}
greetFunc('Ayush')()

// * Activity 3: Closures in LOOps.

function closureFunc(size){
    const functionArr = [];

    for (let i = 0; i < size; i++){
        functionArr.push(
            (function(index){
                return function(){
                    console.log(index);
                }
            })(i)
        )
    }
    return functionArr;
}

const loggers = closureFunc(5);

loggers[0]();
loggers[1]();
loggers[2]();

// * Activity 4: Module Pattern

const itemManager = (function() {
    let items = []

    return {
        addItem: function(item){
            items.push(item);
            console.log(`Item added: ${item}`);
        },
        removeItem: function(item){
            const index = items.indexOf(item);
            if(index > -1){
                items.splice(index, 1);
                console.log(`Item removed: ${item}`);
            }else{
                console.log(`Item not found: ${item}`);
            }
        },
        listItems: function(){
            console.log(`Items:`, items);
        }
    }
})();


itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.listItems();
itemManager.removeItem('Apple')
itemManager.removeItem('Orange');

// ! Activity 5: Memoization
function memoize(fn){
    const cache = {};

    return function(arg){
        if(cache[arg] !== undefined){
            console.log(`Fetching from cache: ${arg}`);
            return cache[arg];
        }else {
            const result = fn(arg);
            cache[arg] = result;
            console.log(`Computing and storing result: ${arg}`);
            return result;
        }
    };
}

function slowFunction(num){
    for(let i = 0; i < 1e6; i++){
        return num * num;
    }
}
const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));