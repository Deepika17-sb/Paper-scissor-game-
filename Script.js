let playerName = "";
let totalRounds = 0;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

const quotes = {
  win: [
    "Victory is sweet! Keep up the momentum!",
    "You rock, literally! Great job!",
    "Success is yours, enjoy the glory!",
  ],
  lose: [
    "Don’t give up, try again!",
    "Sometimes you win, sometimes you learn!",
    "Keep pushing forward, success is near!",
  ],
  draw: [
    "It’s a tie! A perfect match!",
    "Evenly matched, play again!",
    "Nobody wins, nobody loses. Try once more!",
  ],
};

const startGame = () => {
  playerName = document.getElementById("username").value;
  totalRounds = parseInt(document.getElementById("rounds").value);

  if (!playerName) {
    alert("Please enter your name to start the game.");
    return;
  }

  document.getElementById("player-name").textContent = `${playerName}'s Game`;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
};

const playGame = (playerChoice) => {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("player-choice").textContent = getEmoji(playerChoice);
  document.getElementById("computer-choice").textContent =
    getEmoji(computerChoice);

  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = `It’s a draw!`;
    showQuote("draw");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = `You win this round!`;
    playerScore++;
    showQuote("win");
  } else {
    resultText = `Computer wins this round!`;
    computerScore++;
    showQuote("lose");
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  currentRound++;

  if (currentRound === totalRounds) {
    concludeGame();
  }
};

const concludeGame = () => {
  const endScreen = document.getElementById("end-screen");
  const gameScreen = document.getElementById("game-screen");
  const finalResult = document.getElementById("final-result");

  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  if (playerScore > computerScore) {
    finalResult.textContent = `${playerName}, you are the champion! 🏆`;
  } else if (playerScore < computerScore) {
    finalResult.textContent = `Better luck next time, ${playerName}! 😞`;
  } else {
    finalResult.textContent = `It’s a tie! Well played, ${playerName}! 🤝`;
  }
};

const restartGame = () => {
  playerName = "";
  totalRounds = 0;
  currentRound = 0;
  playerScore = 0;
  computerScore = 0;

  document.getElementById("start-screen").classList.remove("hidden");
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("end-screen").classList.add("hidden");
  document.getElementById("player-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
};

const getEmoji = (choice) => {
  switch (choice) {
    case "rock":
      return "🪨";
    case "paper":
      return "📄";
    case "scissors":
      return "✂️";
    default:
      return "";
  }
};

const showQuote = (type) => {
  const randomQuote =
    quotes[type][Math.floor(Math.random() * quotes[type].length)];
  const resultElement = document.getElementById("result");
  resultElement.textContent = randomQuote;
  resultElement.classList.add("animate-fade");
  setTimeout(() => resultElement.classList.remove("animate-fade"), 1000);
};
