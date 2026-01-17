
// ===============================
// QUIZ DATA - BARBADOS HISTORY JOURNEY
// ===============================
const chapters = [
  {
    id: 1,
    title: "Indigenous Beginnings",
    subtitle: "The Island Before Colonization",
    intro: "Long before European sails appeared on the horizon, Barbados was home to indigenous peoples. The Amerindian inhabitants lived in harmony with the island's natural bounty, leaving behind petroglyphs and artifacts that tell their story.",
    questions: [
      {
        answers: [
  "Arawaks and Caribs",
  "The Tainos",
  "The Lucayans",
  "The Maya"
],
correct: "Arawaks and Caribs",
explanation:
  "Barbados was inhabited by both Arawak and Carib peoples before European contact." the earliest inhabitants of Barbados, arriving from South America around 350-400 CE. They were peaceful farmers and fishermen."
      },
      {
        question: "What does the name 'Barbados' likely come from?",
        answers: ["Portuguese for 'bearded ones'", "Spanish for 'beautiful island'", "Arawak for 'sacred land'", "Dutch for 'coral reef'"],
        correct: "Portuguese for 'bearded ones'",
        explanation: "The name 'Barbados' comes from 'Los Barbados,' Portuguese for 'the bearded ones,' referring to the island's fig trees with hanging aerial roots."
      }
    ]
  },
  {
    id: 2,
    title: "Colonial Era",
    subtitle: "From Settlement to Sugar Empire",
    intro: "In 1627, English settlers arrived and established a colony that would become one of the wealthiest in the British Empire. The introduction of sugar cultivation transformed the island's landscape, economy, and social structure forever.",
    questions: [
      {
        question: "When did the English first settle in Barbados?",
        answers: ["1605", "1627", "1640", "1655"],
        correct: "1627",
        explanation: "English settlers first arrived in Barbados on February 17, 1627, establishing a colony that would last nearly 400 years."
      },
      {
        question: "What crop transformed Barbados into a wealthy colony?",
        answers: ["Cotton", "Tobacco", "Sugar", "Indigo"],
        correct: "Sugar",
        explanation: "Sugar cane, introduced in the 1640s, transformed Barbados into one of the wealthiest colonies in the British Empire, earning it the nickname 'The Jewel in the Crown.'"
      },
      {
        question: "What was the Barbados Slave Code of 1661?",
        answers: ["A law protecting enslaved people", "One of the first comprehensive slave laws", "A declaration of independence", "A trade agreement"],
        correct: "One of the first comprehensive slave laws",
        explanation: "The Barbados Slave Code of 1661 was one of the first comprehensive slave laws in the English colonies, denying enslaved Africans basic human rights and serving as a model for other colonies."
      }
    ]
  },
  {
    id: 3,
    title: "The Path to Freedom",
    subtitle: "Emancipation and Social Change",
    intro: "The 19th century brought seismic changes to Barbados. The abolition of slavery in 1834 marked a turning point, though true freedom remained a distant goal. This era saw the emergence of new social structures and the slow march toward self-governance.",
    questions: [
      {
        question: "When was slavery abolished in Barbados?",
        answers: ["1807", "1834", "1865", "1888"],
        correct: "1834",
        explanation: "Slavery was abolished throughout the British Empire, including Barbados, in 1834, though formerly enslaved people faced an apprenticeship period until 1838."
      },
      {
        question: "Who was Samuel Jackman Prescod?",
        answers: ["A plantation owner", "First non-white member of Parliament", "A British governor", "A sugar merchant"],
        correct: "First non-white member of Parliament",
        explanation: "Samuel Jackman Prescod was a pioneering journalist and politician who became the first non-white person elected to the Barbados Parliament in 1843."
      }
    ]
  },
  {
    id: 4,
    title: "Modern Barbados",
    subtitle: "Democracy and Development",
    intro: "The 20th century witnessed Barbados's transformation from a colonial outpost to a modern democratic nation. Universal adult suffrage, self-government, and economic diversification paved the way for true independence.",
    questions: [
      {
        question: "When did Barbados gain independence from Britain?",
        answers: ["1960", "1966", "1970", "1975"],
        correct: "1966",
        explanation: "Barbados gained full independence from Britain on November 30, 1966, with Errol Barrow as the first Prime Minister."
      },
      {
        question: "Who is considered the 'Father of Independence'?",
        answers: ["Grantley Adams", "Errol Barrow", "Tom Adams", "Owen Arthur"],
        correct: "Errol Barrow",
        explanation: "Errol Barrow is honored as the 'Father of Independence' for his leadership in guiding Barbados to independence in 1966."
      },
      {
        question: "When was universal adult suffrage introduced in Barbados?",
        answers: ["1920", "1943", "1950", "1966"],
        correct: "1950",
        explanation: "Universal adult suffrage was introduced in Barbados in 1950, allowing all adults to vote regardless of property ownership or gender."
      }
    ]
  },
  {
    id: 5,
    title: "Republic Barbados",
    subtitle: "A New Era of Sovereignty",
    intro: "On November 30, 2021, exactly 55 years after independence, Barbados took its final step in decolonization by becoming a republic. This historic transition removed Queen Elizabeth II as head of state and established a Barbadian as the nation's ceremonial leader.",
    questions: [
      {
        question: "When did Barbados become a republic?",
        answers: ["2018", "2020", "2021", "2022"],
        correct: "2021",
        explanation: "Barbados became a republic on November 30, 2021, the 55th anniversary of its independence, removing the British monarch as head of state."
      },
      {
        question: "Who became Barbados's first President?",
        answers: ["Mia Mottley", "Sandra Mason", "Freundel Stuart", "Owen Arthur"],
        correct: "Sandra Mason",
        explanation: "Dame Sandra Mason, who had served as Governor-General, became Barbados's first President when the nation transitioned to a republic."
      },
      {
        question: "What does Barbados's transition to a republic symbolize?",
        answers: ["Economic independence", "Complete decolonization", "Joining a new alliance", "Military strength"],
        correct: "Complete decolonization",
        explanation: "The transition to a republic represents the final step in Barbados's decolonization, asserting full sovereignty and self-determination while maintaining Commonwealth membership."
      }
    ]
  }
];

