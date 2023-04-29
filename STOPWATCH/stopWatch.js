function Watch() {
  let currentSeconds = 0;
  let startTime,
    endTime = null;
  let isRunning = false;

  this.start = function () {
    if (isRunning) {
      throw new Error("Last Timer hasn't finished yet!");
    } else {
      turnOnTimer();
    }
  };

  function turnOnTimer() {
    isRunning = true;
    startTime = new Date();
  }

  this.stop = function () {
    if (!isRunning) {
      throw new Error("Timer Hasn't started yet!");
    } else {
      turnOffTimer();
      currentSeconds += calculateTime({
        firstTime: startTime,
        lastTime: endTime,
      });
    }
  };

  function turnOffTimer() {
    isRunning = false;
    endTime = new Date();
  }

  function calculateTime({ firstTime, lastTime }) {
    const RESULT_IN_MILISECONDS = lastTime.getTime() - firstTime.getTime();
    const RESULT_IN_SECONDS = RESULT_IN_MILISECONDS / 1000;
    return RESULT_IN_SECONDS;
  }

  this.reset = function () {
    currentSeconds = 0;
    startTime = null;
    endTime = null;
    isRunning = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      if (isRunning) {
        throw new Error("Last Timer hasn't stopped yet!");
      } else {
        return currentSeconds + " Seconds";
      }
    },
  });
}

const myCornometer = new Watch();
