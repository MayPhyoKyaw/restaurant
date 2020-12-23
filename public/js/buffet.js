// function Order() {
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 00;
    }
  }, 1000);
}

function goOrderTimer() {
  var serveTime = 60 * 30 + 3600,
    display = document.getElementById("countdown");
  startTimer(serveTime, display);

  var bIcon = document.getElementById("before-countdown");
  bIcon.style.display = "none";
  display.style.display = "block";
}
