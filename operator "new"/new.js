//The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on. That can be done using constructor functions and the "new" operator.

//Constructor functions technically are regular functions. There are two conventions though:
//1) They are named with capital letter first.
//2) They should be executed only with "new" operator.

//Example Given

/* 
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User ("Jeffery");

alert(user.name); //Jeffery
alert(user.isAdmin); //false


When a function is executed with "new", it does the following steps:
1. A new empty object is created and assigned to "this".
2. The function body executes. Usually it modifies "this", adds new properties to it.
3. The value of "this" is returned. 

In other words, "new User(...)" does something like this:

function User(name) {
    //this = {}; (implicitly)

    //add properties to this
    this.name = name;
    this.isAdmin = false;

    //return this; {implicitly}
}

So "let user = new User("Jeffery)" gives the same result as:

let user = {
    name : "Jeffery",
    isAdmin : false
};

//new function() {...}
// If we have many lines of code all about creation of a single complex object, we can wrap them in constructor function, like this:

let user = new function() {
    this.name = "Jeffery";
    this.isAdmin = false;

    //...other c ode for user creation I.E. PASSWORD OR VERIFYING AUTHINTICATION(ATM LAB)
    // maybe complex logic and statements
    // local variables etc
};


// Advanced stuff - the syntax from this section is rarely used, skip it unless you want to know everything. 
Inside a function, we can check whether it was called "new" or without it, using a special "new.target" property.
It is empty for regular calls and equals the function if called with "new": 

function User() {
    alert(new.target);
}

//without "new";
User(); //undefined
//with new
new User(); // function User { ... }

another example with input filled

function User(name) {
    if(!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirects call to new User
alert( john.name); // John

//RETURN FROM CONSTRUCTORS
//usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

//But if there is a return statement, then the rule is simple:
//If "return" is called with an object, then the object is returned instead of "this"
//If "return" is called with a primitive, it's ignored. 

//In other words, "return" with an object returns that object, in all other cases "this" is returned.
// For instance, here "return" overrides "this" by returning an object: 

function BigUser() {
    this.name = "Jeffery";
    return { name: "Godzille"}; //<-- returns this object
}

alert( new BigUser().name ); //Godzilla, got that object

//An example of an empty return(or we could place a primitive after it, doesn't matter)

function SmallUser() {
    this.name = "Jeffery";
    return; //<-- returns this
}

alert( new SmallUser().name ); // Jeffery