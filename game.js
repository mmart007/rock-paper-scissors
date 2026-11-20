let humanScore=0;
let computerScore = 0;
let playerName = prompt('What is your name?');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const pScore = document.querySelector('#player');
const cScore = document.querySelector('#computer');
const body = document.querySelector('body');
const pName = document.querySelector('#playerName');
pName.textContent = playerName;

rock.addEventListener('click', (event) => {
playRound(event.target.id, getComputerChoice());    
})

paper.addEventListener('click', (event) => {
playRound(event.target.id, getComputerChoice());    
})

scissors.addEventListener('click', (event) => {
playRound(event.target.id, getComputerChoice());    
})

const resultBoard = document.createElement('div')    
resultBoard.style.paddingTop = '12px';
resultBoard.style.fontWeight = '700';

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

function playRound(humanChoice, computerChoice) {
    
    if(humanChoice===computerChoice){
        resultBoard.textContent = `It's a tie, as you both chose ${humanChoice}.`
    } else if (
        (humanChoice ==='rock' && computerChoice === 'scissors') ||
        (humanChoice ==='paper'&& computerChoice === 'rock') ||
        (humanChoice ==='scissors' && computerChoice === 'paper')){
            humanScore++;
            resultBoard.textContent = `${playerName} wins as ${humanChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            resultBoard.textContent = `Computer wins as ${computerChoice} beats ${humanChoice}.`;
        }
    pScore.textContent = humanScore;
    cScore.textContent = computerScore;
    body.appendChild(resultBoard);
    playGame();

}

function playGame(){
    if(humanScore === 5 || computerScore === 5){
        humanScore === 5 ? alert(`${playerName} wins! Click ok to play again`): 
            alert('The computer Wins! Click ok to play again');
        cScore.textContent = humanScore = 0;
        pScore.textContent = computerScore = 0;
        resultBoard.textContent = '';
    }
}






/* In our UI, the player should be able to play the game by clicking on buttons 
rather than typing their answer in a prompt.


Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.
Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.
Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push origin --delete rps-ui. Congrats, we’re all done with our cleanup! */