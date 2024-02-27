window.onload = function() {


/*when button is pressed, value is printed in display*/
const displayContainer = document.getElementById('display')

document.querySelectorAll('button:not(#equal,#clear,#del,#sign)').forEach((item) => {
  item.addEventListener('click', (e) => {
    displayContainer.innerHTML += e.target.textContent.trim();
  })
})

const del = document.querySelector('#del');

if (del) {
  del.addEventListener('click', (e) => {
//when del button is pressed, don't print, delete the latest character in display
  displayContainer.innerHTML = displayContainer.innerHTML.substring(0,displayContainer.innerHTML.length-1);
  });
}


/*when = is pressed, don't print, calculate the results 
of the full equation and print the results on the display*/
const equal = document.querySelector('#equal');

if (equal) {
  equal.addEventListener('click', (e) => {

    //this will replace the displayContainer with the equation calculated
    let results = displayContainer.innerHTML
    
    //currently only works with plus or minus equations
    displayContainer.innerHTML = displayContainer.innerHTML.replace(displayContainer.innerHTML, eval(results))
    
  })
}




const clearAll = document.querySelector('#clear')

if (clearAll) {
  clearAll.addEventListener('click', (e) => {
    /*when C is pressed, don't print, clear the display*/
    displayContainer.innerHTML = displayContainer.innerHTML.replace(displayContainer.innerHTML, '');
    
  });
}




const sign = document.querySelector("#sign");

if (sign) {
  sign.addEventListener('click', (e) => {
  /*when +/- is pressed, switch the sign of the constant*/
  displayContainer.innerHTML = -Math.abs(displayContainer.innerHTML);
  

  });
}


function neg(num) {
  return -Math.abs(num);
}

console.log(neg(9));

/*when () is pressed, will be a bit trickier

left parenthesis needs to be printed on the left side of the constant

right parenthesis needs to be printed on the right side of the constant

will likely need to add in some way to move left and right in the
display to add more than one parenthesis inside each other and so on

e.g. ((85x2)+3)
*/






}