function startTicTacToe() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <div class="tic-tac-toe">
            <table id="ticTacToeBoard">
                <tr>
                    <td onclick="makeMove(this)"></td>
                    <td onclick="makeMove(this)"></td>
                    <td onclick="makeMove(this)"></td>
                </tr>
                <tr>
                    <td onclick="makeMove(this)"></td>
                    <td onclick="makeMove(this)"></td>
                    <td onclick="makeMove(this)"></td>
                </tr>
                <tr>
                    <td onclick="makeMove(this)"></td>
                    <td onclick="makeMove(this)"></td>
                    <td onclick="makeMove(this)"></td>
                </tr>
            </table>
        </div>
    `;

    gameContainer.style.display = 'block';
}

let currentPlayer = 'X';

function makeMove(cell) {
    if (cell.innerHTML == '') {
        cell.innerHTML = currentPlayer;
        cell.classList.add('move-' + currentPlayer);
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }
}
