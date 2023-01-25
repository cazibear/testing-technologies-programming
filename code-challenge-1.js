/**
 * Task 1
 * Write a function expression called reverseString(). It should accept a
 * single argument representing a person's name. It should return a reverse
 * string as shown below:
 */
let reverseString = (name) => {
	let reversed = "";
	for (var i = name.length - 1; i >= 0; i--) {
		// add the letters of the name to a new string, from back to front
		reversed += name[i];
	}
	return reversed;
};
console.log(reverseString("John")); // nhoJ
console.log(reverseString("James")); // semaJ

/**
 * Task 2
 * Write a function expression called reverseArray(). It should accept an array
 * as a single argument. It should return a reversed array and it should work
 * for any data type.
 */
let reverseArray = (items) => {
	let reversed = [];
	for (var i = items.length - 1; i >= 0; i--) {
		// do the same with the previous, but with items into the new array
		reversed += items[i];
	}
	return reversed;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["I", "like", "JavaScript"])); // ["JavaScript", "like", "I"]

/**
 * Task 3
 * Write a function expression called mostExpensiveItem(). It should accept an
 * array of items as a single argument. It should return the item that has the
 * most cost tied up, calculated by the amount in stock * price.
 */
let mostExpensiveItem = (data) => {
	let mostExpensive = 0;
	let maxCost = 0;
	for (i = 0; i < data.length; i++) {
		// calculate the cost tied up
		let costTiedUp = data[i].stock * data[i].price;
		if (costTiedUp > maxCost) {
			// if it's higher than the max cost found so far, note the index of it and what that cost was
			maxCost = costTiedUp;
			mostExpensive = i;
		}
	}

	// then return which was decided the most expensive
	return data[mostExpensive];
};
const testData = [
	{ item: "irn bru", price: 3.25, stock: 50 },
	{ item: "fanta", price: 3.98, stock: 45 },
	{ item: "diet coke", price: 4.4, stock: 38 },
	{ item: "7up", price: 3.99, stock: 42 },
];

console.log(mostExpensiveItem(testData)); // { item: 'fanta', price: 3.98, stock: 45 }
