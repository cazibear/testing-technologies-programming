/**
 * Coding Task 1 - Classes and Objects
 */

class User1 {
	constructor(firstname, surname) {
		this.firstname = firstname;
		this.surname = surname;
	}

	hello() {
		return `Hello, ${this.firstname} ${this.surname}`;
	}
}

let user1 = new User1("John", "Doe");
console.log(user1.firstname, user1.surname);
console.log(user1.hello());

let user2 = new User1("Jane", "Doe");
console.log(user2.hello());
console.log();

/**
 * Coding Task 2 - Encapsulation
 */

class User2 {
	constructor(firstname, surname) {
		this._firstname = firstname;
		this._surname = surname;
	}

	get firstname() {
		return this._firstname;
	}
	set firstname(firstname) {
		this._firstname = firstname;
	}

	get surname() {
		return this._surname;
	}
	set surname(surname) {
		this._surname = surname;
	}

	hello() {
		return "Hello World!";
	}
}

let user = new User2("", "");
user.firstname = "Dave";
user.surname = "Smith";
console.log(user.hello());
console.log(`My name is ${user.firstname} ${user.surname}`);
console.log();

/**
 * Coding Task 3 - Inheritance (Subclass and Superclass)
 */

class User3 {
	set username(username) {
		this._username = username;
	}
}
class Admin1 extends User3 {
	expressYourRole() {
		return "Admin";
	}

	sayHello() {
		return `Hello Admin, ${this._username}`;
	}
}

let admin = new Admin1();
admin.username = "Balthazar";
console.log(admin.sayHello());
console.log();

/**
 * Coding Task 4 - Polymorphism
 */

class User4 {
	constructor() {
		this._numberOfArticles = 0;
	}

	get numberOfArticles() {
		return this._numberOfArticles;
	}
	set numberOfArticles(numberOfArticles) {
		this._numberOfArticles = numberOfArticles;
	}

	calcScores() {
		throw new TypeError("Method calcScores is abstract.");
	}
}
class Author extends User4 {
	constructor() {
		super();
	}

	calcScores() {
		return this._numberOfArticles * 10 + 20;
	}
}
class Editor extends User4 {
	constructor() {
		super();
	}

	calcScores() {
		return this._numberOfArticles * 6 + 15;
	}
}
let author = new Author();
let editor = new Editor();
author.numberOfArticles = 8;
editor.numberOfArticles = 15;

console.log(author.calcScores());
console.log(editor.calcScores());
console.log();

/**
 * Coding Task 5 - Abstraction
 */

class User5 {
	constructor() {
		this._username = "";

		if (this.constructor === User5) {
			throw new TypeError("This class is abstract.");
		}
	}

	get username() {
		return this._username;
	}
	set username(username) {
		this._username = username;
	}

	stateYourRole() {
		throw new TypeError("This method is abstract.");
	}
}
class Admin2 extends User5 {
	stateYourRole() {
		return "admin";
	}
}
class Viewer extends User5 {
	stateYourRole() {
		return "viewer";
	}
}

admin = new Admin2();
admin.username = "Balthazar";
console.log(admin.stateYourRole());

let viewer = new Viewer();
viewer.username = "Melchior";
console.log(viewer.stateYourRole());