// ===============================
// STATE VARIABLES
// ===============================
let currentChapter = 0;
let currentQuestion = 0;
let score = 0;
let chapterScores = [0, 0, 0, 0, 0];
let answered = false;
let selectedAnswer = null;
let playerName = ""; // stores nickname from landing page

// ===============================
// APP CONTAINER
// ===============================
const app = document.querySelector("#app");

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
      
      <!-- Background music -->
      <audio id="bgMusic" loop>
        <source src="music.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  `;

  const startButton = document.getElementById("startBtn");
  const nicknameInput = document.getElementById("nicknameInput");
  const bgMusic = document.getElementById("bgMusic");

  startButton.addEventListener("click", () => {
    const name = nicknameInput.value.trim();
    playerName = name ? name : "Player"; // fallback if blank
    bgMusic.play(); // start music
    showChapterIntro(); // start quiz
  });
}

// ===============================
// SHOW CHAPTER INTRO
// ===============================
function showChapterIntro() {
  const chapter = chapters[currentChapter];
  
  app.innerHTML = `
    <div class="chapter-intro">
      <div class="chapter-marker">Chapter ${chapter.id}: ${chapter.title}</div>
      <h1 class="chapter-title">${chapter.title}</h1>
      <h2 class="chapter-subtitle">${chapter.subtitle}</h2>
      <div class="chapter-intro-text">
        ${chapter.intro}
      </div>
      <button id="startBtn" class="nav-btn">Begin Chapter ${chapter.id}</button>
      <div class="player-name">Player: ${playerName}</div>
    </div>
  `;
  
  document.getElementById("startBtn").addEventListener("click", startChapter);
}

// ===============================
// START CHAPTER QUIZ
// ===============================
function startChapter() {
  currentQuestion = 0;
  answered = false;
  selectedAnswer = null;
  showQuestion();
}

// ===============================
// SHOW QUESTION
// ===============================
function showQuestion() {
  answered = false;
  selectedAnswer = null;
  
  const chapter = chapters[currentChapter];
  const question = chapter.questions[currentQuestion];
  const totalQuestions = chapter.questions.length;
  const letters = ['A', 'B', 'C', 'D'];
  
  app.innerHTML = `
    <div class="quiz-screen">
      <div class="progress-header">
        <div class="chapter-info">Chapter ${chapter.id}: ${chapter.title}</div>
        <div class="question-counter">Question ${currentQuestion + 1}/${totalQuestions}</div>
      </div>
      
      <div class="question-text">${question.question}</div>
      
      <div class="answer-options">
        ${question.answers.map((answer, index) => `
          <button class="answer-btn" data-index="${index}" data-answer="${answer}">
            <span class="answer-letter">${letters[index]}</span>
            <span class="option-text">${answer}</span>
          </button>
        `).join('')}
      </div>
      
      <div class="nav-buttons">
        <button id="nextBtn" class="nav-btn" disabled>
          ${currentQuestion === totalQuestions - 1 ? 'Finish Chapter' : 'Next Question'}
        </button>
      </div>
      
      <div id="feedbackSection" style="display: none;"></div>
    </div>
  `;
  
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn.dataset.answer, btn));
  });
  
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}

