let textChangeTimer;
let isPaused = false;
let currentIndex = 0;
const words = ["This", "is", "the", "program", "running", "."];
let userText = [];
let text;
let wmp = 220;

const textItem = document.getElementById("text-item");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const pauseButton = document.getElementById("pause-btn");
// const submitButton = document.getElementById("submit-btn");

// Functions
const getUserText = () => {
  text = document.getElementById("user-input").value;
  userText = text.split(" ");
};

const changeText = () => {
  textItem.textContent = userText[currentIndex];
  currentIndex = (currentIndex + 1) % userText.length;
};

const startTextChange = () => {
  getUserText();
  wmp = document.getElementById("wpm").value;
  if (!textChangeTimer) {
    textChangeTimer = setInterval(changeText, (60 / parseFloat(wmp)) * 1000);
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

const stopTextChange = () => {
  clearInterval(textChangeTimer);
  textItem.textContent = "Stopped";
  textChangeTimer = null;
  currentIndex = 0;
  isPaused = false;
};

// Event Listeners
startButton.addEventListener("click", startTextChange);
pauseButton.addEventListener("click", pauseTextChange);
stopButton.addEventListener("click", stopTextChange);
// submitButton.addEventListener("click", getUserText);
