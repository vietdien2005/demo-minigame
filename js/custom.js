var TIMECOUNT, t, count, question, answer;
cdreset();
function cddisplay() {
  var clock             = document.getElementById('clockdiv');
  var minutesSpan       = clock.querySelector('.minutes');
  var secondsSpan       = clock.querySelector('.seconds');
  document.getElementById('question').innerHTML = question;
  var minutes           = Math.floor(count / 60);
  var seconds           = count - (minutes * 60);
  minutesSpan.innerHTML = ('0' + minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + seconds).slice(-2);
};

function countdown() {
  cddisplay();
  if (count == 0) {
    document.getElementById('title').innerHTML = "Result";
    document.getElementById('question').innerHTML = answer;
    var audio = new Audio('../images/ringtone.mp3');
    audio.play();
  } else {
    count--;
    t = setTimeout("countdown()", 1000);
  }
};

function cdpause() {
  clearTimeout(t);
};

function cdreset() {
  document.getElementById('title').innerHTML = "What will be the output of the program?";
  var randnum = Math.floor((Math.random() * 10) + 1);
  console.log(randnum);
  question    = ask[0][randnum][0]["question"];
  answer      = ask[0][randnum][0]["answer"];
  time        = ask[0][randnum][0]["time"] * 60;
  cdpause();
  TIMECOUNT = time;
  count = time;
  cddisplay();
};

function result() {
  count = 0;
  cddisplay();
  document.getElementById('title').innerHTML = "Result";
  document.getElementById('question').innerHTML = answer;
}
