let time = 10;
        let timerDisplay = document.getElementById("timer");
        let resetButton = document.getElementById("resetButton");
        let interval;

        function startTimer() {
            interval = setInterval(() => {
                if (time > 0) {
                    time--;
                    timerDisplay.textContent = time;
                } else {
                    clearInterval(interval);
                    timerDisplay.textContent = "Время вышло!";
                }
            }, 1000);
        }

        resetButton.addEventListener("click", function() {
            clearInterval(interval);
            time = 10;
            timerDisplay.textContent = time;
            startTimer();
        });

        startTimer();