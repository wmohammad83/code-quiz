// ==============================================================================================
// SELECTORS
// ==============================================================================================
var highScores = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear");

var getInitials = localStorage.getItem("initials");
var getScore = localStorage.getItem("score");
var lastPlayer = JSON.parse(localStorage.getItem("player"));

// ==============================================================================================
// LOAD STORAGE FUNCTION
// ==============================================================================================
function loadScores() {
  var li = document.createElement("li");
  li.textContent = lastPlayer.initials + " - " + lastPlayer.score;
  highScores.appendChild(li);
}

// ==============================================================================================
// CALLS THE FUNCTION
// ==============================================================================================
loadScores();

// ==============================================================================================
// EVENT LISTONER TO CLEAR LOCAL STORAGE AND RELODE PAGE
// ==============================================================================================
clearScores.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
