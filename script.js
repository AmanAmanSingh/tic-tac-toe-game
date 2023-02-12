const grid_box = document.querySelector(".grid-box");
const cells = document.querySelectorAll(".cell");
const result = document.querySelector(".result");
const inputContainer = document.querySelector(".input-container");
const player1 = document.querySelector("#player-1");
const player2 = document.querySelector("#player-2");
const labelName_player1 = document.querySelector(".player-1");
const labelName_player2 = document.querySelector(".player-2");
const startInfo = document.querySelector("#startInfo")


let count = 0;
let player1Array = [];
let player2Array = [];

grid_box.style.display = "none";

function startGame() {
    if (player1.value.length && player2.value.length) {
        grid_box.style.display = "grid";
        player1.style.display = "none";
        player2.style.display = "none";
        labelName_player1.innerHTML = `Player-1 : ${player1.value}`;
        labelName_player2.innerHTML = `Player-2 : ${player2.value}`;
        startInfo.innerHTML = ""
    }
}

function resetGame() {
    grid_box.style.display = "none";
    player1.style.display = "block";
    player2.style.display = "block";
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {

        if (cells[i].innerHTML == "" && result.innerHTML == "") {
            let currentPlayer = count % 2 === 0 ? "X" : "O";
            if (currentPlayer == "X") {
                cells[i].style.color = "red"
            } else {
                cells[i].style.color = "blue "
            }
            cells[i].innerHTML = currentPlayer;
            count++;

            if (currentPlayer === "X") {
                player1Array.push(i);
            } else {
                player2Array.push(i);
            }

            if (player1Array.length >= 3) {
                checkCombination(player1Array, "X");
            }

            if (player2Array.length >= 3) {
                checkCombination(player2Array, "O");
            }
        }

    });
}


function checkCombination(players_array, currentPlayer) {
    const winningComobination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningComobination.length; i++) {
        const combination = winningComobination[i];
        if (combination.every(index => players_array.includes(index))) {
            showResult(currentPlayer);
            return;
        }
    }
}

function showResult(winner) {
    if (winner == "X") {
        result.textContent = `${player1.value} won!😎`;
    } else {
        result.textContent = `${player2.value} won!😎`;
    }
}


