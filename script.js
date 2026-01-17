// ===============================
// QUIZ DATA - BARBADOS HISTORY JOURNEY
// ===============================
const chapters = [
  {
    id: 1,
    title: "Indigenous Beginnings",
    subtitle: "The Island Before Colonization",
    intro: "Long before European sails appeared on the horizon, Barbados was home to indigenous peoples...",
    questions: [
      {
        question: "Who were the earliest known inhabitants of Barbados?",
        answers: [
          "Arawaks and Caribs", // ✅ CHANGED
          "The Tainos",
          "The Lucayans",
          "The Maya"
        ],
        correct: "Arawaks and Caribs", // ✅ CHANGED
        explanation:
          "The Arawaks were the earliest known inhabitants of Barbados, followed later by the Caribs, who migrated through the region."
      }
    ]
  },
  {
    id: 2,
    title: "Colonial Era",
    subtitle: "From Settlement to Sugar Empire",
    intro: "In 1627, English settlers arrived...",
    questions: [
      {
        question: "When did the English first settle in Barbados?",
        answers: ["1605", "1627", "1640", "1655"],
        correct: "1627",
        explanation: "English settlers first arrived in 1627."
      }
    ]
  }
  // (keep ALL your remaining chapters exactly as you had them)
];

// ===============================
// STATE
// ===============================
let currentChapter = 0;
let currentQuestion = 0;
let score = 0;
let chapterScores = new Array(chapters.length).fill(0);
let answered = false;
let selectedAnswer = null;
let playerName = "";

// ===============================
// ELEMENTS
// ===============================
const app = document.getElementById("app");
const bgMusic = document.getElementById("bgMusic");

// ===============================
// LANDING PAGE
// ===============================
function showLandingPage() {
  app.innerHTML = `
    <div class="landing-page">
      <h1>Barbados History Journey</h1>
      <p>Enter your nickname to begin:</p>
      <input type="text" id="nicknameInput" placeholder="Your nickname" />
      <button id="startBtn" class="nav-btn">Start Journey</button>
    </div>
  `;

  document.getElementById("startBtn").addEventListener("click", () => {
    const input = document.getElementById("nicknameInput");
    playerName = input.value.trim() || "Player";

    // Safe music start (won’t break game if blocked)
    if (bgMusic) {
      bgMusic.volume = 0.4;
      bgMusic.play().catch(() => {});
    }

    showChapterIntro();
  });
}

// ===============================
// CHAPTER INTRO
// ===============================
function showChapterIntro() {
  const chapter = chapters[currentChapter];

  app.innerHTML = `
    <div class="chapter-intro">
      <h1>${chapter.title}</h1>
      <h2>${chapter.subtitle}</h2>
      <p>${chapter.intro}</p>
      <button id="beginChapter" class="nav-btn">Begin Chapter</button>
      <p class="player-name">Player: ${playerName}</p>
    </div>
  `;

  document
    .getElementById("beginChapter")
    .addEventListener("click", startChapter);
}

// ===============================
function startChapter() {
  currentQuestion = 0;
  showQuestion();
}

// ===============================
function showQuestion() {
  const chapter = chapters[currentChapter];
  const q = chapter.questions[currentQuestion];

  app.innerHTML = `
    <div class="quiz-screen">
      <p>${q.question}</p>
      ${q.answers
        .map(a => `<button class="answer-btn">${a}</button>`)
        .join("")}
      <button id="nextBtn" class="nav-btn" disabled>Next</button>
    </div>
  `;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("nextBtn").disabled = false;
      if (btn.textContent === q.correct) {
        score++;
        chapterScores[currentChapter]++;
      }
    });
  });

  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
}

// ===============================
function nextQuestion() {
  const chapter = chapters[currentChapter];

  if (currentQuestion < chapter.questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else if (currentChapter < chapters.length - 1) {
    currentChapter++;
    showChapterIntro();
  } else {
    showFinalResults();
  }
}

// ===============================
function showFinalResults() {
  const total = chapters.reduce(
    (sum, ch) => sum + ch.questions.length,
    0
  );
  const percent = Math.round((score / total) * 100);

  app.innerHTML = `
    <div class="results-screen">
      <h1>Journey Complete 🇧🇧</h1>
      <p>${score}/${total} (${percent}%)</p>
      <button id="restartBtn" class="nav-btn">Restart</button>
    </div>
  `;

  document
    .getElementById("restartBtn")
    .addEventListener("click", restartQuiz);
}

// ===============================
function restartQuiz() {
  currentChapter = 0;
  currentQuestion = 0;
  score = 0;
  chapterScores = new Array(chapters.length).fill(0);
  showLandingPage();
}

// ===============================
showLandingPage();
