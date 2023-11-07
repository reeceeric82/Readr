let textChangeTimer;
let isPaused = false;
let currentIndex = 0;
const words = ["This", "is", "the", "program", "running", "."];

const textItem = document.getElementById("text-item");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const pauseButton = document.getElementById("pause-btn");

// write loop through array of text
const changeText = () => {
  textItem.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;

  if (currentIndex === 0) {
    stopTextChange("Completed");
  }
};

const startTextChange = () => {
  if (!textChangeTimer) {
    textChangeTimer = setInterval(changeText, 500);
  }
};

const pauseTextChange = () => {
  if (!isPaused) {
    clearInterval(textChangeTimer);
    isPaused = true;
  } else {
    startTextChange();
    isPaused = false;
  }
};

const stopTextChange = (textDisplayed = "Stopped") => {
  clearInterval(textChangeTimer);
  textItem.textContent = textDisplayed;
  textChangeTimer = null;
  currentIndex = 0;
  isPaused = false;
};

startButton.addEventListener("click", startTextChange);
pauseButton.addEventListener("click", pauseTextChange);
stopButton.addEventListener("click", stopTextChange);
