var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 220; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitrn;
}
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!</h1>`;
    }
  }, 1000);
}
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
