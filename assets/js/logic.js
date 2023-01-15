const startButton = document.getElementById("start");
const nextButton = document.getElementById("next-btn");
const startScreen = document.getElementById("start-screen");
const questionContainerElement = document.getElementById("questions");
const questionElement = document.getElementById("question-title");
const answerButtonElement = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");

var score;
var currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startScreen.classList.add("hide");
  score = 0;
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  // Displays the question
  questionElement.innerText = question.question;

  // Displays the answers
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    // can add a class using below
    // button.classList.add("choices");

    // check if our answer is correct
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(event) {
  var selectedButton = event.target;
  const correct = selectedButton.dataset.correct;

  console.log(correct);

  answerCheck(selectedButton, correct);

  Array.from(answerButtonElement.children).forEach((button) => {
    answerCheck(button, button.dataset.correct);
  });

  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    questionContainerElement.classList.add("hide");
    endScreen.classList.remove("hide");

    finalScore.innerText = score;
  }
}

function answerCheck(element, correct) {
  feedback.classList.remove("hide");

  if (correct) {
    console.log("correct answer");
    feedback.innerText = "Correct Answer";
    document.body.appendChild(feedback);

    // add to score card
    score = score + 10;
    console.log(score);
  } else {
    // element.classList.add("wrong");
    console.log("Wrong Answer");
    feedback.innerText = "Wrong answer";

    // remove time from timer
  }

  
}

