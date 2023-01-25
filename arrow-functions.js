/**
 * Q1
 * Write an arrow function expression called greet(). It should accept a single
 * argument representing a person's name.
 */
let greet = (name) => console.log("Hi " + name + "!");
greet("John"); //"Hi John!"
greet("James"); //"Hi James!"

/**
 * Q2
 * Convert the function isEven() into an equivalent arrow function.
 */
let isEven = (num) => num % 2 === 0;
console.log(isEven(2)); // true
console.log(isEven(3)); // false

/**
 * Q3
 * Convert the following JavaScript function declaration to arrow function
 * syntax:
 */
let counterFunc = (counter) => {
	if (counter > 100) {
		counter = 0;
	} else {
		counter++;
	}

	return counter;
};

/**
 * Q4
 * Write an arrow function for the following JavaScript function:
 */
let nameAge = (name, age) => {
	console.log("Hello " + name);
	console.log("You are " + age + " years old");
};

/**
 * Q5
 * Write the arrow function for the following:
 */
let printOnly = () => console.log("printing");

/**
 * Q6
 * Write the arrow function for the following:
 */
let sum = (num1, num2) => num1 + num2;
