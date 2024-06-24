let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0


function homePlus1(){
    homeCount += 1
    homeScore.textContent = homeCount
}

function homePlus2(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function homePlus3(){
    homeCount += 3
    homeScore.textContent = homeCount
}
function homeMinus(){
    homeCount -= 1
    homeScore.textContent = homeCount
}

function guestPlus1(){
    guestCount +=1
    guestScore.textContent = guestCount
}

function guestPlus2(){
    guestCount +=2
    guestScore.textContent = guestCount
}

function guestPlus3(){
    guestCount +=3
    guestScore.textContent = guestCount
}
function guestMinus(){
    guestCount -= 1
    guestScore.textContent = guestCount
}
function homefoulPlus() {
    let homeFoulCount = document.getElementById("home-foul-count");
    homeFoulCount.value = parseInt(homeFoulCount.value) + 1;
}

function homefoulMinus() {
    let homeFoulCount = document.getElementById("home-foul-count");
    homeFoulCount.value = parseInt(homeFoulCount.value) - 1;
}

function guestfoulPlus() {
    let guestFoulCount = document.getElementById("guest-foul-count");
    guestFoulCount.value = parseInt(guestFoulCount.value) + 1;
}

function guestfoulMinus() {
    let guestFoulCount = document.getElementById("guest-foul-count");
    guestFoulCount.value = parseInt(guestFoulCount.value) - 1;
}

function hometimeoutPlus() {
    let homeTimeoutCount = document.getElementById("home-time-out");
    homeTimeoutCount.value = parseInt(homeTimeoutCount.value) + 1;
}

function hometimeoutMinus() {
    let homeTimeoutCount = document.getElementById("home-time-out");
    homeTimeoutCount.value = parseInt(homeTimeoutCount.value) - 1;
}

function guesttimeoutPlus() {
    let guestTimeoutCount = document.getElementById("guest-time-out");
    guestTimeoutCount.value = parseInt(guestTimeoutCount.value) + 1;
}

function guesttimeoutMinus() {
    let guestTimeoutCount = document.getElementById("guest-time-out");
    guestTimeoutCount.value = parseInt(guestTimeoutCount.value) - 1;
}


let timerInterval;
        let isRunning = false;
        let totalTime = 12 * 60; // 12 minutes in seconds
        let shotClockInterval;
        let shotClockTime = 24;

        function toggleTimer() {
            if (isRunning) {
                clearInterval(timerInterval);
                clearInterval(shotClockInterval);
                document.getElementById("play-pause").textContent = "Play";
            } else {
                updateTotalTimeFromInput();
                updateShotClockTimeFromInput();
                timerInterval = setInterval(updateTimer, 1000);
                shotClockInterval = setInterval(updateShotClock, 1000);
                document.getElementById("play-pause").textContent = "Pause";
            }
            isRunning = !isRunning;
        }

        function updateTimer() {
            if (totalTime <= 0) {
                clearInterval(timerInterval);
                document.getElementById("clock").value = "00:00";
                document.getElementById("play-pause").textContent = "Play";
                isRunning = false;
                return;
            }

            totalTime--;

            let minutes = Math.floor(totalTime / 60);
            let seconds = totalTime % 60;

            document.getElementById("clock").value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function updateShotClock() {
            if (shotClockTime <= 0) {
                clearInterval(shotClockInterval);
                document.getElementById("shotclock").value = "00";
                return;
            }

            shotClockTime--;

            document.getElementById("shotclock").value = `${String(shotClockTime).padStart(2, '0')}`;
        }

        function resetShotClock24() {
            clearInterval(shotClockInterval);
            shotClockTime = 24;
            document.getElementById("shotclock").value = "24";

            if (isRunning) {
                shotClockInterval = setInterval(updateShotClock, 1000);
            }
        }

        function resetShotClock14() {
            clearInterval(shotClockInterval);
            shotClockTime = 24;
            document.getElementById("shotclock").value = "14";

            if (isRunning) {
                shotClockInterval = setInterval(updateShotClock, 1000);
            }
        }

        function resettimer() {
            clearInterval(timerInterval);
            totalTime = 12 * 60; // reset to 12 minutes
            document.getElementById("clock").value = "12:00";

            if (isRunning) {
                timerInterval = setInterval(updateTimer, 1000);
            }
        }

        function updateTotalTimeFromInput() {
            let clockInput = document.getElementById("clock").value.split(':');
            if (clockInput.length == 2) {
                let minutes = parseInt(clockInput[0]);
                let seconds = parseInt(clockInput[1]);
                if (!isNaN(minutes) && !isNaN(seconds)) {
                    totalTime = minutes * 60 + seconds;
                }
            }
        }

        function updateShotClockTimeFromInput() {
            let shotClockInput = document.getElementById("shotclock").value;
            let seconds = parseInt(shotClockInput);
            if (!isNaN(seconds)) {
                shotClockTime = seconds;
            }
        }