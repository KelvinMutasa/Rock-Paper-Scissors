/* Variable declaration*/

let round = document.getElementById("roundNumber");
let plyerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("compScore");
let playerChoice = document.getElementById("playerChoice");
let compChoice = document.getElementById("compChoice");
let buttons = document.querySelectorAll(".choices button");
let result = document.getElementById("result");
let pop = document.querySelector(".endGame");
let restart = document.querySelector(".endGame button");
let champion = document.querySelector(".endGame h3");

let rock = "fas fa-hand-rock";
let paper = "fas fa-hand-paper";
let scissors = "fas fa-hand-scissors";

let compOptions = [rock, paper, scissors];

let compScore = 0;
let playerScore = 0;
let roundNumber = 1;

let endGame = () => {
    pop.style.display = "block";
    
    if (plyerScore>compScore){

        champion.innerHTML = "You Win";
    }
    else if (playerScore<compScore){
        champion.innerHTML = "You Lose";
    }
    else {
        champion.innerHTML = "It's a Tie";
    }

    
};

let roundIncrease = () => {
    if (roundNumber <= 9){
        roundNumber++;
        round.innerHTML = `${roundNumber}`;
    }
    else {

        roundNumber=1;
        round.innerHTML = `${roundNumber}`;
        playerScore = 0;
        compScore = 0;

        endGame();

        restart.addEventListener("click", (e) => {
            pop.style.display="none";
        });
        
    }
};


let game = () => {
    buttons.forEach(button => {
        button.addEventListener("click", (e)=>{
            let BtnClicked = e.target.className;
            playerChoice.className = BtnClicked;
            let randomComp = Math.floor(Math.random() * compOptions.length);
            compChoice.className = compOptions[randomComp];

           
            if((playerChoice.className === rock && compChoice.className === scissors)||(playerChoice.className === scissors && compChoice.className === paper)||(playerChoice.className === paper && compChoice.className === rock)){
            
                    roundIncrease();
                    result.innerHTML = "You win";
                    result.style.color = "#547033";
                    playerScore++;
                    plyerScore.innerHTML = `${playerScore}`;
                    
            }else if((playerChoice.className === rock && compChoice.className === paper)||(playerChoice.className === paper && compChoice.className === scissors)||(playerChoice.className === scissors && compChoice.className === rock)){
                
                    roundIncrease();
                    result.innerHTML = "Computer wins";
                    result.style.color = "#e05c3e";
                    compScore++;
                    computerScore.innerHTML = `${compScore}`;
                    
            }
            else{

                    roundIncrease();
                    result.innerHTML = "It is a tie";
                    result.style.color = "#49575a";
                    plyerScore.innerHTML = `${playerScore}`;
                    computerScore.innerHTML = `${compScore}`;
            }

        })
    })
}
window.onload = game();