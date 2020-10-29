/* TASK 1 ->

let user = {

}*/
//literal object
/*let user = {
    "name": "John",
    "surname": "Smith",
    "name": "Pete"
}
delete user.name

console.log(user);
*/

//line per line object and adding properties

let user = {}; //  making an empty object
user.name = "John"; // adding the property "name" and setting that value to "John"
user.surname = "Smith"; // adding the property "surname" and setting the value to "Smith"
user.name = "Pete"; // updating the value of name to "Pete"
delete user.name; // deleting the property name
console.log(user); // printing the console the value of user



// passing into functions with JavaScript

//there is two ways that things can be passed
//first is PASS BY REFERENCE
//YOU ARE PASSING THE ACTUALE VALUE/VARIABLE IN
//OBJECTS IN  JAVASCRIPT PASS BY REFERENCE


/*************************************************/

//the other way that values get passed
// PASSED BY VALUE
//Primitive types you pass a copy into the function

// TASK 2 ->

function isEmpty(myObj) { // function name is isEmpty the parameter of the function is myObj
    for (let key in myObj) { // for in loop, we are declaring key in myObj to the following values in return statements
        return false; // if the loop has started there is a property so this is false
    }
    return true; //if loop hasn't started yet, myObj isEmpty = true then. In this situation we are able to tell by where the braces are lining up
}

// TASK 3 ->
let salaries = {
    "John": 100,
    "Ann": 160,
    "Pete": 130
}; // giving the keys and values to our object called salaries
if (isEmpty(salaries)) {
    var sum = 0; // declaring and assigning the value of 0 to sum by  using the isEmpty function on the Object salaries
}

for (let key in salaries) { // we are searching to modify a key in the salaries object
    sum += salaries[key]; // the sum that we assigned to the value 0 earlier we are going to modify with concatination to be the salaries added together
}

console.log(sum); // logging the sum to get the value of all salaries added together which would equal 390



//TASK 4 ->
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}


/*function myFunctionName(parameter){
    for (let key in object) {
        if (typeof object [key] == "number") {
            then object[key(that is a number)] *= 2;
        }
    }
}

We are going to loop through all keys in the object above that was passed into the function, check to see if the key is a number, if it is set keys value to equal to itself *2 
*/