/*Observations (cut to the top after solving)

It looks like the variable prints twice! Why is that? Is it because the variable is declared twice... or is it because of hoisting?

*/
console.groupCollapsed('Exercise 6');

let test = 'I am a test';

function hoistingTest() {
    // Try printing a variable here
    console.log(test); // undefined
}

hoistingTest();

// Declare the variable after the console.log
console.log(test);

console.groupEnd();