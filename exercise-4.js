
console.groupCollapsed('Exercise 4');

function outer() {

    let testVariable = 'Outer';// This is my global variable

    //This is my internal function to modify the global variable
    function inner() {
        console.log('testing inside', testVariable);
    }
    inner();
}

outer();

console.groupEnd();