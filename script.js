// Quiz data
const chapters = [
  {
    id: 1,
    title: "Before England",
    subtitle: "Amerindian presence, mysterious abandonment",
    intro: "Long before European ships appeared...",
    questions: [
      {
        question: "What did the Amerindians call Barbados before European contact?",
        answers: ["Ichirouganaim", "Los Barbados", "Little England", "Bim"],
        correct: "Ichirouganaim",
        explanation: "The Amerindians named the island Ichirouganaim..."
      },
      {
        question: "Which two Amerindian groups inhabited Barbados before European arrival?",
        answers: ["Arawaks and Caribs", "Taino and Arawaks", "Maya and Aztec", "Inca and Caribs"],
        correct: "Arawaks and Caribs",
        explanation: "The peaceful Arawaks arrived first..."
      }
    ]
  },
  {
    id: 2,
    title: "Sugar & Chains",
    subtitle: "Plantation economy, daily life, resistance",
    intro: "By the 1640s, Barbados had transformed...",
    questions: [
      {
        question: "What crop transformed Barbados into the richest English colony by the 1680s?",
        answers: ["Sugarcane", "Cotton", "Tobacco", "Indigo"],
        correct: "Sugarcane",
        explanation: "Sugar became 'white gold'..."
      }
    ]
  }
];

// State
let currentChapter = 0;
let currentQuestion = 0;
let score = 0;
let answered = false;

// DOM elements (loaded after script)
document.addEventListener('DOMContentLoaded', function() {
  const introSection = document.getElementById("introSection");
  const quizSection = document.getElementById("quizSection");
  const completeSection = document.getElementById("completeSection");
  const chapterTitle = document.getElementById("chapterTitle");
  const chapterSubtitle = document.getElementById("chapterSubtitle");
  const chapterIntro = document.getElementById("chapterIntro");
  const questionContainer = document.getElementById("questionContainer");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const finalScore = document.getElementById("finalScore");
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");

  // Functions
  function showIntro() {
    const chapter = chapters[currentChapter];
    chapterTitle.textContent = chapter.title;
    chapterSubtitle.textContent = chapter.subtitle;
    chapterIntro.textContent = chapter.intro;
  }

  function showQuestion() {
    const chapter = chapters[currentChapter];
    const question = chapter.questions[currentQuestion];
    questionContainer.innerHTML = `<p class="question">${question.question}</p>`;
    question.answers.forEach(ans => {
      const btn = document.createElement("button");
      btn.textContent = ans;
      btn.onclick = () => handleAnswer(ans);
      questionContainer.appendChild(btn);
    });
    nextBtn.disabled = true;
    answered = false;
    scoreDisplay.textContent = `Score: ${score}/${chapters[currentChapter].questions.length}`;
  }

  function handleAnswer(answer) {
    if (answered) return;
    answered = true;

    const chapter = chapters[currentChapter];
    const question = chapter.questions[currentQuestion];
    const buttons = questionContainer.querySelectorAll("button");

    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === question.correct) {
        btn.classList.add("correct");
      } else if (btn.textContent === answer) {
        btn.classList.add("wrong");
      }
    });

    if (answer === question.correct) {
      score++;
    }

    nextBtn.disabled = false;
  }

  function nextQuestionFunc() {
    const chapter = chapters[currentChapter];
    if (currentQuestion < chapter.questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else if (currentChapter < chapters.length - 1) {
      currentChapter++;
      currentQuestion = 0;
      introSection.style.display = "block";
      quizSection.style.display = "none";
      completeSection.style.display = "none";
      showIntro();
    } else {
      completeSection.style.display = "block";
      quizSection.style.display = "none";
      finalScore.textContent = `Your final score: ${score}/${chapters.reduce((total, ch) => total + ch.questions.length, 0)}`;
    }
  }

  function restartQuiz() {
    currentChapter = 0;
    currentQuestion = 0;
    score = 0;
    answered = false;
    introSection.style.display = "block";
    quizSection.style.display = "none";
    completeSection.style.display = "none";
    showIntro();
  }

  // Event listeners
  startBtn.addEventListener("click", () => {
    introSection.style.display = "none";
    quizSection.style.display = "block";
    showQuestion();
  });

  nextBtn.addEventListener("click", nextQuestionFunc);
  restartBtn.addEventListener("click", restartQuiz);

  // Initialize
  showIntro();
});
