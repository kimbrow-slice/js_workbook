// TASK 1 ->
//1) find the table with id="age-table"

let table = document.getElementById("age-table")
    // we are declaring and assigning the variable to the element table with the id age-table

//2) All label elements inside that table (there should be 3 of them)

document.querySelector("#age-table label")

// we are finding all the label elements within the table using querySelector and specificying the id #age-table

//3) the first td in that table (with the word "Age")

table.querySelector("td")

//we are finding the td (standard data cell tag), td stands for tableData with the querySelector function in the table element

//4)the form with name="search"

document.querySelector("form[name='search']")

//we are specifically looking the the document element with the function querySelector to find the form with name='search' within it. Incase there is another element with name='search' in the document


//5) the first input in the form

form.querySelector("input")

//within the form element we use the querySelector to search for the input element within the form

//6) the last input in the form

var inputs = form.querySelectorAll("input")
    //we are going to find ALL the input nodes from the form element with querySelector
inputs[inputs.length - 1]
    // we are subtracting 1 from the length of the array to pull the last input from the array because the array is 0 indexed.
    // this would be helpful in a situation where we don't know how long an array is but we want to access the last element in the array