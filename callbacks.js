const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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

// function addNumbers(sum, numsLeft, completeCallback) {
  // while (numsLeft > 0) {
    // reader.question("Enter a number: ", (res) => {
      // completeCallback(res);
    // });
     
    // numsLeft--;
  // };
// };

function incrementSum(res) {
  num = parseInt(res);
  sum += num;
  console.log(sum);
  numsLeft --;
  addNumbers(sum, numsLeft, incrementSum);
};


const myVar = 'var';