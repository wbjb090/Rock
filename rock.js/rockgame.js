function getComputerChoice() {
   
    const choice = Math.random()
    if (choice <=.333) {
        computerChoice="Rock"
    }
    else if ( choice <=.666 && choice >=.334) {
        computerChoice="Paper"
    }
    else {
        computerChoice="Scissors"

    }
    
    return computerChoice
   
}    
//getComputerChoice()

 function getPlayerChoice() {
    playerChoice=prompt("Make your choice")
    if (playerChoice.toUpperCase()!= "ROCK, PAP")
    return playerChoice
    
}
//getPlayerChoice()

let humanScore = 0;
let computerScore =0;

//Play Round

function playRound(computerChoice, playerChoice)

{
   
    
    if (computerChoice ==="Rock" && playerChoice.toUpperCase() ==="SCISSORS"){
console.log("You lose")
computerScore = computerScore +1 

    }
    else if (computerChoice ==="Paper" && playerChoice.toUpperCase()==="ROCK"){
console.log("You lose")
computerScore = computerScore +1 
    }
    else if (computerChoice ==="Scissors" && playerChoice.toUpperCase()==="PAPER"){
console.log("You lose")
computerScore = computerScore +1 
    }

else if (computerChoice.toUpperCase()=== playerChoice.toUpperCase()){
console.log("tie")
computerScore = computerScore +.5
humanScore= humanScore + .5
    }
    else if (playerChoice.toUpperCase()&& playerChoice!== "ROCK" && playerChoice.toUpperCase()!== "PAPER" && playerChoice.toUpperCase() !=="SCISSORS") {
        console.log("Incorrect Selection try again")
        playRound(getComputerChoice(), getPlayerChoice())
        
    }
    else {
        console.log("You win")
        humanScore= humanScore + 1
    }
   
    console.log("Your Score" + " " +humanScore)
    console.log("Computer Score" + " " + computerScore)
}


function playGame(){
    playRound(getComputerChoice(), getPlayerChoice())
    playRound(getComputerChoice(), getPlayerChoice())
    playRound(getComputerChoice(), getPlayerChoice())
    playRound(getComputerChoice(), getPlayerChoice())
    playRound(getComputerChoice(), getPlayerChoice())
}

playGame()






