let secretWord;
let correctGuesses;
let remainingGuesses;

function updateDisplay() {
  document.getElementById("word").textContent = correctGuesses.join("");
  document.getElementById("remaining").textContent = remainingGuesses;
}
function updateImage() {
  var img = document.getElementById("forcaImg");

  if (remainingGuesses >= 7) {
    img.src = "imagens/HangerWithStickmanStart.png";
  } else if (remainingGuesses >= 6) {
    img.src = "imagens/HangerWithStickmanHead.png";
  } else if (remainingGuesses >= 5) {
    img.src = "imagens/HangerWithStickmanBody.png";
  } else if (remainingGuesses >= 4) {
    img.src = "imagens/HangerWithStickmanRightArm.png";
  } else if (remainingGuesses >= 3) {
    img.src = "imagens/HangerWithStickmanLeftArm.png";
  } else if (remainingGuesses >= 2) {
    img.src = "imagens/HangerWithStickmanLeftLeg.png";
  } else if (remainingGuesses >= 1) {
    img.src = "imagens/HangerWithStickmanRightLeg(lose).png";
    setTimeout(() => {
      alert("Fim de jogo, a palavra era " + secretWord + ".");
    }, 100);
  }
}

guessButton.addEventListener("click", function guess() {
  const guess = document.getElementById("guessInput").value.toUpperCase();

  document.getElementById("guessInput").value = "";

  let found = false;
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === guess) {
      correctGuesses[i] = guess;
      found = true;
    }
  }
  if (!found) {
    updateImage();
    remainingGuesses--;
  }
  if (correctGuesses.join("") === secretWord) {
    updateDisplay();
    setTimeout(() => {
      alert("Parabéns, você acertou a palavra!");
    }, 0);
    initialize();
  } else if (remainingGuesses === 0) {
    updateImage();
    initialize();
  } else {
    updateDisplay();
  }
});
comecoButton.addEventListener("click", function initialize() {
  secretWord = document.getElementById("wordInput").value.toUpperCase();
  if (secretWord.trim() === "") {
    alert("Por favor, insira uma palavra válida.");
    return;
  }
  correctGuesses = Array(secretWord.length).fill(" _ ");
  remainingGuesses = 6;
  document.getElementById("setWord").style.display = "none";
  document.getElementById("oJogo").style.display = "block";
  updateDisplay();
});
returnButton.addEventListener("click", function returnHome() {
  location.reload();
});
