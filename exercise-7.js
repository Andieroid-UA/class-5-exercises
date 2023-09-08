// Not finished yet!

console.groupCollapsed('Exercise 7');

function setupCounter() {
    // Define a count variable here
    let count = 5;

    return function() {
        // Increment and print the count
        count++;
        console.log(count);
    }
}

// Create a counter instance and invoke it to test
const counter = setupCounter();

console.groupEnd();