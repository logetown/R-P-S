let result1 = JSON.parse(localStorage.getItem('score'));

if (result1 === null ){
    result1 = {
        wins:0,
        losses:0,
        ties:0
    };
}

function genrate(){
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3){
        return "Rock";
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        return "Paper";
    }
    else if (randomNumber >= 2/3 && randomNumber < 1){
        return "Scissors";
    }
}

function result(move){
    let computerMove = genrate();
    
    if ( move === computerMove ){
        result1.ties += 1;
    }
    else if ( (move === "Rock" && computerMove === "Scissors") || 
              (move === "Paper" && computerMove === "Rock" )  || 
              (move === "Scissors" && computerMove === "Paper")){
        result1.wins += 1;
    }
    else{
        result1.losses += 1;
    }
    localStorage.setItem('score',JSON.stringify(result1));
    alert(`Your Move: ${move} , Computer Move: ${computerMove}\nWins:${result1.wins},Losses:${result1.losses},Ties:${result1.ties}`);
}

function resetScore() {
  result1 = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  localStorage.removeItem('score');

  alert('Score reset successfully');
}

