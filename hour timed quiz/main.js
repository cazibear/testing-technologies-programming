let guesses = 0;
let secret = 0;
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let outputDiv = document.getElementById("outputs");
let guessAmountMessage = document.createElement("p");
let higherLowerMessage = document.createElement("p");

document.getElementById("startButton").addEventListener("click", () => {
	secret = Math.floor(Math.random() * 10 + 1);
	// make the secret between 1 and 10 to make it possible
	guessInput.disabled = false;
	guessButton.disabled = false;
	// enable the guess feature
	console.log(secret); // for checking the secret

	// clear out the input/output, and reset the guesses
	guesses = 0;
	guessInput.value = "";
	outputDiv.innerHTML = "";

	guessAmountMessage.innerText =
		"You have 3 tries to guess the secret number.";
	outputDiv.appendChild(guessAmountMessage);
	outputDiv.appendChild(higherLowerMessage);
	// let the user know they have 3 guesses
});

document.getElementById("guessButton").addEventListener("click", () => {
	guesses += 1; // tracking how many guesses
	// console.log(">", parseInt(guessInput.value) > secret); // was used for checking the logic was correct
	// console.log("<", parseInt(guessInput.value) < secret);
	// console.log("=", parseInt(guessInput.value) === secret);

	if (parseInt(guessInput.value) > secret) {
		// user's guess is higher
		higherLowerMessage.innerText =
			"Your guess is higher than the secret number...";
	} else if (parseInt(guessInput.value) < secret) {
		// user's guess is lower
		higherLowerMessage.innerText =
			"Your guess is lower than the secret number...";
	} else {
		// the user guessed the secret
		higherLowerMessage.innerText = "You guessed correctly, you won!";
		guessAmountMessage.innerText = "";

		guessInput.disabled = true;
		guessButton.disabled = true;
		return;
		// game finished!
	}

	// show how many guesses left
	guessAmountMessage.innerText = `You have ${3 - guesses} guesses left.`;

	// check if game over
	if (guesses == 3) {
		guessAmountMessage.innerText =
			"You didn't guess the secret number, game over.";

		guessInput.disabled = true;
		guessButton.disabled = true;
		// game over :(
	}
});
