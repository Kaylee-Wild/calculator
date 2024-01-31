window.onload = function() {



//instead of finding each number button by each specific ID,
//use querySelectorAll() to search for all number buttons with
//the same CSS class to put them in an array
//then have the function call the items that querySelectorAll() has
//based on the number button that is clicked


const numberBtn = document.querySelectorAll("#number");

function print() {
    console.log("you pressed a number");
}


//currently giving error "numberBtn.addEventListener is not a function"
numberBtn.addEventListener('click',print);





}