window.onload = function() {

/*when button is pressed, value is printed in display*/
const displayContainer = document.getElementById('display')

document.querySelectorAll('button:not(#equal,#clear,#del,#sign,#parenthesis)').forEach((item) => {
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
  /*when +/- is pressed, switch the sign of the most recent constant*/

  //num is equal to the most recent set of numbers in the displayContainer
  
  
  /*
  if (num != -Math.abs(num)) {
    displayContainer.innerHTML = -Math.abs(displayContainer.innerHTML);
  } else if (num == -Math.abs(num)) {
    displayContainer.innerHTML = Math.abs(displayContainer.innerHTML);
  }
  */
  
  //will need to get parenthesis added if there is an operator before the most recent constant

  });
}

const parenthesis = document.querySelector("#parenthesis");

if (parenthesis) {
  parenthesis.addEventListener('click', (e) => {
    let operators = ['+', '-', '*', '/', '%'];
    let lastChar = displayContainer.innerHTML.charAt(displayContainer.innerHTML.length - 1);

    //if the last character in the display is empty or contains a character from the operators array, use (
    if (operators.includes(lastChar)) {
      displayContainer.innerHTML += '(';
    } else if (lastChar === '') {
      displayContainer.innerHTML += '(';
      //otherwise use
    } else if (lastChar === ')') {
      displayContainer.innerHTML += '*('
    } else {
      displayContainer.innerHTML += ')';
    }
  
    
  });
}

}