let hackingSentences = [
    "Welcome to Instagram hack attack!",
    "Finding the target username...",
    "Username found! Initiating attack...",
    "Attacking the target's security...",
    "Bypassing firewalls and encryption...",
    "Gaining unauthorized access...",
    "Attack completed successfully!",
    "Congratulations, you've been hacked!"
  ];
  
  let hackingTextElement = document.getElementById("text");
  let userIdInput = document.getElementById("user-id");
  
  function printSentences() {
    let printedText = "";
  
    for (let i = 0; i < hackingSentences.length; i++) {
      setTimeout(function() {
        printedText += hackingSentences[i] + "<br>";
        hackingTextElement.innerHTML = printedText;
      }, i * 2000); // Delay each sentence by 2 seconds
    }
  }
  
  function startHacking() {
    let userId = userIdInput.value;
    if (userId) {
      hackingTextElement.innerHTML = hackingSentences[0] + "<br>";
      setTimeout(printSentences, 2000); // Delay the printing of remaining sentences by 2 seconds
    }
  }
  
  // Add event listener to the button
  let startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startHacking);
  