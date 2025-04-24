let timerDisplay = document.querySelector('.timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let lapsList = document.getElementById('laps');

let [hours, minutes, seconds] = [0, 0, 0];
let interval = null;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  timerDisplay.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

startBtn.onclick = () => {
  if (interval !== null) return;
  interval = setInterval(stopwatch, 1000);
};

pauseBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
};

resetBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = '';
};

lapBtn.onclick = () => {
  const lapTime = timerDisplay.textContent;
  const li = document.createElement('li');
  li.textContent = `Lap: ${lapTime}`;
  lapsList.appendChild(li);
};
