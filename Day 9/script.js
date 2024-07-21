let name = document.querySelector("#details");
let bgChange = document.querySelector(".changeColor");

name.textContent = `My name is Ayush Pawar`;
bgChange.style.backgroundColor = "aqua";

let div = document.createElement("div");

div.textContent = "Become a millionare at the age of 21";
document.body.appendChild(div);

let ul = document.querySelector('.unorderList')
let li = document.createElement('li');
let Li = document.querySelector('li');

li.textContent = "Ayush";

ul.appendChild(li);
console.log(Li);
ul.removeChild(Li);

if (ul.lastElementChild) {
  ul.removeChild(ul.lastElementChild);
}

// *Activity 4
let image = document.querySelector('img');

image.src = `https://images.unsplash.com/photo-1594235048794-fae8583a5af5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

let h2 = document.querySelector('h2');

h2.classList.add("addedClass");
h2.classList.remove("addedClass");

// * Activity 5: Event Handling
let p = document.querySelector('p');
let button = document.querySelector('button')

button.addEventListener("click", () => {
    p.innerText = `Ayush u have to become a millionare till the age of 21`
})

button.addEventListener("mouseover", () => {
    button.style.borderColor = "brown"
})