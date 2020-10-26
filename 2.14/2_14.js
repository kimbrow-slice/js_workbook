// TASK 1 ->
//Write the code using if..else which would correspond to the following switch:
/*
if (browser == 'Edge') { //Detecting if the userAgent is using Edge
    alert("Eww I hate IE/msEdge"); // If userAgent is using Edge display this message ' Eww I hate IEmsEDGE'
} else if (browser == 'Chrome' || // else if userAgent is using Chrome || Firefox || Safari || Opera 
    browser == 'Firefox' ||
    browser == 'Safari' ||
    browser == 'Opera') {
    alert('Now were talking business'); // If userAgent is using Chrome || Firefox || Safari || Opera display the message 'Now were talking business' 
} else {
    alert('We hope we coded this to look right for you still XD'); // If none of the above browser are detected display the message 'We hope we coded this to look right for you still XD'
}

//P.S. We could declare a var like for native javascript
// var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
// var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
// var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
// var is_safari = navigator.userAgent.indexOf('Safari') > -1;
// var is_opera = navigator.userAgent.toLowerCase.indexOf('op') > -1;
// if ((is_chrome) &&(is_safari)) {is_safari = false; }
// if ((is_chrome)&&(is_opera)) {is_chrome = false; }


When trying to target Safari only we would use
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 { alert('Its Safari');}

*/


// TASK 2 ->
//Rewrite "if" into "switch"

let a = +prompt('a?', ''); //We are declaring the variable a and assigning (prompt('a?', ''))

switch (a) { //instead of having multiple if checks we can use switch
    case 0: // if the value === 0
        alert(0); // then display "0" as a message
        break; // we are forcing the exit of the loop 

    case 1: // if the value === 1
        alert(1); // then display "1" as a message
        break; // we are forcing the exit of the loop 

    case 2: // if the value === 2
    case 3: // if the value === 3
        alert('2,3'); // then display '2,3' for EITHER value that is input
}

//If a number outside of 0, 1, 2 ,3 are input it exits the loop due to a FALSE