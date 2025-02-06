// Select necessary elements from the DOM
const colorBox = document.getElementById("colorBox");
const colorOptions = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");
const failDisplay = document.getElementById("failures");


// Predefined array of color options
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;
let failures = 0;

// Function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Function to start a new game
function startGame() {
    const shuffledColors = shuffleArray([...colors]); // Shuffle colors before displaying
    targetColor = shuffledColors[Math.floor(Math.random() * shuffledColors.length)];
    colorBox.style.backgroundColor = targetColor;
    gameStatus.textContent = "Guess the correct color!";
    scoreDisplay.textContent = `Score: ${score}`;
    failDisplay.textContent = `Fails: ${failures}`;
    
    colorOptions.innerHTML = "";
    
    shuffledColors.forEach(color => {
        const button = document.createElement("button");
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        button.addEventListener("click", () => checkGuess(color));
        colorOptions.appendChild(button);
    });
}

// Function to check the player's guess
function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct! 🎉";
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        failDisplay.textContent = `Fails: ${failures}`;
        
        // Add a slight delay before starting a new game
        setTimeout(startGame, 1000);
    } else {
        gameStatus.textContent = "Wrong! Try again. ❌";
        failures++;
        failDisplay.textContent = `Fails: ${failures}`;
    }
}


// Event listener for new game button
newGameButton.addEventListener("click", () => {
    score = 0;
    failures = 0;
    startGame();
});

// Initialize the game when the page loads
startGame();
