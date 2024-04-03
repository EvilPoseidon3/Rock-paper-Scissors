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
   }}


   let buttonRock = document.querySelector("#buttonRock");
   let buttonPaper = document.querySelector('#buttonPaper');
   let buttonScissor = document.querySelector('#buttonScissor');
   let results = document.querySelector('#results');
   let buttons = document.querySelector("#buttons");
   let score = document.querySelector("#score");
   let wins = document.querySelector("#wins");
   let loses = document.querySelector("#loses");
   let ties = document.querySelector("#ties");

   let gameWins = 0;
   let gameLose = 0;
   let gameTies = 0;
   let totalGames = 0;

    
   

    
    buttons.addEventListener("click", event => {
            let target = event.target.id;
            let computerChoice = getComputerChoice();

        if (gameWins < 5 && gameLose < 5) {
            switch(target){
                case "buttonRock" :
                    let rockGame = gameResults(computerChoice, "rock");
                    results.textContent = rockGame;
                    if (rockGame.includes("win") === true ) {
                        gameWins++;
                        totalGames++;
                    } else if (rockGame.includes("lose") === true) {
                        gameLose++;
                        totalGames++;
                    } else {
                        gameTies++;
                        totalGames++;
                    }
                    wins.textContent = gameWins;
                    loses.textContent = gameLose;
                    ties.textContent = gameTies;
                    
                    break;

                case "buttonPaper" :
                    let paperGame = gameResults(computerChoice, "paper");
                    results.textContent = paperGame;
                    if (paperGame.includes("win") === true ) {
                        gameWins++;
                        totalGames++;
                    } else if (paperGame.includes("lose") === true) {
                        gameLose++;
                        totalGames++;
                    } else {
                        gameTies++;
                        totalGames++;
                    }
                    wins.textContent = gameWins;
                    loses.textContent = gameLose;
                    ties.textContent = gameTies;
                    break;

                case "buttonScissor" :
                    let scissorGame = gameResults(computerChoice, "scissors");
                    results.textContent = scissorGame;
                    if (scissorGame.includes("win") === true ) {
                        gameWins++;
                        totalGames++;
                    } else if (scissorGame.includes("lose") === true) {
                        gameLose++;
                        totalGames++;
                    } else {
                        gameTies++;
                        totalGames++;
                    }
                    wins.textContent = gameWins;
                    loses.textContent = gameLose;
                    ties.textContent = gameTies;
                    break;
            }} else { 
                if (gameWins > gameLose) {
                    resultOfTheGame = "Congradualtions you won the game!";
                } else if (gameLose > gameWins) {
                    resultOfTheGame = "You Fucking Suck loser you lost!"
                } else {
                    resultOfTheGame = "Well looks like its a tie, Try agian."
                }
                results.textContent = resultOfTheGame;

                
            }


   });

  