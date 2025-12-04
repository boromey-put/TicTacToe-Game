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
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    return wins.some(pair => {
        const [a, b, c] = pair;
        return board[a] &&
               board[a] === board[b] &&
               board[a] === board[c];
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameOver = false;
    document.getElementById("status").innerText = "Player X's Turn";

    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].classList.remove("x", "o");  // remove old colors
    }
}
