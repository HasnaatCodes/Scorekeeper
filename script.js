const playerOneButton = document.querySelector('#playerOne')
const playerTwoButton = document.querySelector('#playerTwo')
const resetButton = document.querySelector('#reset')
const playerOneDisplay = document.querySelector('#playerOneDisplay')
const playerTwoDisplay = document.querySelector('#playerTwoDisplay')
const scoreSelection = document.querySelector('#topscore');

let playerOneScore = 0;
let playerTwoScore = 0;
let maxScore = 5;

scoreSelection.addEventListener('change', (event) => {
    maxScore = getMaxScore(event.target.value);
});

playerOneButton.addEventListener("click", function (event) {
    playerOneScore++;
    playerOneDisplay.textContent = playerOneScore;

    if (playerOneScore >= maxScore) {
        playerOneDisplay.style.color = 'green';
        playerTwoDisplay.style.color = 'red';

        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
});

playerTwoButton.addEventListener("click", function (event) {
    playerTwoScore++;
    playerTwoDisplay.textContent = playerTwoScore;

    if (playerTwoScore >= maxScore) {
        playerTwoDisplay.style.color = 'green';
        playerOneDisplay.style.color = 'red';

        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
});

reset.addEventListener("click", function (event) {
    playerOneScore = 0;
    playerTwoScore = 0;

    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;

    maxScore = getMaxScore(scoreSelection.options[scoreSelection.selectedIndex].value)
    playerTwoDisplay.style.color = 'black';
    playerOneDisplay.style.color = 'black';

    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;

});

function getMaxScore(value) {
    switch (value) {
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine":
            return 9;
        case "ten":
            return 10;
        default:
            break;
    }
}