window.onload = function () {
  var seconds = 00;
  var miliSec = 00;
  var minitues = 00;
  var appendMiliSec = document.getElementById("miliSec");
  var appendSeconds = document.getElementById("seconds");
  var appendMinitues = document.getElementById("minitues");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    miliSec = "00";
    seconds = "00";
    minitues = "00";
    appendMiliSec.innerHTML = miliSec;
    appendSeconds.innerHTML = seconds;
    appendMinitues.innerHTML = minitues;
  };

  function startTimer() {
    miliSec++;

    if (miliSec <= 9) {
      appendMiliSec.innerHTML = "0" + miliSec;
    }

    if (miliSec > 9) {
      appendMiliSec.innerHTML = miliSec;
    }

    if (miliSec > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      miliSec = 0;
      appendMiliSec.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      minitues++;
      appendMinitues.innerHTML = "0" + minitues;
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
    }
  }
};
