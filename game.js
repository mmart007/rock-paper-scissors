function getComputerChoice() {
    let rnum = Math.floor(Math.random()*3);
    switch (rnum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default: 
            return 'Computer error';

    }
}

function getHumanChoice() {
    return prompt('Choose rock, paper or scissors').toLowerCase();
}
//console.log(getComputerChoice());
//console.log(getHumanChoice());


function playGame(){
let humanScore = 0;
let computerScore = 0;

for(let round =1; round<=5; round++){
    playRound(getHumanChoice(), getComputerChoice());
    //console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`At the end of the round, the human has ${humanScore} points and the computer has ${computerScore}.`)
}

let gameResult = '';
if (humanScore > computerScore) {
    alert(`The human wins ${humanScore}-${computerScore}.`)
} else if (computerScore > humanScore) {
    alert(`The computer wins ${computerScore}-${humanScore}.`)
} else {
    alert(`It's a tie: ${humanScore}-${computerScore}.`)
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer chooses ${computerChoice} and human chooses ${humanChoice}`);
    if(humanChoice===computerChoice){
        return `It's a tie`;
    } else if (
        (humanChoice ==='rock' && computerChoice === 'scissors') ||
        (humanChoice ==='paper'&& computerChoice === 'rock') ||
        (humanChoice ==='scissors' && computerChoice === 'paper')){
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}.`;
        }
    
}
}

playGame();