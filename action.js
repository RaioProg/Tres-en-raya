let currentPlayer = 'X';
let rivalPlayer = 'O';
let gameActive = true;
let modoJuego = 3;
const cells = document.querySelectorAll('.cell');
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const resetButton = document.querySelector('.reset');
const container = document.querySelector('.container');
const boton4 = document.getElementById('cambio4');


const winningCombinations3 = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

cells.forEach((cell, index) => {
    cell.addEventListener('click', (event) => {
        if (gameActive !== true) return;
        if (gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWinner();
        turnoRival();
}) })

resetButton.addEventListener('click', resetGame);
boton4.addEventListener('click', Cambio4);

function Cambio4() {
    container.innerHTML('<div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div>');
}


function turnoRival() {
    for(const [a, b, c] of winningCombinations3) {
        if (gameActive !== true) return;
        if (gameBoard[a] === rivalPlayer && gameBoard[b] === rivalPlayer && gameBoard[c] === '') {
            gameBoard[c] = rivalPlayer;
            cells[c].textContent = rivalPlayer;
            checkWinner();
            return;
        }
        if (gameBoard[a] === rivalPlayer && gameBoard[c] === rivalPlayer && gameBoard[b] === '') {
            gameBoard[b] = rivalPlayer;
            cells[b].textContent = rivalPlayer;
            checkWinner();
            return;
        }
        if (gameBoard[b] === rivalPlayer && gameBoard[c] === rivalPlayer && gameBoard[a] === '') {
            gameBoard[a] = rivalPlayer;
            cells[a].textContent = rivalPlayer;
            checkWinner();
            return;
        }
        if (gameBoard[a] === currentPlayer && gameBoard[c] === currentPlayer && gameBoard[b] === '') {
            gameBoard[b] = rivalPlayer;
            cells[b].textContent = rivalPlayer;
            checkWinner();
            return;
        }
        if (gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer && gameBoard[a] === '') {
            gameBoard[a] = rivalPlayer;
            cells[a].textContent = rivalPlayer;
            checkWinner();
            return;
        }
        if (gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === '') {
            gameBoard[c] = rivalPlayer;
            cells[c].textContent = rivalPlayer;
            checkWinner();
            return;
        }
        
    }
    NoPasaNada();

    checkWinner();
}

function NoPasaNada() {
    let rivalIndex = Math.floor(Math.random() * 8);
    if (gameBoard[4] === '') {
        gameBoard[4] = rivalPlayer;
        cells[4].textContent = rivalPlayer;
    }else if (gameBoard[rivalIndex] === 'O' || gameBoard[rivalIndex] === 'X') {
        NoPasaNada();
    }else if(gameBoard[rivalIndex] === '') { 
        gameBoard[rivalIndex] = rivalPlayer;
        cells[rivalIndex].textContent = rivalPlayer;
        }}

function checkWinner() {
    
    for (const [a, b, c] of winningCombinations3) {
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.querySelector('.panel').classList.remove('oculto');
            document.querySelector('.result-text').textContent = `Player ${gameBoard[a]} wins!`;
            gameActive = false;
            return;
        }else if (!gameBoard.includes('')) {
            Tie();
        }
    }

}

function Tie() {
        document.querySelector('.panel').classList.remove('oculto');
        document.querySelector('.result-text').textContent = "It's a tie!";
        gameActive = false;
}

function resetGame() {
    gameActive = true;
    gameBoard.fill('');
    cells.forEach(cell => cell.textContent = '');
    document.querySelector('.panel').classList.add('oculto');
}
