



//read more into querySelector
const number_One = document.getElementById("1");



function enterCharacter () {

    const equation = [];

    equation.push(number_One.value);

    console.log(equation);

    result.innerHTML = equation;
}


number_One.addEventListener('click', enterCharacter);
