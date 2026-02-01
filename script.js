let questions = [];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLimit = 30;

const startBtn = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const startScreen = document.querySelector(".start-screen");
const submitBtn = document.querySelector(".submit");
const nextBtn = document.querySelector(".next");
const endScreen = document.querySelector(".end-screen");

const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  const amount = document.querySelector("#num-questions").value;
  const category = document.querySelector("#category").value;
  const difficulty = document.querySelector("#difficulty").value;
  timeLimit = document.querySelector("#time").value;

  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      questions = data.results;
      startScreen.classList.add("hide");
      quiz.classList.remove("hide");
      showQuestion();
    });
}

function showQuestion() {
  clearInterval(timer);
  submitBtn.disabled = true;
  nextBtn.style.display = "none";

  const question = questions[currentQuestion];
  document.querySelector(".question").innerHTML = question.question;
  document.querySelector(".number").innerHTML =
    `Question ${currentQuestion + 1} / ${questions.length}`;

  let answers = [...question.incorrect_answers, question.correct_answer];
  answers.sort(() => Math.random() - 0.5);

  const wrapper = document.querySelector(".answer-wrapper");
  wrapper.innerHTML = "";

  answers.forEach(ans => {
    wrapper.innerHTML += `<div class="answer">${ans}</div>`;
  });

  document.querySelectorAll(".answer").forEach(answer => {
    answer.addEventListener("click", () => {
      document.querySelectorAll(".answer").forEach(a => a.classList.remove("selected"));
      answer.classList.add("selected");
      submitBtn.disabled = false;
    });
  });

  startTimer();
}

function startTimer() {
  let time = timeLimit;

  timer = setInterval(() => {
    progressBar.style.width = (time / timeLimit) * 100 + "%";
    progressText.innerText = time;

    if (time === 0) {
      checkAnswer();
    }
    time--;
  }, 1000);
}

submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
  clearInterval(timer);

  const correct = questions[currentQuestion].correct_answer;
  const selected = document.querySelector(".selected");

  document.querySelectorAll(".answer").forEach(ans => {
    if (ans.innerHTML === correct) {
      ans.classList.add("correct");
    }
  });

  if (selected) {
    if (selected.innerHTML === correct) {
      score++;
    } else {
      selected.classList.add("wrong");
    }
  }

  submitBtn.disabled = true;
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  quiz.classList.add("hide");
  endScreen.classList.remove("hide");

  document.querySelector(".final-score").innerText = score;
  document.querySelector(".total-score").innerText = "/" + questions.length;
}

document.querySelector(".restart").addEventListener("click", () => {
  location.reload();
});