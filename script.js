const quiz = [
  // EASY
  {
    question: "What is the capital city of Barbados?",
    answers: ["Bridgetown", "Kingston", "Castries"],
    correct: "Bridgetown"
  },
  {
    question: "Which ocean surrounds Barbados?",
    answers: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
    correct: "Atlantic Ocean"
  },
  {
    question: "What is the official language of Barbados?",
    answers: ["English", "Spanish", "French"],
    correct: "English"
  },
  {
    question: "What is the national flower of Barbados?",
    answers: ["Pride of Barbados", "Hibiscus", "Orchid"],
    correct: "Pride of Barbados"
  },
  {
    question: "Barbados is part of which region?",
    answers: ["Caribbean", "South America", "Europe"],
    correct: "Caribbean"
  },

  // MEDIUM
  {
    question: "Who is known as the “Father of Independence” in Barbados?",
    answers: ["Errol Barrow", "Grantley Adams", "Rihanna"],
    correct: "Errol Barrow"
  },
  {
    question: "In what year did Barbados gain independence from Britain?",
    answers: ["1966", "1973", "1958"],
    correct: "1966"
  },
  {
    question: "What currency is used in Barbados?",
    answers: ["Barbadian Dollar", "US Dollar", "Eastern Caribbean Dollar"],
    correct: "Barbadian Dollar"
  },
  {
    question: "What is the name of Barbados’ national dish?",
    answers: ["Cou-cou and flying fish", "Rice and peas", "Callaloo"],
    correct: "Cou-cou and flying fish"
  },
  {
    question: "Which sport is most popular in Barbados?",
    answers: ["Cricket", "Football", "Basketball"],
    correct: "Cricket"
  },

  // HARD
  {
    question: "What is the highest point in Barbados called?",
    answers: ["Mount Hillaby", "Pico Duarte", "Blue Mountain Peak"],
    correct: "Mount Hillaby"
  },
  {
    question: "Which former British monarch appeared on Barbados’ coins before the country became a republic?",
    answers: ["Queen Elizabeth II", "King Charles III", "Queen Victoria"],
    correct: "Queen Elizabeth II"
  },
  {
    question: "What is the name of the limestone caves found in Barbados that are popular tourist attractions?",
    answers: ["Harrison’s Cave", "Crystal Cave", "Blue Grotto"],
    correct: "Harrison’s Cave"
  },
  {
    question: "Barbados became a republic in which year?",
    answers: ["2021", "2018", "2015"],
    correct: "2021"
  },
  {
    question: "What nickname is commonly used to refer to Barbados?",
    answers: ["Bim", "Jamrock", "The Rock"],
    correct: "Bim"
  },

  // TRUE / FALSE
  {
    question: "Barbados was the first Caribbean country to become a republic.",
    answers: ["True", "False"],
    correct: "False"
  },
  {
    question: "Rihanna is originally from Barbados.",
    answers: ["True", "False"],
    correct: "True"
  },
  {
    question: "Sugar production played a major role in Barbados’ history.",
    answers: ["True", "False"],
    correct: "True"
  },

  // BONUS
  {
    question: "What famous Barbadian singer is also a global fashion entrepreneur?",
    answers: ["Rihanna", "Adele", "Beyoncé"],
    correct: "Rihanna"
  },
  {
    question: "What color and symbol appear on the center of the Barbados flag?",
    answers: [
      "Gold with a black trident",
      "Green with a white star",
      "Red with a crown"
    ],
    correct: "Gold with a black trident"
  }
];

let current = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;
  document.getElementById("question").textContent = quiz[current].question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  quiz[current].answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;

    button.onclick = () => {
      if (answered) return;
      answered = true;

      if (answer === quiz[current].correct) {
        score++;
        button.style.backgroundColor = "#4CAF50"; // green
      } else {
        button.style.backgroundColor = "#f44336"; // red
      }

      // Disable all buttons
      document.querySelectorAll("#answers button").forEach(btn => {
        btn.disabled = true;
      });

      document.getElementById("score").textContent =
        `Score: ${score} / ${quiz.length}`;
    };

    answersDiv.appendChild(button);
  });
}

function nextQuestion() {
  if (!answered) return;

  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Game Over</h2>
      <p>Your final score: ${score} / ${quiz.length}</p>
    `;
  }
}

loadQuestion();

