// ==============================================================================================
// SELECTORS
// ==============================================================================================
var timeElement = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var answersElement = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

// ==============================================================================================
// INITIAL STATES
// ==============================================================================================
var currentQuestion = 0;
var score = 0;
var timer = 60;
var intervalId;
var player = {
  initials: document.getElementById("initials").value,
  score: score,
};

// ==============================================================================================
// START QUIZ
// ==============================================================================================
function startQuiz() {
  startScreen.classList.add("hide");
  timeElement.innerHTML = timer;
  intervalId = setInterval(countdown, 1000);
  displayQuestion();
}

// ==============================================================================================
// START TIMER
// ==============================================================================================
function countdown() {
  timer--;
  timeElement.innerHTML = timer;
  if (timer === 0) {
    endQuiz();
  }
}

// ==============================================================================================
// DISPLAYS THE QUESTIONS
// ==============================================================================================
function displayQuestion() {
  var question = questions[currentQuestion].question;
  var answers = questions[currentQuestion].answers;

  questionsElement.classList.remove("hide");
  questionTitle.innerHTML = question;

  for (var i = 0; i < answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.innerHTML = answers[i];
    answerButton.setAttribute("value", answers[i]);
    answerButton.setAttribute("onclick", "checkAnswer(this)");
    answersElement.appendChild(answerButton);
  }
}
// ==============================================================================================
// CHECKS THE ANSWERS
// ==============================================================================================
function checkAnswer(answer) {
  if (answer.value === questions[currentQuestion].correctAnswer) {
    score++;
  } else {
    // ==============================================================================================
    // IF THE ANSWER IS INCORRECT, TAKE 10S OFF THE CLOCK
    // ==============================================================================================

    timer -= 10;
  }

  currentQuestion++;

  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    answersElement.innerHTML = "";
    displayQuestion();
  }
}
// ==============================================================================================
// ENDS THE QUIZ
// ==============================================================================================
function endQuiz() {
  clearInterval(intervalId);
  questionsElement.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.innerHTML = score;
}
// ==============================================================================================
// SAVES THE SCORE
// ==============================================================================================
function saveScore() {
  var player = {
    initials: document.getElementById("initials").value,
    score: score,
  };
  // ==============================================================================================
  // SAVES TO LOCAL STORAGE
  // ==============================================================================================
  localStorage.setItem("player", JSON.stringify(player));
  window.location.href = "/code-quiz/highscores.html";
}

// ==============================================================================================
// ATTACH EVENT LISTONER TO START THE QUIZ & SUBMIT INITIALS WITH SCORE
// ==============================================================================================
submit.addEventListener("click", saveScore);
startButton.addEventListener("click", startQuiz);
