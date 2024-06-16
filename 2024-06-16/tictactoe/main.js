
let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const cells = document.getElementsByClassName("cell");
for (let cell of cells) {
    cell.addEventListener("click", (event) => {

        const clickedCell = event.target
        const ccId = clickedCell.id
        const row = parseInt(ccId.split("-")[1]) - 1
        const column = parseInt(ccId.split("-")[2]) - 1
        
        if (checkEmpty(row, column)) {
            console.log(row, column)
            const whoseTurn = whoseTurnIsIt();
            gameBoard[row][column] = whoseTurn
            updategameBoard();
        } else {
            console.log("Element baina")
        }

        const w = checkWinner()
        if (w !== null && w !== "Tie") {
            alert(`Winner ${w}`);
            resetBoard();
        } else if (w === "Tie") {
            alert("Tie")
            resetBoard()
        }

    })
}


function resetBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameBoard[i][j] = null
        }
    }
    updategameBoard()
}

function whoseTurnIsIt() {
    let sum = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] !== null) {
                sum += 1
            }
        }
    }
    if (sum % 2 === 0) {
        return "O"
    } else {
        return "X"
    }
}


function checkEmpty(r, c) {
    if (gameBoard[r][c] === null) {
        return true
    } else {
        false
    }
}

function updategameBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] !== null) {
                const cell = document.getElementById(`cell-${i + 1}-${j + 1}`);
                cell.innerHTML = gameBoard[i][j]
            } else {
                const cell = document.getElementById(`cell-${i + 1}-${j + 1}`);
                cell.innerHTML = ""
            }
        }
    }
}


function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            return gameBoard[i][0];
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (gameBoard[0][j] && gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j]) {
            return gameBoard[0][j];
        }
    }

    // Check diagonals
    if (gameBoard[0][0] && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        return gameBoard[0][0];
    }
    if (gameBoard[0][2] && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        return gameBoard[0][2];
    }

    // Check for a tie
    if (gameBoard.flat().every(cell => cell !== null)) {
        return 'Tie';
    }

    // No winner yet
    return null;
}
