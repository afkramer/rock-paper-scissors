function game(){
    alert("Welcome to the game! There will be 5 rounds.");
    
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    let playerSelection = getUserInput();

    if (userInputIsValid(playerSelection)){
        roundResult = playRound(playerSelection, computerPlay());

        console.log(roundResult);

        if (roundResult.substr(0,7) === "You win"){
            playerScore++;
        }else if (roundResult.substr(0,8) === "You lose"){
            computerScore++;
        }
    } else {
        alert('The only valid values are Rock, Paper or Scissors. You forfeit this round.');
    }

    displayWinner(playerScore, computerScore);
}


function playRound(playerSelection, computerSelection){
    
    playerSelection = capitalizeInput(playerSelection);
    
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    if(playerSelection === "Rock" && computerSelection === "Paper"
        || playerSelection === "Scissors" && computerSelection === "Rock"
        || playerSelection === "Paper" && computerSelection === "Scissors"){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === computerSelection){
        return `It's a draw! Both players chose ${playerSelection}.`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function displayWinner(playerScore, computerScore){
    if (playerScore > computerScore) {
        console.log(
            `You win! The score was ${playerScore} to ${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log(
            `You lose. The score was ${computerScore} to ${playerScore}.`
        );
    } else {
        console.log(`It's a draw! Both players scored ${playerScore}.`);
    }
}

function capitalizeInput(playerSelection){
    return playerSelection.substr(0,1).toUpperCase() +
                        playerSelection.substr(1).toLowerCase();
}

function getUserInput(){
    return prompt("Choose rock, paper, or scissors");
}

function userInputIsValid(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection === "rock" || playerSelection === "paper" 
        || playerSelection === "scissors";
}

function computerPlay(){
    let index = Math.floor(Math.random() * 3);
    switch(index){
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

game();