// Question
// write the code that gives the jokes on webpage
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I used to play piano by ear. Now I use my hands.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why don't scientists trust stairs? Because they're always up to something.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "I used to be a baker, but I couldn't make enough dough.",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you organize a space party? You 'planet'!",
    "What do you call a fish wearing a crown? King of the sea!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't eggs tell jokes? They might crack up!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a bear with no teeth? A gummy bear!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't seagulls fly over the bay? Because then they would be bagels!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "How do you make a tissue dance? You put a little boogie in it!",
    "Why did the bicycle fall over? Because it was two-tired!"
  ];
  

  const jokeElement = document.querySelector(".joke");
  const nextButton = document.querySelector(".next");

  function displayJoke() {
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[jokeIndex];
  }

  function reload() {
    displayJoke();
  }

  nextButton.addEventListener("click", reload);

  // Display the initial joke
  displayJoke();