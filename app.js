window.onload = function() {



//instead of finding each number button by each specific ID,
//use maybe I use querySelectorAll() to search for all number buttons with
//the same CSS class to put them in an array
//then have the function call the items that querySelectorAll() has
//based on the number button that is clicked


/*
const display = document.getElementById("display");


const numberOneBtn = document.getElementById("one");
const numberTwoBtn = document.getElementById("two");
const numberThreeBtn = document.getElementById("three");

function print() {


    console.log("you pressed a number");
}


numberOneBtn.addEventListener('click',print);
*/

const displayContainer = document.getElementById('display')
document.querySelectorAll('button').forEach((item) => {
  item.addEventListener('click', (e) => {
    displayContainer.innerHTML = e.target.textContent.trim();
  })
})





}