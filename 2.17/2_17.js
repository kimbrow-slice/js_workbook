function ask(question, yes, no) { // we declared a function and named it ask and passed the arguments. 1) Question 2) Yes 3) No
    if (confirm(question)) yes() // if the function confirm the argument question is yes ()
    else no(); // if the (confirm (question)) is not yes, pass the argument no
}

ask(
    "Do you agree?", // function ask pass the string "Do you agree?"
    () => alert("You agreed."), // is yes alert the string ("You agreed.")
    () => alert("You disagreed and canceled your request.") // is no alert the string ("You disagreed and canceled your request.")
);
// the arrow functions are function expressions