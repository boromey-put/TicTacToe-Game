let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameOver = false;

function playMove(index) {
    if (board[index] !== "" || isGameOver) return;

    board[index] = currentPlayer;
const cell = document.getElementsByClassName("cell")[index];
cell.innerText = currentPlayer;

if (currentPlayer === "X") {
    cell.classList.add("x");
} else {
    cell.classList.add("o");
}

    if (checkWinner()) {
        document.getElementById("status").innerText =
            "Player " + currentPlayer + " Wins!";
        isGameOver = true;
        return;
    }

    if (board.includes("") === false) {
        document.getElementById("status").innerText = "It's a Draw!";
        isGameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText =
        "Player " + currentPlayer + "'s turn";
}

function checkWinner() {
    const wins = [
        [0,1,2,"row1"], [3,4,5,"row2"], [6,7,8,"row3"],
        [0,3,6,"col1"], [1,4,7,"col2"], [2,5,8,"col3"],
        [0,4,8,"diag1"], [2,4,6,"diag2"]
    ];

    for (let win of wins) {
        let [a,b,c,type] = win;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            drawWinLine(type);
            return true;
        }
    }
    return false;
}

function drawWinLine(type) {
    const line = document.getElementById("winLine");
    line.className = "win-line";   

    line.classList.add("line-" + type);
    line.style.transform = "scaleX(1)";
}



function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameOver = false;
    document.getElementById("winLine").style.transform = "scaleX(0)";
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
}


