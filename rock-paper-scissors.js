let playerWin = 0;
let computerWin = 0;
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const content = document.querySelector("#content");
const retry = document.querySelector('.retry');
const game = document.querySelector('.game');

const compSelection = document.createElement('div');
compSelection.classList.add('compselection');
const roundWinner = document.createElement('div');
roundWinner.classList.add('roundwinner');
const gameWinner = document.createElement('div');
gameWinner.classList.add('gamewinner');
const tryAgain = document.createElement('button');



 

computerScore.textContent = computerWin;
playerScore.textContent = playerWin;



function playGame(e){
    const { target } = (e);
    let playerChoice = target.value;
    if (!target.matches('button')) {
        return;
    }
    let randomNumber = Math.floor(Math.random() * 3) + 1; 
    function computerSelection() {
        let getComputerChoice = randomNumber;
        if (getComputerChoice === 1) {
            compSelection.textContent = "The computer chose rock!";
        } else if (getComputerChoice === 2) {
            compSelection.textContent= "The computer chose paper!";
        } else if (getComputerChoice === 3) {
            compSelection.textContent = "The computer chose scissors!";
        }
        computerSelection = getComputerChoice;
        content.append(compSelection);
    }
    computerSelection();
    function comparison() {
        if (computerSelection === 1 && playerChoice == 3) {
            computerWin+=1;
            roundWinner.textContent = "The computer wins this round!";
            
        } else if (playerChoice == 1 && computerSelection === 3) {
            playerWin+=1;
            roundWinner.textContent = "You win this round!";
                      
        } else if (computerSelection > playerChoice) {
            computerWin+=1;
            roundWinner.textContent = "The computer wins this round!";
               
        } else if (computerSelection == playerChoice) {
            roundWinner.textContent = "It's a tie this round!";
            
        } else if (computerSelection < playerChoice) {
            playerWin+=1;
            roundWinner.textContent = "You win this round!";
    
        } 
        playerScore.innerHTML = playerWin;
        computerScore.innerHTML = computerWin;
        content.append(roundWinner);
    };
    comparison();
    if (playerWin === 5) { 
        gameWinner.textContent = "You win the game!";
        game.remove();
        tryAgain.textContent = "Play Again?";
        retry.append(tryAgain);
    } else if (computerWin === 5) {
        gameWinner.textContent = "You lose the game!";
        game.remove();
        tryAgain.textContent = "Play Again?";
        retry.append(tryAgain);
    };
    content.append(gameWinner);
};

function playAgain(e) {
    document.location.reload();
}
game.addEventListener('click', playGame);
retry.addEventListener('click', playAgain);