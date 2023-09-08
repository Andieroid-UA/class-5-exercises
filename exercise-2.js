// With this variation we call 'someExample' inside the mainFunction, but we declare it inside the hoistedFunction. The result is calling "someExample" as 10 and then the final call as undefined

/*
console.groupCollapsed('Exercise 2');

let someExample; //Hoisted to the top of the scope

function mainFunction() {
	// Call the hoistedFunction here
    let someExample = 10;
	// Now, declare the hoistedFunction below
    console.log(someExample);
}

mainFunction();

console.log(someExample); //undefined

console.groupEnd();
*/

console.groupCollapsed('Exercise 2');

let someExample = "Example";
let anotherExample = 86;

mainFunction();

function mainFunction() {
    console.log('What does this do?');
    console.log(someExample); //Example
    console.log(anotherExample);// 86
//    console.log(finalExample);
}

//let finalExample = 6; // Turns out you cannot access the finalExample variable before it is declared. This is because it is not hoisted to the top of the scope.

console.groupEnd();