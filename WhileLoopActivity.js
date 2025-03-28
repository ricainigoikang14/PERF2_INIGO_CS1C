// Generate a random number between 1 and 50 (inclusive).
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Use a while loop to keep asking until the user guesses the correct number.
let guess;
while (true) {
  guess = parseInt(prompt("Guess a number between 1 and 50:"));

  //Check for invalid input
  if (isNaN(guess) || guess < 1 || guess > 50) {
    console.log("Invalid input. Please enter a number between 1 and 50.");
    continue; // Go to the next iteration of the loop
  }


  if (guess < secretNumber) {
    console.log("Too low!");
  } else if (guess > secretNumber) {
    console.log("Too high!");
  } else {
    console.log("Correct!");
    break; // Exit the loop if the guess is correct.
  }
}
