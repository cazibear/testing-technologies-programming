describe("template spec", () => {
	const url = "rps.html";

	it("displays user choice", () => {
		cy.visit(url);

		cy.get("#rock").click();
		cy.get("#user-option").should("have.text", "Rock");

		cy.get("#paper").click();
		cy.get("#user-option").should("have.text", "Paper");

		cy.get("#scissors").click();
		cy.get("#user-option").should("have.text", "Scissors");
	});

	it("test win conditions", () => {
		cy.visit(url);

		for (var i = 0; i < 10; i++) {
			// check rock results
			cy.get("#rock").click();

			cy.get("#computer-option").then(($span) => {
				if ($span.text() == "Rock") {
					cy.get("#result").should("have.text", "Draw");
				} else if ($span.text() == "Paper") {
					cy.get("#result").should("have.text", "Lose");
				} else {
					cy.get("#result").should("have.text", "Win");
				}
			});

			// check paper results
			cy.get("#paper").click();

			cy.get("#computer-option").then(($span) => {
				if ($span.text() == "Rock") {
					cy.get("#result").should("have.text", "Win");
				} else if ($span.text() == "Paper") {
					cy.get("#result").should("have.text", "Draw");
				} else {
					cy.get("#result").should("have.text", "Lose");
				}
			});

			// check scissors results
			cy.get("#scissors").click();

			cy.get("#computer-option").then(($span) => {
				if ($span.text() == "Rock") {
					cy.get("#result").should("have.text", "Lose");
				} else if ($span.text() == "Paper") {
					cy.get("#result").should("have.text", "Win");
				} else {
					cy.get("#result").should("have.text", "Draw");
				}
			});
		}
	});
});
