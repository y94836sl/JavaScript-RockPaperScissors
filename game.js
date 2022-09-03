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
                alert("Draw, you both choose rock!");
                return "draw";
                break;
            case "paper":
                alert("You win, paper beats rock!");
                return "win";
                break;
            case "scissors":
                alert("You lose, rock beats scissors!");
                return "lose";
                break;
            default:
                alert("Please enter a valid input: Rock/Paper/Scissors!");
                return null;
                break;
        }
        break;
    case "paper":
        switch(playerInput){
            case "rock":
                alert("You lose, paper beats rock!");
                return "lose";
                break;
            case "paper":
                alert("Draw, you both choose paper!");
                return "draw";
                break;
            case "scissors":
                alert("You win, scissors beats paper!");
                return "win";
                break;
            default:
                alert("Please enter a valid input: Rock/Paper/Scissors!");
                return null;
                break;
        }
        break;
    case "scissors":
        switch(playerInput){
            case "rock":
                alert("You win, rock beats scissors!");
                return "win";
                break;
            case "paper":
                alert("You lose, scissors beats paper!");
                return "lose";
                break;
            case "scissors":
                alert("Draw, you both choose scissors!");
                return "draw";
                break;
            default:
                alert("Please enter a valid input: Rock/Paper/Scissors!");
                return null;
                break;
        }
        break;
    default:
        break;
   }
   
}
// let playerSelection = playerPlay();
// let playerSelection = "rock"; //----------test------------
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let win = 0, lose = 0, draw = 0;
    for (let i = 0; i <= 5; i++){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        if (playerSelection == null) {
            let playerSelection = playerPlay();
            let computerSelection = computerPlay();
        }else {
            switch (playerSelection) {
                case "win":
                    win++;
                    break;
                case "lose":
                    lose++;
                    break;
                case "draw":
                    draw++;
                    break;
                default:
                    break;
            }
        }
        playRound(playerSelection, computerSelection);
    }
    if ((win > lose)||((win > lose) && (win >= draw))) {
        alert("Congratulations! You win!");
    }else if ((win == lose)||(lose==draw)) {
        alert("Draw");
    }else{
        alert("Sorry! You lose");
    }
}

game();