window.onload = function() {


/*when button is pressed, value is printed in display
need to get the value to be saved to the full equation*/
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





const clearAll = document.querySelector('#clear')

if (clearAll) {
  clearAll.addEventListener('click', (e) => {
    /*when C is pressed, don't print, clear the display*/
    displayContainer.innerHTML = displayContainer.innerHTML.replace(/[0-9\+\-\x\%\()\"/"\.]/g, '');
  });
}



/*when +/- is pressed, switch the sign of the constant*/







/*when () is pressed, will be a bit trickier

left parenthesis needs to be printed and added the full equation first
but it needs to only be on the left side of the constant

right parenthesis needs to be printed and added to the full equation
and only be on the right side of the constant

will likely need to add in some way to move left and right in the
display to add more than one parenthesis inside each other and so on

e.g. ((85x2)+3)
*/






}