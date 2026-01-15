let current = 0;
let score = 0;
let answered = false;
let timeLeft = 10;
let timerInterval;

function loadQuestion() {
  answered = false;
  timeLeft = 10;

  document.getElementById("question").textContent = quiz[current].question;
  document.getElementById("progress").textContent =
    `Question ${current + 1} / ${quiz.length}`;
  document.getElementById("timer").textContent = `⏱️ ${timeLeft}`;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  quiz[current].answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;

    button.onclick = () => handleAnswer(button, answer);
    answersDiv.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `⏱️ ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      revealCorrectAnswer();
      autoNext();
    }
  }, 1000);
}

function handleAnswer(button, answer) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  if (answer === quiz[current].correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
    revealCorrectAnswer();
  }

  disableAnswers();
  updateScore();
  autoNext();
}

function revealCorrectAnswer() {
  document.querySelectorAll("#answers button").forEach(btn => {
    if (btn.textContent === quiz[current].correct) {
      btn.classList.add("correct");
    }
  });
}

function disableAnswers() {
  document.querySelectorAll("#answers button").forEach(btn => {
    btn.disabled = true;
  });
}

function updateScore() {
  document.getElementById("score").textContent =
    `Score: ${score} / ${quiz.length}`;
}

function autoNext() {
  setTimeout(() => {
    current++;
    if (current < quiz.length) {
      loadQuestion();
    } else {
      endGame();
    }
  }, 2000);
}

function endGame() {
  document.querySelector(".quiz-container").innerHTML = `
    <div class="trident">🔱</div>
    <h2>Game Over</h2>
    <p>Your final score</p>
    <h1>${score} / ${quiz.length}</h1>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

loadQuestion();
