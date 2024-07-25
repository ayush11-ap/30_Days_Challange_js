// ! Day 13: Modules

// *Activity 1: Creating and Exporting Modules
function add(a, b){
    return a + b;
}

module.exports = add;

let personDetail = {
    name: "Ayush Pawar",
    age: 19,
    college: "ICEM",
    marks: function(){
        console.log(`Sem 1 marks obtained are: 8.55`);
    }
}

module.exports = personDetail;

// * Activity 2: Named and Default Exports

const About = () => {
    console.log('This is about section');
}

const Contact = () => {
    console.log('This is Contact Section');
}

module.exports = {About, Contact, add}

// const Services = () => {
//     console.log('This is Services Section');
// }

// export default Services;

// * Activity3: Importing Entire Modules.
export const PI = 3.14;
export const E = 2.17;

export function substract(a, b){
    return a - b;
}

export function multiply(a, b){
    return a * b;
}
