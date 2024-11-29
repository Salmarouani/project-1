// Timer Elements
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const workDurationInput = document.getElementById('work-duration');
const breakDurationInput = document.getElementById('break-duration');

const minutesTens = document.getElementById('minutes-tens');
const minutesUnits = document.getElementById('minutes-units');
const secondsTens = document.getElementById('seconds-tens');
const secondsUnits = document.getElementById('seconds-units');

let timerInterval;
let isBreak = false;

// Functions
function startTimer() {
    let duration = (isBreak ? breakDurationInput.value : workDurationInput.value) * 60;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (duration <= 0) {
            clearInterval(timerInterval);
            isBreak = !isBreak;
            toggleBreakSuggestions();
            startTimer();
        } else {
            duration--;
            updateTimerDisplay(duration);
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay(workDurationInput.value * 60);
    isBreak = false;
}

function updateTimerDisplay(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    minutesTens.textContent = Math.floor(minutes / 10);
    minutesUnits.textContent = minutes % 10;
    secondsTens.textContent = Math.floor(seconds / 10);
    secondsUnits.textContent = seconds % 10;
}

function toggleBreakSuggestions() {
    const suggestions = [
        "Stretch your legs!",
        "Grab a healthy snack!",
        "Do some deep breathing!",
        "Read something fun!",
        "Listen to a favorite song!"
    ];

    const suggestionList = document.getElementById('suggestion-list');
    suggestionList.innerHTML = "";

    if (isBreak) {
        suggestions.forEach((suggestion) => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            suggestionList.appendChild(li);
        });
        document.getElementById('break-suggestions').style.display = "block";
    } else {
        document.getElementById('break-suggestions').style.display = "none";
    }
}

// Event Listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize Timer
updateTimerDisplay(workDurationInput.value * 60);
