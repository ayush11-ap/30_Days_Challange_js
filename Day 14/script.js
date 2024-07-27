// ! Day 14 : Classes

// Activity 1: Class Definition.
// this define class
class Person{
    constructor(firstName, lastName, name, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hellow my name is, ${this.name} and I'm ${this.age} years old`);
    }
    static genericGreet(){
        console.log(`Hellow How are you brother !!`);
    }

    updatesAge(newAge){
        this.age = newAge
        console.log(`New age is:${this.age}`);
    }

    get fullName(){
        return `FullName is: ${this.firstName} ${this.lastName}`
    }

    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
Person.genericGreet()

// creating new instance.
// const person1 = new Person('ayush', 19);

// console.log(person1.greeting());
// person1.updatesAge(20)

// * Activity 2: Class Inheritance
class Student extends Person {
    static studentCount = 0

    constructor(firstName, lastName, name, age, studentId) {
        super(firstName, lastName, name);
        this.age = age;
        this.studentIdValue = studentId;
        Student.studentCount++;
        console.log(`Total number of students: ${Student.studentCount}`);
    }

    studentIdMethod() {
        return `Student name is ${this.name}, and studentId is: ${this.studentIdValue}`;
    }

    greeting(){
        console.log(`Hellow my name is, ${this.name} & I'm ${this.age} years old & my id is:${this.studentIdValue} `);
    }
}

const student1 = new Student('Ayush Pawar', 19, 218);
console.log(student1.studentIdMethod());
// student1.greeting()

const student2 = new Student('Akanksha Pawar', 21, 219);
console.log(student2.studentIdMethod());

// Activity 4: Getters and Setters
const person1 = new Person('Ayush Aabasaheb', 'Pawar');
console.log(person1.fullName);

const person2 = new Person('Akanksha Aabasaheb', 'Pawar');
console.log(`Updated ${person2.fullName}`);
