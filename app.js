let computerPlay = () => {
    let num = Math.floor(((Math.random() * 3) + 1)); // randomly assign a number of 1, 2 or 3 to avriable num
    if (num === 1){
        return "paper";
    } else if (num === 2){
        return "rock";
    }else if(num === 3){
        return "sissors"
    } // decides which option the computer chooses.
}; 


let playRound = (x) => {
    let playerChoice = x;
    let computerChoice = computerPlay();
    console.log(computerChoice);
    while(playerChoice.toLowerCase() !== "rock" && 
            playerChoice.toLowerCase() !== "paper" && 
            playerChoice.toLowerCase() !== "sissors"){ // check input
        playerChoice = prompt("Please enter a valid word"); // if input isnt valid ask again 
    }

    if(playerChoice.toLowerCase() === "rock" && computerChoice === "sissors"){
        return "Player wins!"; // rock beats sissors
    } else if(computerChoice === "rock" && playerChoice.toLowerCase() === "sissors"){
        return "Computer wins"; // rock beats sissors
    } else if(playerChoice.toLowerCase() === "paper" && computerChoice === "rock"){
        return "Player wins!"; // paper beats rock
    } else if (computerChoice === "paper" && playerChoice.toLowerCase() === "rock"){
        return "Computer wins"; // paper beats rock
    } else if(playerChoice.toLowerCase() === "sissors" && computerChoice === "paper"){
        return "Player wins!";   // sissors beats paper
    }else if(computerChoice === "sissors" && playerChoice.toLowerCase() === "paper"){
        return "Computer wins"; // sissors beats paper
    } else if (computerChoice === playerChoice.toLowerCase()){
        return "Tied game!"; // no winner
    }



};
    // console.log(playRound());
/*
    let game = () => {
        let playerWinCount = 0; 
        let computerWinCount = 0; // two variables to store the number of wins
        
        for(let i = 0; i < 5; i++){ // play 5 rounds 
            let score = playRound();
            if (score === "Computer wins"){
                computerWinCount++;
                console.log("Round won by computer");
            } else if (score === "Player wins!"){
                playerWinCount++;
                console.log("Round won by player");
            } else {
                console.log("Round tied");
            }
        } 
        // who wins?? 
        if(playerWinCount > computerWinCount){
            return `You Win! You scored ${playerWinCount} and the computer scored ${computerWinCount}!`
        } else if(playerWinCount < computerWinCount){
            return `You lose! You scored ${playerWinCount} and the computer scored ${computerWinCount}!`
        } else {
            return `It's a draw! You scored ${playerWinCount} and the computer scored ${computerWinCount}!`
        }
    
        
    }
    */

const div = document.querySelector('#gameboard') // create variable for div manipulation
const para = document.createElement('p'); // create a p element
para.classList.add('para'); 
div.appendChild(para); // append to div 

const rock = document.querySelector('#Rock'); // variable for the rock button 

rock.addEventListener('click', () => { // event listener that plays rock if you click that button
para.textContent = playRound("rock");
    if(para.textContent === 'Player wins!'){
        para.style.color = 'green'
    } else if (para.textContent === 'Computer wins'){
        para.style.color = 'red'
    } else {
        para.style.color = 'white'
}
});

const paper = document.querySelector('#Paper'); // variable for the paper button 

paper.addEventListener('click', () => { // event listener that plays paper if you click that button
para.textContent = playRound("paper");
    if(para.textContent === 'Player wins!'){
        para.style.color = 'green';
    } else if (para.textContent === 'Computer wins'){
        para.style.color = 'red';
    } else {
        para.style.color = 'white';
    }
    });


const sissors = document.querySelector('#Sissors'); // variable for the sissors button 

sissors.addEventListener('click', () => { // event listener that plays sissors if you click that button
para.textContent = playRound("sissors");
    if(para.textContent === 'Player wins!'){
        para.style.color = 'green'
    } else if (para.textContent === 'Computer wins'){
        para.style.color = 'red'
    } else {
        para.style.color = 'white'
    }
    });