/*Rock paper scissors is a game played by 2 people or 
1 person vs a computer. Each player chooses either a 
rock, a paper, or scissors and compares their choice
to what the other player chose. Rock beats scissors.
Scissors beats paper. Paper beats rock. Usually the 
game is played best 2 out of 3 but for this assignment
the game will go 5 rounds. */

//Create a variable that will store player guess data
let guess = prompt("Choose rock, paper, or scissors:").toLowerCase();
//Create 3 variables, rock, paper, scissors
//Player 1 chooses a variable, either rock, scissors, or paper.
function playerSelection() {
    let answer = guess;
    if (answer === 'rock') {
        answer = 1;
        console.log("You chose rock!");
    } else if (answer === 'paper') {
        answer = 2;
        console.log("You chose paper!");
    } else if (answer === 'scissors') {
        answer = 3;
        console.log("You chose scissors!");
    } else {
        console.log("You must choose rock, paper, or scissors!");
    }
    playerSelection = answer;
    console.log(playerSelection);
}
console.log(playerSelection());
//Create a variable that will store computer guess data
//Player 2 chooses a variable at random, """
let randomNumber = Math.floor(Math.random() * 3) + 1; 
function computerSelection() {
    let getComputerChoice = randomNumber;
    if (getComputerChoice === 1) {
        console.log("The computer chose rock!");
    } else if (getComputerChoice === 2) {
        console.log("The computer chose paper!");
    } else if (getComputerChoice === 3) {
        console.log("The computer chose scissors!");
    } else {
        console.log("The computer didn't make a selection?");
    }
    computerSelection = getComputerChoice;
    console.log(computerSelection);
}
console.log(computerSelection());
//The chosen variables are compared.
/*Scissor "3" is greater than rock "1" so scissor is beating
rock. I need to make rock beat scissors. */
function comparison() {
    if (computerSelection === 1 && playerSelection === 3) {
        console.log("The computer wins this round!");
    } else if (playerSelection === 1 && computerSelection === 3) {
        console.log("You win this round!");
    } else if (computerSelection > playerSelection) {
        console.log("The computer wins this round!");
    } else if (computerSelection == playerSelection) {
        console.log("It's a tie this round!");
    } else if (computerSelection < playerSelection) {
        console.log("You win this round!");
    }
}
console.log(comparison());
/* The first two && objects were incorporated to fix the 
scissors beating the rock*/

//A winner for the round is chosen based on the compared variables.
//The game ends after 5 rounds
//A winner for the overall game is declared.