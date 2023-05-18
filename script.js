let userScore = 0; // number of rounds the user has won
let computerScore = 0;

function getComputerChoice() {
	let num = Math.random() * 10;
	while (num !== 0) {
		if (num <= 3) {
			return "Rock";
		} else if (num > 3 && num <= 6) {
			return "Paper";
		} else {
			return "Scissors";
		}
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection =
		playerSelection.charAt(0).toUpperCase() +
		playerSelection.slice(1).toLowerCase();
	// If conditon for tie
	if (playerSelection == computerSelection) {
		return `It's a tie!`;
	}
	// If condition for all winning cases
	else if (
		(playerSelection == "Rock" && computerSelection == "Scissors") ||
		(playerSelection == "Scissors" && computerSelection == "Paper") ||
		(playerSelection == "Paper" && computerSelection == "Rock")
	) {
		userScore++;
		return `You win! ${playerSelection} beats ${computerSelection}`;
	}
	// since user hasn't won and it's not a tie, the only remaining option is they lost
	else {
		computerScore++;
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	}
}

function validateUserChoice(playerSelection = "") {
	// condition to check if it's a valid choice
	//! console.log(playerSelection);
	if (
		playerSelection == "Rock" ||
		playerSelection == "Paper" ||
		playerSelection == "Scissors"
	) {
		return true;
	} else {
		// console.log("Choose a valid option!");
		return false;
	}
}

function round() {
	const COUNT = 5;
	let counter = 1;
	let userChoice = "";
	while (counter <= COUNT) {
		do {
			userChoice = prompt("Enter either Rock or Paper or Scissors");
			if (!(userChoice === null)) {
				userChoice =
					userChoice.charAt(0).toUpperCase() +
					userChoice.slice(1).toLowerCase();
			}
		} while (!validateUserChoice(userChoice) && userChoice !== null);
		if (userChoice !== null) {
			let computerChoice = getComputerChoice();
			alert(playRound(userChoice, computerChoice));
		}
		if (userChoice === null) {
			return;
		}
		counter++;
	}

	alert(getWinner());
}

function getWinner() {
	let winner;
	if (userScore == computerScore) {
		return `It's a tie!
        Score :- ${userScore}:${computerScore}`;
	} else {
		if (userScore > computerScore) {
			winner = "User";
		} else {
			winner = "Computer";
		}
		return `${winner} won! 
        Score :- ${userScore}:${computerScore}`;
	}
}

round();
