const quiz = [
  {
    question: "What is the capital of Barbados?",
    answers: ["Bridgetown", "Kingston", "Castries"],
    correct: "Bridgetown"
  },
  {
    question: "What is the national dish of Barbados?",
    answers: ["Cou-cou and flying fish", "Rice and peas", "Callaloo"],
    correct: "Cou-cou and flying fish"
  },
  {
    question: "Who is the Father of Independence?",
    answers: ["Errol Barrow", "Rihanna", "Grantley Adams"],
    correct: "Errol Barrow"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").textContent = quiz[current].question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  quiz[current].answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === quiz[current].correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h2>Game Over</h2><p>Your score: ${score}/${quiz.length}</p>`;
  }
}

loadQuestion();
