class Clock {
  constructor() {
    this.currentDateInSeconds = Date.now()
    setInterval ( () => { 
      this._tick()
      this.printTime()
  }, 1000 )

  }

  printTime() {
    let currentTime = new Date(this.currentDateInSeconds);
    console.log(currentTime.toLocaleTimeString());
  }

  _tick() {
    this.currentDateInSeconds += 1000
  }
}

const clock = new Clock();