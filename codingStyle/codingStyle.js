//TASK 1 ->
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) { result *= x; }
    return result;
}

let x = prompt("x?", ''),
    n = prompt("n?", '')
if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
    alert(pow(x, n))
}

//SHOULD BE WRITTEN LIKE THIS

function pow(x, n) { // there is no space between the comma and n also the brace isn't on the same line
    let result = 1; // there is no spaces between result and 1

    for (let i = 0; i < n; i++) { //the spacing between for and the parenthesis, the spacing between i and 0, i and n
        result *= x; // no return between the for loop and the result
    }

    return result;
}

let x = prompt("x?", ""); // these two lines need to be broken up into two seperate lines of code
let n = prompt("n?", ""); // READ THE ABOVE COMMENT ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
if (n <= 0) { // braces are not on the same line as the if statement
    alert(`Power ${n} is not supported, pleadse enter an integer number greater than zero`);
} else { // I am use to seeing } else {....} not how the example was given
    alert(pow(x, n));
}