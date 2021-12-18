const playerOne = {
    score: 0,
    button: document.querySelector('#playerOne'),
    display: document.querySelector('#playerOneDisplay'),
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#playerTwo'),
    display: document.querySelector('#playerTwoDisplay'),
}

const resetButton = document.querySelector('#reset');
const scoreSelection = document.querySelector('#topscore');
let maxScore = 5;

scoreSelection.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    reset();
});

playerOne.button.addEventListener("click", function () {
    updateScores(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", function () {
    updateScores(playerTwo, playerOne);
});

resetButton.addEventListener("click", reset);

function updateScores(player, opponent) {
    player.score++;
    player.display.textContent = player.score;

    if (player.score >= maxScore) {
        player.display.style.color = 'green';
        player.button.disabled = true;
        opponent.display.style.color = 'red';
        opponent.button.disabled = true;
    } else if (player.score === (maxScore - 1) && opponent.score === (maxScore - 1)) {
        maxScore++;
        scoreSelection.classList.add('tie-breaker');
        scoreSelection.selectedOptions[0].innerText = `Tie BREAK to ${maxScore}`;
    }
}

function reset() {
    for (let player of [playerOne, playerTwo]) {
        player.score = 0;
        maxScore = 5;
        player.display.textContent = 0;
        player.display.style.color = 'black';
        player.button.disabled = false;
        scoreSelection.classList.remove('tie-breaker');
        scoreSelection.selectedOptions[0].innerText = 5;
    }
}