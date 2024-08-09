/* Variable declaration*/

let round = document.getElementById("roundNumber");
let plyerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("compScore");
let playerChoice = document.getElementById("playerChoice");
let compChoice = document.getElementById("compChoice");
let buttons = document.querySelectorAll(".choices button");
let result = document.getElementById("result");
let pop = document.getElementById("endGame");
let restart = document.getElementById("restart");
let champion = document.getElementById("winner");

let rock = "fas fa-hand-rock";
let paper = "fas fa-hand-paper";
let scissors = "fas fa-hand-scissors";

let compOptions = [rock, paper, scissors];

let compScore = 0;
let playerScore = 0;
let roundNumber = 1;

let game = () => {
    buttons.forEach(button => {
        button.addEventListener("click", (e)=>{
            let BtnClicked = e.target.className;
            playerChoice.className = BtnClicked;
            let randomComp = Math.floor(Math.random() * compOptions.length);
            compChoice.className = compOptions[randomComp];

           
            if((playerChoice.className === rock && compChoice.className === scissors)||(playerChoice.className === scissors && compChoice.className === paper)||(playerChoice.className === paper && compChoice.className === rock)){
            
                    result.innerHTML = "You win";
                    result.style.color = "#547033";
                    playerScore++;
                    plyerScore.innerHTML = playerScore;
                    roundIncrease();
                    
            }else if((playerChoice.className === rock && compChoice.className === paper)||(playerChoice.className === paper && compChoice.className === scissors)||(playerChoice.className === scissors && compChoice.className === rock)){
                
                    result.innerHTML = "Computer wins";
                    result.style.color = "#e05c3e";
                    compScore++;
                    computerScore.innerHTML = compScore;
                    roundIncrease();
            }
            else{

                    result.innerHTML = "It is a tie";
                    result.style.color = "#49575a";
                    plyerScore.innerHTML = playerScore;
                    computerScore.innerHTML = compScore;
                    roundIncrease();
            }

        })
    })
}

let roundIncrease = () => {
    if (roundNumber <= 9){
        roundNumber++;
        round.innerHTML = roundNumber;
    }
    else {


        endGame();

        restart.addEventListener("click", (e) => {
            pop.style.display="none";
            roundNumber=1;
            round.innerHTML = roundNumber;
            playerScore = 0;
            compScore = 0;
        });
        
    }
};

let endGame = () => {
    pop.style.display = "block";
    
    if (plyerScore>computerScore){

        champion.innerHTML = "You Win";
    }
    else if (computerScore>plyerScore){
        champion.innerHTML = "You Lose";
    }
    else {
        champion.innerHTML = "It's a Tie";
    }

    
};
game();