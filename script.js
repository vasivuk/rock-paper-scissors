document.getElementById("rock").addEventListener('click', () => console.log("rock"));
document.getElementById("paper").addEventListener('click', () => console.log("hello"));
document.getElementById("scissors").addEventListener('click', () => console.log("hello"));

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

function gameRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                return "You lose! Rock loses to Paper!";
            } else if(computerSelection === "scissors"){
                return "You win! Rock beats Scissors!";
            } else {
                return "Draw! Both chose rock!";
            }
        case "scissors":
            if(computerSelection === "paper"){
                return "You win! Scissors beat Paper!";
            } else if(computerSelection === "scissors"){
                return "Draw! Both chose scissors!";
            } else {
                return "You lose! Scissors lose to paper!";
            }
        case "paper":
            if(computerSelection === "paper"){
                return "Draw! Both chose paper!";
            } else if(computerSelection === "scissors"){
                return "You lose! Paper loses against Scissors";
            } else {
                return "You win! Paper beats Rock!";
            }
        default:
            return "Bad entry!";
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;
    for(let i = 1; i < 6; i++){
        console.log("Round " + i);
        let round = gameRound(prompt("Insert rock,paper or scissors:").toLowerCase(), computerPlay());
        console.log(round);
        if(round.charAt(4) === 'w'){
            playerWin++;
        } else if(round.charAt(4) === 'l'){
            computerWin++;
        }
    }
    console.log(`Player has won ${playerWin} rounds.`);
    console.log(`Computer has won ${computerWin} rounds.`);

    if(playerWin > computerWin){
        console.log("Player wins the game!");
    } else if (computerWin > playerWin) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game ends in a draw!");
    }
}


