window.onload = function() {


/*when button is pressed, value is printed in display
need to get the value to be saved to the full equation*/
const displayContainer = document.getElementById('display')
document.querySelectorAll('button').forEach((item) => {
  item.addEventListener('click', (e) => {
    displayContainer.innerHTML += e.target.textContent.trim();
  })
})





/*when Del is pressed, delete the latest character in display*/







/*when +, -, X, /, or % button is pressed,
clear the display and print the operator in the display

when the next constant is entered, clear the operator from the display
and save the operator to the full equation

The constant entered before an operator needs to be saved
so it can be recalled to get the full equation*/







/*when C is pressed, clear the full equation and display*/








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







/*when = is pressed, need to have it NOT print but then instead just
calculate the results of the full equation and print the results
on the display*/



}