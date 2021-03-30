let scoreUser = 0
let scoreComputer = 0
let tour = 0
let playerSelection = ""

function computerPlay() {
    let result = Math.floor(Math.random() * 3)
    if (result == 1)
        return "Rock";
    else if (result == 2)
        return "Paper";
    else 
        return "Scissor";
}


function playRound(playerSelection, computerSelection) {
   if (computerSelection == playerSelection) {
        scoreComputer += 1 
        scoreUser += 1 
        tour += 1
        content.textContent = ("Computer Draw : " + scoreComputer +" "+ "User: " + scoreUser)
        return ;
       }
   else if( computerSelection == "Paper" && playerSelection == "Rock") {
        scoreComputer += 1
        tour += 1
        content.textContent = ("Computer Paper : " + scoreComputer+" "+ "User: " + scoreUser)
    return;}
    else if( computerSelection == "Paper" && playerSelection == "Scissor") {
        scoreUser += 1
        tour += 1
        content.textContent = ("Computer Paper : " + scoreComputer+" "+ "User: " + scoreUser)
        return;}
    else if( computerSelection == "Rock" && playerSelection == "Paper") {
        scoreUser += 1
        tour += 1
        content.textContent = ("Computer Rock : " + scoreComputer+" "+ "User: " + scoreUser)
        return;}
    else if( computerSelection == "Rock" && playerSelection == "Scissor") {
        scoreComputer += 1
        tour += 1
        content.textContent = ("Computer Rock : " + scoreComputer+" "+ "User: " + scoreUser)
        return;}
    else if( computerSelection == "Scissor" && playerSelection == "Paper") {
        scoreComputer += 1
        tour += 1
        content.textContent = ("Computer Scissor : " + scoreComputer+" "+ "User: " + scoreUser)
        return;}
    else if( computerSelection == "Scissor" && playerSelection == "Rock") {
        scoreUser += 1
        tour += 1
        content.textContent = ("Computer Scissor : " + scoreComputer+" "+"User: " + scoreUser)
        return;}
    else {
        alert("I don't understand, try again")
    }
    
   

  }

function game() {
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    
    }
     

function result() {
    if (scoreUser < scoreComputer) {
        return "Computer wins"}
    else if (scoreUser > scoreComputer) { 
        return "User wins"}
    else if (scoreUser == scoreComputer) {
        return "Draw"}
    else {
        return "";
    }
}



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    game();
    if (scoreComputer == 5 || scoreUser == 5){
        res.textContent = result();
        return;}
    
  });
});

const container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.textContent = "";

let res = document.createElement('h2');
res.classList.add('res');
res.textContent ="";

container.appendChild(content);
container.appendChild(res);




console.log(tour)
/*console.log(scoreComputer)
console.log(scoreUser)*/
console.log(result())