// ===============================
// HANDLE ANSWER SELECTION
// ===============================
function handleAnswer(selected, button) {
  if (answered) return;
  
  answered = true;
  selectedAnswer = selected;
  const chapter = chapters[currentChapter];
  const question = chapter.questions[currentQuestion];
  
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.classList.add('disabled');
    btn.disabled = true;
  });
  
  document.querySelectorAll('.answer-btn').forEach(btn => {
    if (btn.dataset.answer === question.correct) {
      btn.classList.add('correct');
    } else if (btn.dataset.answer === selected) {
      btn.classList.add('wrong');
    }
  });
  
  if (selected === question.correct) {
    score++;
    chapterScores[currentChapter]++;
  }
  
  showFeedback(selected === question.correct, question.explanation);
  
  document.getElementById('nextBtn').disabled = false;
}

// ===============================
// SHOW FEEDBACK
// ===============================
function showFeedback(isCorrect, explanation) {
  const feedbackSection = document.getElementById('feedbackSection');
  feedbackSection.style.display = 'block';
  
  feedbackSection.innerHTML = `
    <div class="feedback-section">
      <div class="feedback-title">
        ${isCorrect ? 
          '<span class="feedback-correct">✓ Correct!</span>' : 
          '<span class="feedback-incorrect">✗ Incorrect</span>'
        }
      </div>
      <div class="feedback-text">
        ${explanation}
      </div>
    </div>
  `;
}

// ===============================
// NAVIGATION
// ===============================
function nextQuestion() {
  const chapter = chapters[currentChapter];
  
  if (currentQuestion < chapter.questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    if (currentChapter < chapters.length - 1) {
      currentChapter++;
      showChapterIntro();
    } else {
      showFinalResults();
    }
  }
}

// ===============================
// SHOW FINAL RESULTS
// ===============================
function showFinalResults() {
  const totalQuestions = chapters.reduce((total, chapter) => total + chapter.questions.length, 0);
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "";
  let emoji = "🇧🇧";
  
  if (percentage >= 90) {
    message = "Historian Laureate! Your knowledge of Barbados is exceptional!";
    emoji = "🏆📚";
  } else if (percentage >= 75) {
    message = "History Scholar! You have an excellent grasp of Barbadian history!";
    emoji = "⭐🎓";
  } else if (percentage >= 60) {
    message = "Well informed! You know the key moments in Barbados' journey!";
    emoji = "👍📖";
  } else if (percentage >= 40) {
    message = "Good start! You've begun your journey through Barbadian history!";
    emoji = "🌴📝";
  } else {
    message = "Thanks for exploring! Every journey through history begins with curiosity!";
    emoji = "🧭❤️";
  }
  
  app.innerHTML = `
    <div class="results-screen">
      <h1 class="results-title">Journey Complete! ${emoji}</h1>
      <p style="font-size: 1.3rem; margin-bottom: 30px;">${message}</p>
      
      <div class="final-score">${score}/${totalQuestions}</div>
      <div style="font-size: 2rem; margin-bottom: 40px; color: #ffc72c;">${percentage}%</div>
      
      <div class="score-breakdown">
        <h3 style="margin-bottom: 20px; color: #ffc72c;">Chapter Breakdown:</h3>
        ${chapters.map((chapter, index) => `
          <div class="chapter-score">
            <span>${chapter.title}</span>
            <span>${chapterScores[index]}/${chapter.questions.length}</span>
          </div>
        `).join('')}
      </div>
      
      <div style="margin-top: 40px;">
        <button id="restartBtn" class="nav-btn" style="background: #ffc72c; color: #00267f;">
          Restart Journey
        </button>
      </div>
      
      <p style="margin-top: 40px; font-style: italic; opacity: 0.9;">
        "Little England is no more. Now stands a proud republic."<br>
        - Barbados' journey from settlement to sovereignty
      </p>
    </div>
  `;
  
  document.getElementById('restartBtn').addEventListener('click', restartQuiz);
}

// ===============================
// RESTART QUIZ
// ===============================
function restartQuiz() {
  currentChapter = 0;
  currentQuestion = 0;
  score = 0;
  chapterScores = [0, 0, 0, 0, 0];
  answered = false;
  selectedAnswer = null;
  showLandingPage(); // go back to landing page on restart
}

// ===============================
// INITIALIZE QUIZ
// ===============================
showLandingPage(); // show landing page first

