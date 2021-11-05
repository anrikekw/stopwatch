var startbutton = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var timetext = document.getElementById("timetext");
var intervalID = 0;
var time = 0;
var on = false;
function addtime() {
  time++;
  timetext.innerText = time;
}
function start() {
  if (intervalID == 0) intervalID = setInterval(addtime, 1000);
}
startbutton.addEventListener("click", start);
stop.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = 0;
});
reset.addEventListener("click", () => {
  time = 0;
  timetext.innerText = time;
  clearInterval(intervalID);
  intervalID = 0;
});
