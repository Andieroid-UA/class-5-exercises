//Scopes relate to where a variable can be used in the program. Here the variable outerVar is accessable because it is global and accessable to the console log asking for both outerVar and innerVar. The innerVar is internal but is being accessed because that command in the log is inside with innerVar.

console.groupCollapsed('Exercise 1');
function outerFunction() {
	let outerVar = "I'm outside!";// Global scope

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? Yes!
		console.log(innerVar); // Can we access innerVar? Yes
	}

	innerFunction();
}

outerFunction();
console.groupEnd();