let myJ = null; // we assignmed myJ to null

//let age = 24;


console.log(null || 2 | undefined);
/* when logging the arguments (null || 2 | undefined) the Logical OR finds the first TRUTH value and displays that to the console since I decided to print it instead of window.Alert*/

// the window.Alert will be 1 and 2 below
alert(alert(1) || 2 || alert(3));


/*The reasoning is because Logical OR || reads left to right so the computer is understanding it as" Alert 1 = undefined || alert 2 TRUTH and end excuting the code there.*/


alert(1 && null && 2);

/*The display is null because Logical AND && looks for the first conversion to FALSE. Since 1 is true is goes to the next step in the code, null returns FALSE, so the code stoping excuting and displays that value*/

alert(alert(1) && alert(2));

/*When using the above statement the argument is (alert(1) && alert(2)). Using the Logical && we are searching for the first FALSE. Since alert(1) returns nothing the argument is modified to alert(undefined  && alert(2)) since undefined is our first FALSE it stops excuting the code there and displays undefined.*/

alert(null || 2 && 3 || 4);

/*The displaying value here is 3. Because the  && operator has higher precedence over the || we move to the && portion of the argument.   Because both operands are TRUTHY we use the last operand and display that. */

function age() {
    if (age >= 14 && age <= 90); {
        return (age * myJ);
    }
    return 24
}
/*Since we are instructed to inclusively find the range between the two ages we want to INCLUDE the edge ages of 14 and 90. If we were just doing the range between the two ages we would not use the "=" sign in the statement.*/





if (!(age >= 14 && age <= 90));
//variant 1 this is to find if the var age is not between 14 - 90 INCLUDING both 14 and 90


if (age < 14 || age > 90);
//variant 2 this is to find if age is not greater than 14 OR || less that 90 but NOT equal to these numbers


if (-1 || 0) alert('first');
/*The above statement displays first because -1 is TRUTHY (|| operator) so the alert is displayed and the function does excute to get this result */


if (-1 && 0) alert('second');
/* The above statement displays no message here due to the statement being FALSY (&& operator) so there alert is not displayed and the function does NOT excute*/

if (null || -1 && 1) alert('third');
/* In the above statement the && operators have higher precedence than the || operator. So the program excutes -1 && 1 first. That modifies the way the statement is read to null || 1-> 1 the displayed message here ends up being third because of it being TRUTHY*/




/*Password Prompt Task*/


let uName = prompt("Who goes there?", '');
// The prompt for the Username input should say "Who goes there", also this statement declares that uName is related to ''

if (uName === 'Admin') { // if the uName is strictly equal to Admin 

    let pwd = prompt('Password?', ''); // then prompt the question Password? 

    if (pwd === 'SQLwebDevAdmin') { // if the pwd is strictly equal to SQLwebDevAdmin
        alert('Welcome Back!'); // display the message "Welcome Back!"
    } else if (pwd === '' || pwd === null) {
        alert('Canceled'); // if the pwd is an empty string || null display the message "Canceled"
    } else {
        alert('Try Again!'); // if the pwd !== SQLwebDevAdmin display "Try Again!"
    }

} else if (uName === '' || uName === null) {
    alert('Canceled'); // if uName is an empty string display the message "Canceled"
} else {
    alert('User not found'); // if uName !== Admin display the message "User not found"
}