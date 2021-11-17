//1. download elements - DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

//1b - define the necessary data

let textSize = 16; // font-size - p


//3. Action
function textIncrease() {
    // console.log("click!");
    textSize++;
    text.style.fontSize = textSize + "px";
}


function textDecrease() {
    // console.log("click!");
    textSize--;
    text.style.fontSize = textSize + "px";
}
//2. Add an event listener that fires when a user clicks a button

btnIncrease.addEventListener('click', textIncrease)

btnDecrease.addEventListener('click', textDecrease)