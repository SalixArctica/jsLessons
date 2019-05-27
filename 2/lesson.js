/***********************************************************************
    CONTROL FLOW AND COMPARITIVE LOGIC

    In this lesson we'll talk about how to test things and do conditional
    logic in js. This stuff is usually called control flow becuase it
    changes the flow of the program, e.g. what code is ran. We'll kick
    it off with some comparitive logic.

    Comparison Operators
        Comparisons return a boolean value (true or false). They can be used
        to compare values/variables. Here's an expample.

    12 == 10 //returns false
 
    The comparison operators are as follows:

        == :loose equality, checks if two values are equal
        === : strict equality, checks if two values are equal and share
            a type
        > :greater than, checks if left value is greater that right value
        < :less than, checks if left value is less than right value
        >= : greater than or equal to, self explanatory
        <= : less than or equal to, self explanatory
        != : not equal value
        !== : not equal value or type

    So lets test out some of these operators
************************************************************************/
    let x = 5;

    console.log(x > 3); //true
    console.log(x == 4); //false
    console.log(x <= 5); //true
    console.log(x == 'a string'); //false
    console.log(x != 1000); //true
    console.log(x === '5'); //false <- this is a weird one

/***********************************************************************
    CONTROL FLOW

    So it's nice to have these checks. We can test things with them, but
    how does it actually help us program. In comes control flow. The most
    basic of which is 'if'. if let's us set some code aside that will 
    only run 'if' something is true. Below is an example.
************************************************************************/

    //if x is greater than 3
    if(x > 3) {

        //log the phrase 'x is greater than 3!'
        console.log('x is greater than 3!');
    }
    //if false move on