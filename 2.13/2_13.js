/****************START FOR STATEMENTS PART BY PART****************
 **begin === i = 0 (Executes once upon entering the loop)
 **condition === i < 3 (Checked before every loop iteration. If false, the loop stops)
 **body === alert(i) (Runs again and again while the condition is truthy)
 **step === i++ (Executes after the body on each iteration)
 ****************END PART BY PART****************
 ****************GENERAL LOOP ALGORITHM****************
 **Run begin
 ** -> (if condition -> run body and run step)
 ** -> (if condition -> run body and run step)
 ** -> (if condition -> run body and run step)
 ** -> ...
 ****************END LOOP ALGORITHM****************/

// TASK 1 -> What is the last value alerted by this code? Why?

/***** 
let i = 3;
while (i) {
    alert(i--);
}
******/

// TASK 2 -> The last value alerted is 1. It is 1 because the number 3 is incremented until the loop reaches a FALSE at that point the loops stops.


//For every loop iteration, write down which value it outputs and then compare it with the solution.

//Both loops alert the same values, or not?

//1. THE PREFIX FORM ++i
/******
let i = 0;
while (++i < 5) alert(i);
// The values alerted are 1-4. When written like this the order of operations is increnment then assign

//2. THE POSTFIX FORM i++

//The values alerted are 1-5. When written like this the order of operations is assign then increment
let i = 0;
while (i++ < 5) alert(i);
******/

// TASK 3 -> 

// For each loop write down which values it is going to show. Then compare with the answer.

//Both loops alert same values or not?

//1. THE POSTFIX FORM

/* for (let i = 0; i < 5; i++) alert(i); 

for (let i = 0; i < 5; ++i) alert(i);*/

//Both of the loops display 4 as the output

// TASK 4 ->
//Use the for loop to output even numbers from 2 to 10.
/*******
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

 for (begin; condition; step) {
     ... loop body ...
}
so we set i = 2 as our beginning; i less than or equal to 10 is our condition; i++ is the order of our step until we reach a FALSE. The if statement states "i % 2 == 0" the modulo operator calculates the remainder of division operation, in this situation it calculates the remainder of i devided by 2.  
*******/

// TASK 5 -> 
//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

/*for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
    let i = 0;      declaring the value of our "i"
    while (i < 3) {       with the while loop we state that while "i" is greater than 3 
        alert( `number${i}!` );  the body should run through the condition while it stays truthy
        i++;   this is our step and it has a given order in which it should operate
    }

*/

// TASK 6 ->
/*Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.*/
/*******
let num; 

do {

    num = prompt("Enter your favorite number above 100?", 0);
}
    while (num <= 100 && num);
*******/

/*this do while loop is set up like this
let num : declares a variable but it is not initialized until their definition is evaluated
    do{
        //loop body : we are defining the variable num
    }
    while(condition); here we are putting the condition in that while the input for num is not greater than 100 && num is false when it is null, The while loop will stop if it is null or an empty string. */


// TASK 7 ->
/*An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.*/

/********* 
let n = 10; //declaring the variable n = 10 and assigned

nextPrime:
    for (let i = 2; i <= n; i++) { // for (begin (let i = 2); condition (i <= n); step i++)

        for (let j = 2; j < i; j++) { // checks to see if j has any divisor from the number 1..i
            if (i % j == 0) continue nextPrime
                // if the number is not prime it stops the current iteration and forces the loop to start a new one
        }
        alert(i); // display the prime numbers inbetween the given range
    }
*********/