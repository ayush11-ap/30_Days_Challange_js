// ! Day 4: Loops
// Activity 1: for loop

for(let i=1; i<11; i++){
    console.log(i);
}

// table of five
let n = 5;
for(let i=n; i <= n*10; i=i+n){
    console.log(i);
}

for(let i=1; i<=5; i++){
    let stars = '';
    for(let j=0; j<i; j++){
        stars += "* ";
    }
    console.log(stars);
}

for(let i = 1; i <= 10; i++){
    if( i === 7 ){
        console.log("7 Detected");
        break;
    }
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log("5 is detected");
        continue;
    }
    console.log(i);
}

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++
// }

// Activity 2: while loop

let i = 1;
let sum = 0
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);

let j = 11;
while( j > 1){
    j--;
    console.log(j);
}