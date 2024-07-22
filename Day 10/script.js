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