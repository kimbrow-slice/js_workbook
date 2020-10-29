// TASK 1 ->

document.body.firstElementChild
    //the first element child node of the body is our div, we use firstElementChild because firstChild returns the first child node as an element node, a text node, or a comment node. Where firstElementChils returns the first child node as an element node ignoring text and comment nodes

document.body.lastElementChild
    //same as the above comment, we use lastElementChild here due to us not wanting to return the text and comment nodes.
document.body.lastElementChild.lastElementChild
    //here we want to access the DOM with document, body is our parentNode, lastElementChild is printed twice because we are instructed to get the second of two options in the <li>John</li> <li>Pete</li if we print it only once we would return John



// TASK 2 ->

// is it true that elem.lastChild.nextSibling is always null?
// yes because the element "lastChild" has no nextSibling because it is calling to the last child node for that element

// is it true that elem.children[0].previousSibling is always null?
// no because the way children is called to is calling to first child node within that element (It may display comment nodes or text nodes)



//TASK 3 ->

//Write code to paint all diagonal table cells in red, You'll need to get all diagonal <td> from the <table> and paint them using the code:

for (i = 0; i <= table.rows.length; i++) { // we are setting beginning with i = 0, on condition is table.rows.length; and our step is to assign then increment
    table.row[i].cells[i].style.background = "red";
    // if i is = 0 at the beginning we and starting the background color change, we go over 1 row and 1 cell and proceed to continue to increment each time until we have completed the loop
    // the reason I used <= is because as long as i is true and  less than or equal to the table.rows.length we will continue to complete our loop
}