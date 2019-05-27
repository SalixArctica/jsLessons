/*********************************************************************************************
BASIC LOGGING

console.log();

console is a global object/variable referencing the terminal/shell this program is running in

log() is a function of the console. It takes some data and prints it to the console.

*********************************************************************************************/

console.log('Hello World!');

/*********************************************************************************************
BASIC MATH

addition: +
multiplication: *
subtraction: -
division: /

these behave as you would expect just like simple math

below we do a little math and log it to the console
*********************************************************************************************/

console.log(1 + 1);
console.log(2 * 2);
console.log(5 - 3);
console.log(6 / 3);

/*********************************************************************************************
VARIABLES

variables are little data containers
they look like this: let variable = data;

variables can hold lots of different types of data
they can hold
booleans: true, false
numbers: 12, 255.32, -5000
strings: 'Hello this is a string'
objects: { name: 'object' }
functions: () => { return 'function call' } 

below we'll create some variables and send their value to the console
*********************************************************************************************/

let number = 1;
console.log(number);

let string = 'string';
console.log(string);

let boolean = true;
console.log(boolean);

let sum = 1 + 1;
console.log(sum);

/*********************************************************************************************
SOME NOTES ON SYNTAX

What is syntax?
    Syntax is like the grammar of programming. Spoken and written languages also have syntax.
    It is the reason talking like Yoda is incorrect. Saying, "Tastes good the taco does." 
    breaks the rules of syntax. Words go in a particular order and punctuation goes in 
    specific places. When you break syntax in English people might not understand you very
    well. When you break syntax in programming your program won't run (well js will).

So lets learn some syntax!
    lets look at a line of javascript and talk about each part:

    let number = 1;

    let: let tells js that we're creating a variable so the next thing we type will be the
        name of that variable we are, "letting" exist.

    number: This is the name of the variable we 'let' exist. Variable names can be almost
        anything. They cannot start with numbers though i.e. '1var' is an invalid variable
        name, but var1 is valid.
    =: The '=' is called the assignment operator in js and most other programming languages.
        It takes whatever is to it's left (in this case 'number') and assigns it the value to
        the right to it. So in this case it takes the number 1 and assigns that value to the
        variable 'number'
    1: is simply a numeric constant. It is literally the number 1.
    ;: The semicolon(;) is probably one of the more complicated pieces here. It serves the same
        purpose a period(.) does in English. It completes a thought. When you have done one
        complete logical operation, you end it with a semicolon. There are a lot of exceptions
        and complicated rules around the semicolon, but for now just finish each line with one.
        If you forget to finish the line with a semicolon don't sweat it. JS has automatic 
        semicolon insertion. So if you miss one when Node is reading your code it'll add it
        for you. 

Don't stress too much about syntax. It'll become second nature eventually, and you can always
google the syntax of something complicated you forgot.

here's a little bit of complicated syntax just cause I feel like there should be code for each
of these comment blocks
*********************************************************************************************/

//this is some async code
//this stuff is what makes JS awesome for the web
const func = new Promise((resolve, reject) => {
    let date = new Date();
    date ? resolve(date) : reject('date not created');
});

func.then(data => console.log(data));

/****************************************ASSIGNMENT*******************************************

    1. Create a new file called index.js
    2. make the program console log, "Hello World"
    3. then it should create a varible with whatever name you want.
    4. assign the value of 12 divided by 4 to that variable.
    5. log the value of that variable

*********************************************************************************************/
