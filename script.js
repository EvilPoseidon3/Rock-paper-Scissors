function getComputerChoice() {
    let rNumber = Math.random() * 100;
    if (rNumber >= 66 ) {
        return "rock";
    } else if (rNumber >= 33 && rNumber < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerChoice = getComputerChoice();


function userInput(){
let userChoice = prompt("Choose Rock, Paper, or Scissors");
let absoluteUserChoice = userChoice.toLowerCase();
return absoluteUserChoice;
}



function gameResults(x,   y) {
   if ((x  == "rock") &&   y  == "paper") {
    return "Paper beats rock you win!";
   } else if (x  == "paper" &&   y  == "rock") {
    return "Paper beats rock you lose!";
   }  else if (x  == "rock" &&   y  == "scissors") {
    return "Rock beats scissors you lose!";
   }  else if (x  == "scissors" &&   y  == "rock") {
    return "Rock beats scissors you win!";
   }  else if (x  == "paper" &&   y  == "scissors") {
    return "Scissors beats paper you win!";
   }  else if (x  == "scissors" &&   y  == "paper") {
    return "Scissors beats paper you lose!";
   }  else if (x  ==   y) {
    return "It's a Tie. Try again!";
   } else {
    return "Something didn't add up did you spell your answer right? Please try again.";
   }
    
}



function playGame(x) {
        // let wins = results.includes("win");
        // let loss = results.includes("lose");
        let totalWins = 0;
        let totalLoses = 0;
        let totalTies = 0;
        let numberGames = 0;

    while (numberGames < x) {
        
        let userGamePick = userInput();
        let computerGamePick = getComputerChoice();

           let round = gameResults(computerGamePick, userGamePick );
            if (round.includes("win") === true) {
                totalWins++ ;
                numberGames++;
            } else if (round.includes("lose") === true) {
                totalLoses++ ;
                numberGames++;
            } else {
                totalTies++;
                numberGames++;
            }
            console.log(round);
        
        
    }
    return "You won " + totalWins + ", lost " + totalLoses + ", and tied " + totalTies + " times.";
}

console.log(playGame(5));