// ! Day 10: Event Handling.

// * Basic Event Handling.
let p = document.querySelector("p");
let button = document.querySelector(".changeText");

button.addEventListener("click", () => {
    p.textContent = "Change Your Habits Make it automatic"
})

const image = document.querySelector('.dbl');

  // Add a double-click event listener to the image
  image.addEventListener('dblclick', function() {
    // Check the current display style
    if (image.style.display === 'none') {
      // If it's hidden, show the image
      image.style.display = 'block';
    } else {
      // If it's visible, hide the image
      image.style.display = 'none';
    }
  });

// * Activity 2
let container = document.querySelector('.image');

container.addEventListener('mouseover', () => {
    container.style.backgroundColor = 'aqua';
});

container.addEventListener('mouseout', () => {
    container.style.backgroundColor = '#dc2626'
})

// * Activity 3
let inp = document.querySelector('input');
let displayText = document.querySelector('.displayText')

inp.addEventListener('keydown', (e) => {
    // console.log(e.target.value);
})

inp.addEventListener('keyup', () => {
    let currentVal = inp.value;

    displayText.textContent = currentVal
})

// * Activity 4
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

let dropDown = document.querySelector('#dropDown');
let selectedText = document.querySelector('#selectedVal');

dropDown.addEventListener('change', () => {
    let changedVal = dropDown.value;
    selectedText.textContent = changedVal;
});

// * Activity 5
let parent = document.querySelector('.parent');
let parChild = document.querySelectorAll('.child');
let addItem = document.querySelector('#addItem');

// parent.addEventListener('click', () => {
//    console.log('clicked');
// })

parent.addEventListener("click", (e) => {
  if(e.target && e.target.classList.contains('child')){
    console.log(e.target.textContent)
  }
});

let carsData = ['', 'Maclaren', 'Bugatti', 'TATA Harrier'];
let itemCount = 0;

addItem.addEventListener('click', () => {
  itemCount++;
  let newItem = document.createElement('li');
  newItem.className = 'child';
  newItem.textContent = carsData[itemCount];
  parent.appendChild(newItem);
});


