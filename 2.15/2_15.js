function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
// in the above function added the ? instead of using the if else statement. Setup in the manner of ? true : confirm is still us using a conditional 

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you');
}

// in the above function we added the OR || instead of using the if else statement. Setup in the manner we used is if the age is > 18 || here || looks for the first TRUTHY statement



function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
// If a is less than b then return a, but if a is greater than b then return b

function min(a, b) {
    return a < b ? a : b;
}
// the question mark is used here as a conditional operator, so it is stating if a is less than b, return a the : is the if else return b


function pow(x, n) { // we are declaring our function and putting in the arguments
    let result = x;
    //we are declaring the variable "result" as well as assigning "x" to the variable "result"

    for (let i = 1; i < n; i++) { //we are setting setting up our for loop, so we begin with i = 1, our condition is i < n, and our step is the postfix i++. postfix meaning assign then increment
        result *= x; // this means the same as result = result * x 
    }
    return result; // we are returning the value of result
}

let x = prompt("x?", '');
// we are declaring "x" and assigning it the function of prompt, prompts arguments are as follows: x = prompt(title,[default]); this is why we have an empty string
let n = prompt("n?", '');
// we are declaring "n" and assigning it the function of prompt, prompts arguments are as follows: n = prompt(title,[default]); this is why we have an empty string
if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
    // here we are saying if n is less than 1 then alert the template literal string Power of n is not supported use a positive integer
} else {
    alert(Math.pow(x, n));
    //if n is greater than 1 then alert the follow power(x(base), n(exponent));
}