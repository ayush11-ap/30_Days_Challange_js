//! Day 7: Object

// * Activity 1: Object Creation and Accessing
let book = {
    title:"Atomic Habits",
    author: "Clear James",
    year: 2016
}

console.log(book);
console.log(book.title);
console.log(book.author);

// * Activity 2: Objects Method
let book2 = {
    title:"Atomic Habits",
    author: "Clear James",
    year: 2016,
    bookDetails: function(){
        return this.title +" - "+this.author;
    },
}

book2.updateYear = function(newYear) {
    this.year = newYear
}
book2.updateYear(2018)

console.log(book2.bookDetails());
console.log(book2.year);

// * Activity 3: Nested Objects
let book3 = {
    library: {
        name: "Ayush Pustakalay",
        title: ["Get Rich", "Atomic Habits", "Rich Dad & Poor Dad", "The 48 Laws Of Power", "Chanakya Niti"]
    }
}
console.log(book3.library);

console.log(book3.library.title[0]);
console.log(book3.library.title[1]);
console.log(book3.library.title[2]);
console.log(book3.library.title[3]);
console.log(book3.library.title[4]);

// * Activity 4: this keyword
let book4 = {
    name: "The 48 Laws Of Power",
    year: 2022,
    bookDetails: function() {
        return this.name+" - "+this.year;
    }
}
console.log(book4.bookDetails());

// * Activity 5: Object Iteration

let book5 = {
    title1: "Atomic Habits",
    title2: "Rich Dad & Poor Dad",
    title3: "The 48 Laws Of Power",
    title4: "Chanakya Niti"
}
for(let key in book5){
    console.log(key);
    console.log(book5[key]);
    console.log(key+" : "+book5[key]);
}

console.log(Object.keys(book5));
console.log(Object.values(book5));