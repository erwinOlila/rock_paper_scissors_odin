let result = document.querySelector('.result');
let p_score = document.querySelector('.player-score');
let c_score = document.querySelector('.computer-score');
let computer_action = document.getElementById('computer');

let player_score = 0;
let computer_score = 0;
let game_over = false;

const computer_actions_images = ["rock_computer.svg", "paper_computer.svg", "scissors_computer.svg"];

let computer_actions_select = 0;

function playRound(playerSelection, computerSelection) {
    result.style.color = 'black';
    if (!game_over) {
        let player_point = 0;
        let computer_point = 0;

        if((playerSelection == "ROCK") && (computerSelection == "PAPER") || (playerSelection == "PAPER") && (computerSelection == "SCISSORS") || (playerSelection == "SCISSORS") && (computerSelection == "ROCK") ) {
            computer_point = 1;
            result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            result.style.color = 'red';
        } else if ((playerSelection == "PAPER") && (computerSelection == "ROCK") || (playerSelection == "SCISSORS") && (computerSelection == "PAPER") || (playerSelection == "ROCK") && (computerSelection == "SCISSORS") ) {
            player_point = 1;
            result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            result.style.color = 'blue';
        } else {
            result.textContent = "It's a Tie!";
        }
        computerAction(computer_actions_select);
        updateScore(player_point, computer_point);
        checkGame();
    } else {
        result.textContent = "The game has concluded, restart the game to play again.";
        computer_action.src = "./images/robot.png";
    }
}

function pick (e) {
    player_pick = e.innerText;
    
    playRound(playerSelection(player_pick), computerPlay());
}

function playerSelection(pick) {
    return pick;
}

function computerPlay () {
    const computer_picks = ["ROCK", "PAPER", "SCISSORS"];
    const computer = Math.floor(Math.random() * 3);
    computer_actions_select = computer;

    return (computer_picks[computer]);
}

function updateScore(playerPoint, computerPoint) {
    player_score += playerPoint;
    computer_score += computerPoint;

    p_score.textContent = player_score;
    c_score.textContent = computer_score;
}

function checkGame() {
    if ((player_score == 5) || (computer_score == 5)) {
        game_over = true;
        if (player_score > computer_score) {
            result.textContent = "You win the game!";
        } else {
            result.textContent = "Computer beats you!";
        }
    }
}

function restart() {
    player_score = 0;
    computer_score = 0;
    game_over = false;

    p_score.textContent = "0";
    c_score.textContent = "0";
    result.textContent = "Game start!";

    computer_action.src = "./images/robot.png";
}

function computerAction(action) {
    computer_action.src = "./images/" + computer_actions_images[action];
}

