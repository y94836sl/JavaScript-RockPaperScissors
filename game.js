function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    let tempInt = Math.floor(Math.random() * 3);
    let computerChoice = options[tempInt];
    console.log(`Computer chooses \"${computerChoice}\"`);
    return computerChoice;
}
function playerPlay(){
    let playerChoice = prompt("Please choose from Rock/Paper/Scissors: ");
    let playerInput = playerChoice.toLowerCase();
    return playerInput;
}

function playRound(playerSelection, computerSelection){
   playerInput = playerSelection.toLowerCase();
   computerInput = computerSelection.toLowerCase();
   switch(computerInput){
    case "rock":
        switch(playerInput){
            case "rock":
                return("Draw, you both choose rock!");
                break;
            case "paper":
                return("You win, paper beats rock!");
                break;
            case "scissors":
                return("You lose, rock beats seissors!");
                break;
            default:
                return null;
                break;
        }
        break;
    case "paper":
        switch(playerInput){
            case "rock":
                return("You lose, paper beats rock!");
                break;
            case "paper":
                return("Draw, you both choose paper!");
                break;
            case "scissors":
                return("You win, seissors beats paper!");
                break;
            default:
                return null;
                break;
        }
        break;
    case "scissors":
        switch(playerInput){
            case "rock":
                return("You win, rock beats seissors!");
                break;
            case "paper":
                return("You lose, seissors beats paper!");
                break;
            case "scissors":
                return("Draw, you both choose seissors!");
                break;
            default:
                return null;
                break;
        }
        break;
    default:
        return null;
   }
   
}
// let playerSelection = playerPlay();
// let playerSelection = "rock"; //----------test------------
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i = 0; i <= 5; i++){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection)); 
    }
}

game();