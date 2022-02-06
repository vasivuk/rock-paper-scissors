const rock = document.getElementById("rock");
rock.addEventListener('click', () => gameRound("rock", computerPlay()));
const paper = document.getElementById("paper");
paper.addEventListener('click', () => gameRound("paper", computerPlay()));
const scissors = document.getElementById("scissors");
scissors.addEventListener('click', () => gameRound("scissors", computerPlay()));

const playerScore = document.querySelector("#player .points");
const computerScore = document.querySelector("#computer .points");
const round = document.querySelector(".round span");
const victorText = document.querySelector(".victor-text");




function computerPlay(){
    //Random number from 0 to 99
    let num = Math.floor(Math.random()*100);
    if(num < 33) {
        return "rock";
    } else if (num >=33 && num < 66){
        return "paper";
    } else {
        return "scissors";
    }
}

function playerWins(message){
    let score = parseInt(playerScore.textContent);
    playerScore.textContent = ++score;
    if(score === 5) {
        victorText.textContent = "Player wins the game!";
        rock.removeEventListener('click', () => gameRound("rock", computerPlay()));
        paper.removeEventListener('click', () => gameRound("paper", computerPlay()));
        scissors.removeEventListener('click', () => gameRound("scissors", computerPlay()));
        return;        
    }
    victorText.textContent = message;
    round.textContent = parseInt(round.textContent) + 1;
}

function computerWins(message){
    let score = parseInt(computerScore.textContent);
    computerScore.textContent = ++score;
    if(score === 5) {
        victorText.textContent = "Computer wins the game!";
        rock.removeEventListener('click', () => gameRound("rock", computerPlay()));
        paper.removeEventListener('click', () => gameRound("paper", computerPlay()));
        scissors.removeEventListener('click', () => gameRound("scissors", computerPlay()));
        return;
    }
    victorText.textContent = message;
    round.textContent = parseInt(round.textContent) + 1;

}

function gameRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                computerWins("You lose! Rock loses to Paper!");
                break;
            } else if(computerSelection === "scissors"){
                playerWins("You win! Rock beats Scissors!");
                break;
            } else {
                victorText.textContent = "Draw! Both chose rock!";
                break;
            }
        case "scissors":
            if(computerSelection === "paper"){
                playerWins("You win! Scissors beat Paper!");
                break;
            } else if(computerSelection === "scissors"){
                victorText.textContent = "Draw! Both chose scissors!";
                break;
            } else {
                computerWins("You lose! Scissors lose to paper!");
                break;
            }
        case "paper":
            if(computerSelection === "paper"){
                victorText.textContent = "Draw! Both chose paper!";
                break;
            } else if(computerSelection === "scissors"){
                computerWins("You lose! Paper loses against Scissors");
                break;
            } else {
                playerWins("You win! Paper beats Rock!");
                break;
            }
        default:
            victorText.textContent = "Bad entry!";
            break;
    }
}


