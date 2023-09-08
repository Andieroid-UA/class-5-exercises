console.groupCollapsed('Exercise 5');

function functionFactory(param) {
    // Return a function that makes use of 'param'
    return function(bug) {
        return `${bug}! ${param}`;
    };
}
// Create an instance of the inner function by invoking functionFactory with a parameter
const smallBug = functionFactory('Ladybug');

console.log(smallBug('I am a small bug'));
console.groupEnd();