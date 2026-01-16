// ===============================
// VARIABLES
// ===============================
let currentChapter = 0;
let currentQuestion = 0;
let score = 0;
let chapterScores = [0, 0, 0, 0, 0];
let answered = false;
let selectedAnswer = null;
let playerName = ""; // stores nickname

// ===============================
// APP CONTAINER
// ===============================
const app = document.querySelector("#app");
const bgMusic = document.getElementById("bgMusic"); // background music

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

  const startButton = document.getElementById("startBtn");
  const nicknameInput = document.getElementById("nicknameInput");

  startButton.addEventListener("click", async () => {
    // Save nickname
    const name = nicknameInput.value.trim();
    playerName = name ? name : "Player";

    // Play music (volume set, unmuted)
    bgMusic.volume = 0.5;
    bgMusic.muted = false;
    try {
      await bgMusic.play(); // mobile-friendly
      console.log("Music started successfully");
    } catch (err) {
      console.log("Music failed to play:", err);
    }

    // Start the quiz
    showChapterIntro();
  });
}

// ===============================
// QUIZ DATA
// ===============================
const chapters = [
  {
    id: 1,
    title: "Indigenous Beginnings",
    subtitle: "The Island Before Colonization",
    intro: "Long before European sails appeared on the horizon, Barbados was home to indigenous peoples. The Amerindian inhabitants lived in harmony with the island's natural bounty, leaving behind petroglyphs and artifacts that tell their story.",
    questions: [
      { question: "Who were the earliest known inhabitants of Barbados?", answers: ["The Arawaks", "The Caribs", "The Tainos", "The Lucayans"], correct: "The Arawaks", explanation: "The Arawaks were among the earliest inhabitants of Barbados, arriving from South America around 350-400 CE. They were peaceful farmers and fishermen." },
      { question: "What does the name 'Barbados' likely come from?", answers: ["Portuguese for 'bearded ones'", "Spanish for 'beautiful island'", "Arawak for 'sacred land'", "Dutch for 'coral reef'"], correct: "Portuguese for 'bearded ones'", explanation: "The name 'Barbados' comes from 'Los Barbados,' Portuguese for 'the bearded ones,' referring to the island's fig trees with hanging aerial roots." }
    ]
  },
  {
    id: 2,
    title: "Colonial Era",
    subtitle: "From Settlement to Sugar Empire",
    intro: "In 1627, English settlers arrived and established a colony that would become one of the wealthiest in the British Empire. The introduction of sugar cultivation transformed the island's landscape, economy, and social structure forever.",
    questions: [
      { question: "When did the English first settle in Barbados?", answers: ["1605", "1627", "1640", "1655"], correct: "1627", explanation: "English settlers first arrived in Barbados on February 17, 1627, establishing a colony that would last nearly 400 years." },
      { question: "What crop transformed Barbados into a wealthy colony?", answers: ["Cotton", "Tobacco", "Sugar", "Indigo"], correct: "Sugar", explanation: "Sugar cane, introduced in the 1640s, transformed Barbados into one of the wealthiest colonies in the British Empire, earning it the nickname 'The Jewel in the Crown.'"},
      { question: "What was the Barbados Slave Code of 1661?", answers: ["A law protecting enslaved people", "One of the first comprehensive slave laws", "A declaration of independence", "A trade agreement"], correct: "One of the first comprehensive slave laws", explanation: "The Barbados Slave Code of 1661 was one of the first comprehensive slave laws in the English colonies, denying enslaved Africans basic human rights and serving as a model for other colonies." }
    ]
  },
  {
    id: 3,
    title: "The Path to Freedom",
    subtitle: "Emancipation and Social Change",
    intro: "The 19th century brought seismic changes to Barbados. The abolition of slavery in 1834 marked a turning point, though true freedom remained a distant goal. This era saw the emergence of new social structures and the slow march toward self-governance.",
    questions: [
      { question: "When was slavery abolished in Barbados?", answers: ["1807", "1834", "1865", "1888"], correct: "1834", explanation: "Slavery was abolished throughout the British Empire, including Barbados, in 1834, though formerly enslaved people faced an apprenticeship period until 1838." },
      { question: "Who was Samuel Jackman Prescod?", answers: ["A plantation owner", "First non-white member of Parliament", "A British governor", "A sugar merchant"], correct: "First non-white member of Parliament", explanation: "Samuel Jackman Prescod was a pioneering journalist and politician who became the first non-white person elected to the Barbados Parliament in 1843." }
    ]
  },
  {
    id: 4,
    title: "Modern Barbados",
    subtitle: "Democracy and Development",
    intro: "The 20th century witnessed Barbados's transformation from a colonial outpost to a modern democratic nation. Universal adult suffrage, self-government, and economic diversification paved the way for true independence.",
    questions: [
      { question: "When did Barbados gain independence from Britain?", answers: ["1960", "1966", "1970", "1975"], correct: "1966", explanation: "Barbados gained full independence from Britain on November 30, 1966, with Errol Barrow as the first Prime Minister." },
      { question: "Who is considered the 'Father of Independence'?", answers: ["Grantley Adams", "Errol Barrow", "Tom Adams", "Owen Arthur"], correct: "Errol Barrow", explanation: "Errol Barrow is honored as the 'Father of Independence' for his leadership in guiding Barbados to independence in 1966." },
      { question: "When was universal adult suffrage introduced in Barbados?", answers: ["1920", "1943", "1950", "1966"], correct: "1950", explanation: "Universal adult suffrage was introduced in Barbados in 1950, allowing all adults to vote regardless of property ownership or gender." }
    ]
  },
  {
    id: 5,
    title: "Republic Barbados",
    subtitle: "A New Era of Sovereignty",
    intro: "On November 30, 2021, exactly 55 years after independence, Barbados took its final step in decolonization by becoming a republic. This historic transition removed Queen Elizabeth II as head of state and established a Barbadian as the nation's ceremonial leader.",
    questions: [
      { question: "When did Barbados become a republic?", answers: ["2018", "2020", "2021", "2022"], correct: "2021", explanation: "Barbados became a republic on November 30, 2021, the 55th anniversary of its independence, removing the British monarch as head of state." },
      { question: "Who became Barbados's first President?", answers: ["Mia Mottley", "Sandra Mason", "Freundel Stuart", "Owen Arthur"], correct: "Sandra Mason", explanation: "Dame Sandra Mason, who had served as Governor-General, became Barbados's first President when the nation transitioned to a republic." },
      { question: "What does Barbados's transition to a republic symbolize?", answers: ["Economic independence", "Complete decolonization", "Joining a new alliance", "Military strength"], correct: "Complete decolonization", explanation: "The transition to a republic represents the final step in Barbados's decolonization, asserting full sovereignty and self-determination while maintaining Commonwealth membership." }
    ]
  }
];

// ===============================
// QUIZ FUNCTIONS
// ===============================

// showChapterIntro(), showQuestion(), handleAnswer(), showFeedback(), nextQuestion(), showFinalResults(), restartQuiz()
// — keep all your previous quiz functions exactly as they were
// No changes needed here. They now run **after the landing page**
// ===============================

// ===============================
// INITIALIZE QUIZ
// ===============================
showLandingPage(); // first thing user sees
