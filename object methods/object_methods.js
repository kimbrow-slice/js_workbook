/* let user = {
    name : "John",
    age : 30
}; // a normal object

user.sayHi = function() {
    alert("Hello!");
}; // a function nested inside of an object

user.sayHi(); //alerts hello

// WELCOME TO OBJECT-ORIENTED PROGRAMMING KID
// when writing code using objects to represent entities, that is called object-oriented programming, in short "OOP".

//first example below is a pre-declared function as a method. 

let user = {
    // ...
};

//first, declare
function sayHi() {
    alert('Hello!);
};

// then add as a method
user.sayHi = sayHi;

user.sayHi();

//method shorthand both of these objects do the same. this is a shorter syntax for methods in an object literals:

user = {
    sayHi: function() { // same as "sayHi: function()"
     alert("Hello!");
    }
};

//method shorthand looks better, right?
user = {
    sayHi() { // same as "sayHi(): function()"
     alert("Hello!");
    }
};

//"this" in methods

let user = {
    name: "Jeff",
    age : 24,

    sayHi() {
        alert(user.name); // "user" instead of "this"
    }
};



let user = {
    name: "Jeff",
    age : 24,

    sayHi() {
        alert(user.name); // "user" instead of "this"
    }
};




let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null
//if we used this.name instead of user.name inside the alert, then the code would work.

// "This" is not bound
//In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it's not a method of an object.

//There is no syntax error in the following:

function sayHi() {
    alert( this.name );
}

//the value of this is evaluated during the run-time, depending of the context.
// For instance, here the same function is assigned to two different objects and has different "this" in the calls:

let user = { name : "Jeff" };
let admin = { name : "Admin" };

function sayHi() {
    alert( this.name );
}

//use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

//these calls have different this
//"this" inside the function is the ob ject "before the dot"
user.f(); //Jeff ( this == user)
admin.f(); //Admin ( this == admin )
admin['f'](); //Admin (dot or square brackets access the method - doesn't matter)

//The rule is simple : if obj.f() is called, then `this` is `obj` during the call of `f`. So it's either `user` or `admin` in the example above. 

/*IMPORTANT*/
// CALLING WITHOUT AN OBJECT: this == undefined
//We can even call the function without an object at all:
/*
function sayHi() {
    alert(this);
}

sayHi(); // undefined
//In this case `this` is `undefined` in strict mode. If we try to access `this.name`, there will be an error.
//In non-strict mode the value of `this` in such case will be the global object (window in a browser, we'll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes. Usually such call is a programming error. If there's `this` inside a function, it expects to be called in an object context.


//The consequences of unbound  `this`
//If you come from another programming language, then you are probably used to the idea of a "bound this", where methods defined in an object always have this referencing that object.
In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.
The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.
Here our position is not to judge whether this language design decision is good or bad. We’ll understand how to work with it, how to get benefits and avoid problems.
*/

//TASK 1 -> 
/*
function makeUser() {
    return {
        name: "Jeff",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name);
*/
//The answer is a TypeError because the ref is undefined


//TASK 2 ->

function Calculator() { //naming the constructor function
    //this = {};
    this.value1 = 0; //first value1
    this.value2 = 0; //the second value2

    this.read = function() { //creating our read function that is nested inside of an object
        this.value1 = +prompt("Enter the first value", 0);
        //allowing for a prompt to enter a number 
        this.value2 = +prompt("Enter the second value", 0);
        //allowing for a prompt to enter another number 
    }

    this.sum = function() { //naming the sum function
        return (this.value1 + this.value2);
        //return the value of 1 + 2 to equal sum
    }

    this.mul = function() { // naming the multiplication function
            return (this.value1 * this.value2);
        } //returning the value1 * value2 

}

let calculator; // creating calculator variable
calculator = new Calculator();
calculator.read(); //the read method

console.log(calculator.sum()); //logging the sum method
console.log(calculator.mul()); // logging the mul method

// TASK 3 ->

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}
ladder
    .up()
    .up()
    .down()
    .up()
    .down()
    .showStep();