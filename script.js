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

    
   

    
    buttons.addEventListener("click", event => {
            let target = event.target.id;
let computerChoice = getComputerChoice();
            switch(target){
                case "buttonRock" :
                    let rockGame = gameResults(computerChoice, "rock");
                    results.textContent = rockGame;
                    break;

                case "buttonPaper" :
                    let paperGame = gameResults(computerChoice, "paper");
                    results.textContent = paperGame;
                    break;

                case "buttonScissor" :
                    let scissorGame = gameResults(computerChoice, "scissors");
                    results.textContent = scissorGame;
                    break;
            }
   });


buttons.addEventListener("click", event => {
    let target = event.target.id;
    let totalWins = 0;
    let totalLoses = 0;
    let totalTies = 0;
    let numberGames = 0;
    
    while (numberGames < 5) {

        let round = results;

        if (round.includes("win") === true) {
            totalWins++;
            numberGames++;
        } else if (round.includes("lose") === true) {
            totalLoses++ ;
            numberGames++ ;
        } else {
            totalTies++ ;
            numberGames++ ;
        }


    }
})