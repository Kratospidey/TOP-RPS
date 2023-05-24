let userScore = 0; // number of rounds the user has won
let computerScore = 0; // number of rounds the computer has won

// function to get a random choice from computer
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

// function to play a round determine a winner and modify their total score
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
	return (
		playerSelection == "Rock" ||
		playerSelection == "Paper" ||
		playerSelection == "Scissors"
	);
}

function round() {
	let userChoice = "";

	// do while loop since the first run userChoice will be empty so it would be invalid and never start running unless do while
	do {
		userChoice = prompt("Enter either Rock or Paper or Scissors");
		if (userChoice !== null) {
			userChoice =
				userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
		}
		// essentially checking if user clicked cancel at the prompt so it only terminates if they did
		if (userChoice === null) {
			return;
		}
	} while (!validateUserChoice(userChoice));
	/* not valid since you want to keep on executing until valid stops returning false 
             (but false will cause the loop to exit and move ahead even though 
                it's not valid so we use not to inverse the logic essentialy ) so when valid returns true 
                aka it's a valid choice, boolean becomes false and the while loop is terminated */

	let computerChoice = getComputerChoice();
	alert(playRound(userChoice, computerChoice));
	counter++;
	// calling the function to display the winner
	// alert(getWinner());
}

function getWinner() {
	// if condition for a tie
	if (userScore == computerScore) {
		return `It's a tie!
        Score :- ${userScore}:${computerScore}`;
	}
	// return the string containing who won and the total score and tertiary expression to determine who won
	return `${userScore > computerScore ? "User" : "Computer"} won! 
    Score :- ${userScore}:${computerScore}`;
}

// starting the game
round();
