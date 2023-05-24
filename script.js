let userScore = 0; // number of rounds the user has won
let computerScore = 0; // number of rounds the computer has won
let turns = 0; // number of turns played
let scoreDiv = document.querySelector("#score"); // div to display the score
let userCScore = `User: ${userScore}`; // string to format user's score
let computerCScore = `Computer: ${computerScore}`; // string to format computer's score
let userVScore = document.createElement("h2"); // h1 node to store and update user's score which is displayed in div
let computerVScore = document.createElement("h2"); // h1 node to store and update computer's score which is displayed in div
userVScore.innerText = userCScore; // inserting the string inside the h1 node
computerVScore.innerText = computerCScore; // inserting the string inside the h1 node
let matchResult = document.createElement("h3"); // h3 node to store the match result
let restartButton = document.querySelector(".restart"); // selecting a button with the restart class
let spacebreak = document.createElement("br"); // creating a br element
let winner = document.createElement("h1"); // creating h1 node to display the winner at the end
let scores = document.createElement("div"); // div to move around the scores
scores.classList.add("scores");
scores.append(userVScore, computerVScore);
scoreDiv.append(matchResult, scores, spacebreak, winner); // updating the div with the h1 nodes

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
	// If condition for all winning cases
	if (playerSelection === computerSelection) {
		updateMatchResult(`It's a tie! You both chose ${playerSelection}`);
		finishGame();
	} else if (
		(playerSelection == "Rock" && computerSelection == "Scissors") ||
		(playerSelection == "Scissors" && computerSelection == "Paper") ||
		(playerSelection == "Paper" && computerSelection == "Rock")
	) {
		userScore++;
		updateMatchResult(`You win! ${playerSelection} beats ${computerSelection}`);
		updateDivScore();
		finishGame();
	}
	// since user hasn't won and it's not a tie, the only remaining option is they lost
	else {
		computerScore++;
		updateMatchResult(
			`You lose! ${playerSelection} beats ${computerSelection}`
		);
		updateDivScore();
		finishGame();
	}
}

// function to update the player's score
function updateDivScore() {
	userCScore = `User: ${userScore}`;
	computerCScore = `Computer: ${computerScore}`;
	userVScore.innerText = userCScore;
	computerVScore.innerText = computerCScore;
}

// function to reset the game and undo any changes
function resetGame() {
	userScore = 0;
	computerScore = 0;
	updateDivScore();
	updateMatchResult("");
	restartButton.classList.toggle("restart");
	winner.innerText = "";
}

// function to update and display the latest match result
function updateMatchResult(result) {
	matchResult.innerText = result;
}
// event listener for rock
const rock = document.querySelector(`#rock`);

rock.addEventListener("click", () => {
	playRound("Rock", getComputerChoice());
});

// event listener for paper
const paper = document.querySelector(`#paper`);

paper.addEventListener("click", () => {
	playRound("Paper", getComputerChoice());
});

// event listener for scissors
const scissors = document.querySelector(`#scissors`);

scissors.addEventListener("click", () => {
	playRound("Scissors", getComputerChoice());
});

// checks if the game has finished, if so prints the winner and enables restart option
function finishGame() {
	if (userScore == 5) {
		restartButton.classList.toggle("restart");
		winner.innerText = "User won the game!";
	} else if (computerScore == 5) {
		restartButton.classList.toggle("restart");
		winner.innerText = "Computer won the game!";
	}
}
// event listener to call the reset function
restartButton.addEventListener("click", () => {
	resetGame();
});
