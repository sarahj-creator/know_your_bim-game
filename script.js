quiz[current].answers.forEach(answer => {
  const button = document.createElement("button");
  button.textContent = answer;

  button.onclick = () => {
    if (answered) return; // prevent changing answer
    answered = true;

    if (answer === quiz[current].correct) {
      score++;
      button.classList.add("correct"); // <- CSS handles green
    } else {
      button.classList.add("wrong");   // <- CSS handles red
    }

    // disable all buttons
    document.querySelectorAll("#answers button").forEach(btn => {
      btn.disabled = true;
    });

    document.getElementById("score").textContent =
      `Score: ${score} / ${quiz.length}`;
  };

  answersDiv.appendChild(button);
});
