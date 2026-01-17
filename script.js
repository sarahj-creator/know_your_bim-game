// -------------------- DATA --------------------
const chapters = [
  {
    id: 1,
    title: "Indigenous Beginnings",
    subtitle: "The Island Before Colonization",
    intro: "Long before European sails appeared on the horizon, Barbados was home to indigenous peoples. The Amerindian inhabitants lived in harmony with the island's natural bounty, leaving behind petroglyphs and artifacts that tell their story.",
    questions: [
      {
        question: "Which indigenous groups lived in Barbados before European arrival?",
        answers: ["Arawaks and Caribs", "The Tainos", "The Lucayans", "The Maya"],
        correct: "Arawaks and Caribs",
        explanation: "The Arawaks were the earliest known inhabitants of Barbados, arriving from South America around 350-400 CE, followed later by the Caribs. Both groups contributed to the island’s early culture and history."
      }
    ]
  },
  {
    id: 2,
    title: "Sugar and Chains",
    subtitle: "Plantation Economy and Resistance",
    intro: "Sugar transformed Barbados into one of the richest colonies in the world, built on enslaved African labour. The plantation economy shaped the island’s society, culture, and resistance movements.",
    questions: [
      {
        question: "Which crop transformed Barbados into a wealthy colony?",
        answers: ["Sugarcane", "Cotton", "Tobacco", "Coffee"],
        correct: "Sugarcane",
        explanation: "Sugarcane became known as 'white gold' because it dominated the island’s economy and made Barbados one of the richest colonies during the 17th and 18th centuries."
      },
      {
        question: "Barbados' plantation economy relied primarily on:",
        answers: ["Indentured European labor", "Enslaved African labor", "Native Amerindian labor", "Free workers"],
        correct: "Enslaved African labor",
        explanation: "The wealth of Barbados was built on the labor of enslaved Africans, who were forced to work under brutal conditions on sugar plantations."
      }
    ]
  },
  {
    id: 3,
    title: "Rebellion and Resistance",
    subtitle: "Fighting for Freedom",
    intro: "Despite the harsh conditions, enslaved Africans resisted in many ways, from small acts of defiance to organized revolts that challenged colonial rule.",
    questions: [
      {
        question: "Who was a famous leader of a slave revolt in Barbados?",
        answers: ["Bussa", "Toussaint Louverture", "Nat Turner", "Vesey"],
        correct: "Bussa",
        explanation: "Bussa led a major slave revolt in Barbados in 1816, demonstrating the courage and resilience of the enslaved population."
      },
      {
        question: "What forms of resistance did enslaved people use?",
        answers: ["Revolts", "Work slowdowns", "Escape", "All of the above"],
        correct: "All of the above",
        explanation: "Enslaved Africans resisted through organized revolts, work slowdowns, running away, and other subtle acts of defiance."
      }
    ]
  },
  {
    id: 4,
    title: "Colonial Legacy",
    subtitle: "From Plantations to Independence",
    intro: "Barbados’ colonial history left a lasting impact on its society, economy, and culture. The path to independence involved education, political activism, and gradual social change.",
    questions: [
      {
        question: "When did Barbados gain independence from Britain?",
        answers: ["1966", "1776", "1901", "1980"],
        correct: "1966",
        explanation: "Barbados became independent on November 30, 1966, ending over 300 years of British colonial rule."
      },
      {
        question: "Which factor played a key role in Barbados’ transition to independence?",
        answers: ["Education", "Political activism", "Economic growth", "All of the above"],
        correct: "All of the above",
        explanation: "Education, political activism, and economic development were all crucial in the process that led to Barbados’ independence."
      }
    ]
  }
];

// -------------------- GAME LOGIC --------------------

// Original game logic remains unchanged
let currentChapter = 0;
let currentQuestion = 0;
let score = 0;

const app = document.getElementById("app");

function renderLanding() {
  app.innerHTML = `
    <h1>Barbados History Quiz</h1>
    <p>Test your knowledge of Barbados' history!</p>
    <button id="start">Start Quiz</button>
  `;
  document.getElementById("start").onclick = () => renderChapter();
}

function renderChapter() {
  const chapter = chapters[currentChapter];
  currentQuestion = 0;
  app.innerHTML = `
    <h2>${chapter.title}</h2>
    <h3>${chapter.subtitle}</h3>
    <p>${chapter.intro}</p>
    <button id="startChapter">Start Questions</button>
  `;
  document.getElementById("startChapter").onclick = () => renderQuestion();
}

function renderQuestion() {
  const chapter = chapters[currentChapter];
  const question = chapter.questions[currentQuestion];
  let answersHtml = question.answers.map(ans => `<div class="answer">${ans}</div>`).join("");
  app.innerHTML = `
    <h3>${question.question}</h3>
    ${answersHtml}
    <p id="explanation"></p>
    <button id="next" style="display:none;">Next</button>
  `;

  document.querySelectorAll(".answer").forEach(el => {
    el.onclick = () => handleAnswer(el, question.correct, question.explanation);
  });
}

function handleAnswer(el, correct, explanation) {
  document.querySelectorAll(".answer").forEach(a => a.onclick = null);
  if (el.innerText === correct) {
    el.classList.add("correct");
    score++;
  } else {
    el.classList.add("wrong");
    document.querySelectorAll(".answer").forEach(a => {
      if (a.innerText === correct) a.classList.add("correct");
    });
  }
  document.getElementById("explanation").innerText = explanation;
  document.getElementById("next").style.display = "inline-block";
  document.getElementById("next").onclick = nextQuestion;
}

function nextQuestion() {
  const chapter = chapters[currentChapter];
  currentQuestion++;
  if (currentQuestion < chapter.questions.length) {
    renderQuestion();
  } else {
    currentChapter++;
    if (currentChapter < chapters.length) {
      renderChapter();
    } else {
      renderResults();
    }
  }
}

function renderResults() {
  app.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score} / ${chapters.reduce((acc, c) => acc + c.questions.length, 0)}</p>
    <button id="restart">Restart Quiz</button>
  `;
  document.getElementById("restart").onclick = () => {
    currentChapter = 0;
    currentQuestion = 0;
    score = 0;
    renderLanding();
  }
}

// --- Start App ---
renderLanding();
