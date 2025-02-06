 // Select necessary elements from the DOM
 const colorBox = document.getElementById("colorBox"); // The target color box
 const colorOptions = document.getElementById("colorOptions"); // Container for color options
 const gameStatus = document.getElementById("gameStatus"); // Message displaying game status
 const scoreDisplay = document.getElementById("score"); // Score counter display
 const newGameButton = document.getElementById("newGameButton"); // Button to restart game

 // Predefined array of color options
 const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
 let targetColor = ""; // The correct color that the user has to guess
 let score = 0; // Keeps track of the user's score

 // Function to start a new game
 function startGame() {
     // Randomly select a target color from the predefined array
     targetColor = colors[Math.floor(Math.random() * colors.length)];
     colorBox.style.backgroundColor = targetColor; // Apply selected color to the box
     gameStatus.textContent = "Guess the correct color!"; // Reset game status message
     
     // Clear previous color options before generating new ones
     colorOptions.innerHTML = "";
     
     // Loop through the color array and create buttons for each color
     colors.forEach(color => {
         const button = document.createElement("button"); // Create a new button element
         button.style.backgroundColor = color; // Set the button's background color
         button.setAttribute("data-testid", "colorOption"); // Assign data-testid for testing
         
         // Add event listener to handle button clicks
         button.addEventListener("click", () => checkGuess(color));
         
         // Append the button to the color options container
         colorOptions.appendChild(button);
     });
 }



 // Function to check the player's guess
 function checkGuess(selectedColor) {
     if (selectedColor === targetColor) { // Check if selected color matches the target color
         gameStatus.textContent = "Correct! 🎉"; // Display success message
         score++; // Increment the score
     } else {
         gameStatus.textContent = "Wrong! Try again. ❌"; // Display failure message
     }
     scoreDisplay.textContent = `Score: ${score}`; // Update score display
 }

 // Event listener for the new game button to restart the game
 newGameButton.addEventListener("click", startGame);

 // Initialize the game when the page loads
 startGame();