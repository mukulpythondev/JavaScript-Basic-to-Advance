// In this code we create the Snake water Gun Game 
var userInput = prompt("Choose one: Snake (S), Water (W), or Gun (G)");
var computerInput = generateComputerInput();
var result = determineWinner(userInput.toUpperCase(), computerInput);

document.write("The winner is " + result);

function generateComputerInput() {
  var choices = ['S', 'W', 'G'];
  var randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userInput, computerInput) {
  if (userInput === computerInput) {
    return "It's a tie!";
  } else if (
    (userInput === 'S' && computerInput === 'W') ||
    (userInput === 'W' && computerInput === 'G') ||
    (userInput === 'G' && computerInput === 'S')
  ) {
    return "You ";
  } else {
    return "Computer ";
  }
}
