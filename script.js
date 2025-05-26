function getComputerChoice(){
    let number = Math.random();

    if(number >=0 && number <= 1/3){
        return "rock";
    }else if(number >= 1/3 && number <= 2/3){
        return "paper";
    }else{
        return "scissor";
    }
}

function getHumanChoice(){
    return input = prompt("Enter your choice:","");
}

function playRound(humanChoice,computerChoice){
        let result;

        let hChoice = humanChoice.toLowerCase();
        let cChoice = computerChoice.toLowerCase();

        if(hChoice === "rock"){
            if(cChoice === "rock"){
                result = "Tie";
            }else if (cChoice === "paper"){
                result = "Lose";
            }else{
                result = "Win";
            }
        }else if(hChoice === "paper"){
            if(cChoice === "rock"){
                result = "win";
            }else if (cChoice === "paper"){
                result = "Tie";
            }else{
                result = "Lose";
            }
        }else{
            if(cChoice === "rock"){
                result = "Lose";
            }else if (cChoice === "paper"){
                result = "Win";
            }else{
                result = "Tie";
            }
        }
        return [hChoice,cChoice,result];
}

function playGame(){

let humanScore = 0;
let computerScore = 0;


for(i=0;i<5;i++){
    let result = playRound(getHumanChoice(),getComputerChoice());

        if(result[2] === "Win"){
            humanScore+=1;
        }else if(result[2] === "Lose"){
            computerScore+=1;
        }
        alert(`Humam choice is ${result[0]} and computer choice is ${result[1]}.computer:${computerScore} Human:${humanScore}`);
}
}

playGame();