describe("template spec", () => {
	it("displays user choice", () => {
		cy.visit("http://127.0.0.1:5500/rps.html");

		cy.get("#rock").click();
		cy.get("#user-option").should("exist").contains("Rock");

		cy.get("#paper").click();
		cy.get("#user-option").should("exist").contains("Paper");

		cy.get("#scissors").click();
		cy.get("#user-option").should("exist").contains("Scissors");
	});

	it("test win conditions", () => {
		cy.visit("http://127.0.0.1:5500/rps.html");

		for (var i = 0; i < 10; i++) {
			// check rock
			cy.get("#rock").click();

			cy.get("#computer-option").then(($span) => {
				if ($span.text() == "Rock") {
					cy.get("#result").should("exist").contains("Draw");
				} else if ($span.text() == "Paper") {
					cy.get("#result").should("exist").contains("Lose");
				} else {
					cy.get("#result").should("exist").contains("Win");
				}
			});

			// check rock
			cy.get("#paper").click();

			cy.get("#computer-option").then(($span) => {
				if ($span.text() == "Rock") {
					cy.get("#result").should("exist").contains("Win");
				} else if ($span.text() == "Paper") {
					cy.get("#result").should("exist").contains("Draw");
				} else {
					cy.get("#result").should("exist").contains("Lose");
				}
			});

			// check rock
			cy.get("#scissors").click();

			cy.get("#computer-option").then(($span) => {
				if ($span.text() == "Rock") {
					cy.get("#result").should("exist").contains("Lose");
				} else if ($span.text() == "Paper") {
					cy.get("#result").should("exist").contains("Win");
				} else {
					cy.get("#result").should("exist").contains("Draw");
				}
			});
		}
	});
});
