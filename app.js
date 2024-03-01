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
  
  if (displayContainer.innerHTML != -Math.abs(displayContainer.innerHTML)) {
    displayContainer.innerHTML = -Math.abs(displayContainer.innerHTML);
  } else if (displayContainer.innerHTML == -Math.abs(displayContainer.innerHTML)) {
    displayContainer.innerHTML = Math.abs(displayContainer.innerHTML);
  }
  
  //will need to get parenthesis added if there is an operator before the most recent constant

  });
}

if (parenthesis) {
  parenthesis.addEventListener('click', (e) => {

    //can try and use lastIndexOf() for this
    //if last space contains +, -, *, %, or /, use (
    //if the displayContainer DOES NOT have anything, use (
      if (displayContainer.innerHTML == '' || displayContainer.innerHTML.lastIndexOf == '+' || '-' || '*' || '/' || '%') {
        displayContainer.innerHTML += '(';
      }

  
      //if last space DOES NOT contain +, -, *, %, or /, use )
    

/*
    //this is making the button icon change too, i don't want that
    if (parenthesis.innerHTML === '()') {
      if(/\w\d{1,}\w/g.test(parenthesis)) {
        parenthesis.innerHTML = ')';
      } else {
        parenthesis.innerHTML = '(';
      }
    }*/


  })
}

}