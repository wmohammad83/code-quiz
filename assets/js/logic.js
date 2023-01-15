// ==============================================================================================
// SELECTORS
// ==============================================================================================
var timeElement = document.querySelector('#time');
var startScreen = document.querySelector('#start-screen');
var startButton = document.querySelector('#start');
var questionsElement = document.querySelector('#questions');
var answersElement = document.querySelector('#answers');
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submit = document.querySelector('#submit');


// ==============================================================================================
// INITIAL STATES
// ==============================================================================================
var isWin = false;
var isLooser = false;
var timer;
var timerCount;
var questionIndex = 0;

// ==============================================================================================
// RESET
// ==============================================================================================
function reset(){
    questionIndex = 0;
}

// ==============================================================================================
// START QUIZ
// ==============================================================================================
// A start button that when clicked a timer starts and the first question appears.
function startQuiz(){
    timerCount = 5
    startTimer()
    startScreen.classList.add('hide')
    questionsElement.classList.remove('hide')
}


// ==============================================================================================
// START TIMER
// ==============================================================================================
function startTimer(){
    // SETS TIMER
    timer = setInterval(function() {
        timerCount--;
        timeElement.textContent = timerCount;
        if (timerCount >= 0){
            // TEST IF QUIZ IS COMPLETE IN TIME
            if (isWin && timerCount > 0){
                clearInterval(timer)
                // WINNER AND DISPLAYS THE INITIALS SCREEN FOR TRACKING SCORE
                // ===========================================================
                // CODE TO COMPLETE
            }
        }
        // TESTS IF TIME HAS RAN OUT
        if (timerCount === 0) {
            questionsElement.classList.add('hide')
            endScreen.classList.remove('hide')
            clearInterval(timer)
            // FUNCTION FOR LOOSER
            // ===========================================

        }
    }, 1000);
}





// ==============================================================================================
// Questions contain buttons for each answer.
// ==============================================================================================

// ==============================================================================================
// When answer is clicked, the next question appears
// ==============================================================================================


// ==============================================================================================
// If the answer clicked was incorrect then subtract time from the clock
// ==============================================================================================


// ==============================================================================================
// The quiz should end when all questions are answered or the timer reaches 0.
// ==============================================================================================


// ==============================================================================================
// When the game ends, it should display their score and give the user the ability to save their initials and their score
// ==============================================================================================


// ==============================================================================================
// Attach event listener to start button to call startGame function on click
// ==============================================================================================
startButton.addEventListener("click", startQuiz);

