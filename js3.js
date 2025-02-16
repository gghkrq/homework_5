document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let interval;
    const display = document.getElementById('timeDisplay');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetTimerButton');

    startButton.addEventListener('click', function () {
      if (!interval) {
        interval = setInterval(function () {
          count++;
          display.textContent = count;
        }, 1000);
      }
    });

    stopButton.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
    });

    resetButton.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
      count = 0;
      display.textContent = count;
    });
  });