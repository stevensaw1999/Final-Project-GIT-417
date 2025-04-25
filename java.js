"use strict"; // uses strict mode globally

// Start of Product Display
const products = [
    {
      name: "House-1",
      image: "/images/house1.jpg",
      description: "House-1"
    },
    {
      name: "House-2",
      image: "/images/house2.jpg",
      description: "Beautiful House-2"  
    },
    {
      name: "House-3",
      image: "/images/house3.jpg",
      description: "Beautiful House-3"
    }
  ];

  // Switching Images and Text
  function houseSwitch(){
    const buttons = document.querySelectorAll("#switcherButtons button");
    const productSections = document.querySelectorAll("#switcher1 > section");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Hide all product sections
            productSections.forEach(section => {
                section.classList.add("hiddenItem");
                section.classList.remove("currentItem");
            });

            // Show the selected product
            const selectedProduct = productSections[index];
            selectedProduct.classList.remove("hiddenItem");
            selectedProduct.classList.add("currentItem");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
   houseSwitch();
});

// Start of Guessing Game
function setupGuessingGame() {
    const guessGameButton = document.getElementById("guessGame");
    const numGuessInput = document.getElementById("numGuess");
    const gameOutput = document.getElementById("gameOutput");

    guessGameButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission

        const userGuess = parseInt(numGuessInput.value);
        const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

        if (userGuess === randomNumber) {
            gameOutput.textContent = `Congratulations! You guessed ${userGuess}, and the random number was ${randomNumber}. You win!`;
        } else {
            gameOutput.textContent = `Sorry, you guessed ${userGuess}, but the random number was ${randomNumber}. Try again!`;
        }
    });
}

// Initialize the Guessing Game on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    houseSwitch(); // Initialize product display
    setupGuessingGame(); // Initialize guessing game
});


