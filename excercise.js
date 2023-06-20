// Question 
// generate the random number and input the number from user and compare and give suggestion greater and lesser and  when after n attemps show the score 100-score 
let randomNumber = Math.random();
let min = 1; // Minimum value (inclusive)
let max = 100; // Maximum value (inclusive)
let scaledNumber = Math.floor(randomNumber * (max - min + 1)) + min;
let score = 0;

while (true) {
  let user = parseInt(prompt("Enter your guessed number"));

  if (scaledNumber < user) {
    console.log("Your number is greater than the random number");
    console.log("Try again");
    score += 1;
  } else if (scaledNumber > user) {
    console.log("Your number is lesser than the random number");
    console.log("Try again");
    score += 1;
  } else {
    console.log("You guessed it right!");
    break; // Break out of the loop when the guessed number is correct
  }
}

console.log(`Your score is ${100 - score}`);
