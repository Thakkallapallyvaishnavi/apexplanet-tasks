// Quiz Logic
const questions = [
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "What is 5 x 5?", answer: "25" },
  { question: "What language is used for styling web pages?", answer: "CSS" }
];

let currentIndex = 0;

function showQuestion() {
  document.getElementById("question").textContent = questions[currentIndex].question;
  document.getElementById("answer").value = '';
  document.getElementById("feedback").textContent = '';
}

function submitAnswer() {
  const userAns = document.getElementById("answer").value.trim();
  const correct = questions[currentIndex].answer;

  if (userAns === "") {
    document.getElementById("feedback").textContent = "Please enter an answer!";
    return;
  }

  if (userAns.toLowerCase() === correct.toLowerCase()) {
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    document.getElementById("feedback").textContent = `❌ Wrong! The correct answer is ${correct}.`;
  }

  currentIndex = (currentIndex + 1) % questions.length;
  setTimeout(showQuestion, 2000);
}

// Joke Logic
async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  document.getElementById("joke").textContent = `${data.setup} — ${data.punchline}`;
}

// Load first question on page load
document.addEventListener("DOMContentLoaded", showQuestion);