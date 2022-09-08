const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const bubbleSort = function(arr) {
  let modified = true;
  while (modified) {
    modified = false;
    for (let i = 0; i < arr.length-1; i++) {
      // console.log(i);
      // console.log(arr);
      let response = null
      response = askIsGreater(arr[i], arr[i+1])
      while (response === null) {
        setTimeout(() => {
          console.log("waiting"); 
        },
          1000)
      }
      if (response) {
        first = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = first;
        modified = true;
      }
    }
  }
  return arr;
}

// const isGreater = function(num1, num2) {
//   if (num1 > num2) {
//     return true;
//   }
//   return false;
// }

const askIsGreater = function(num1, num2) {
  reader.question(`is ${num1} greater than ${num2}? y/n`, (res) => {
    console.log(`echo ${res}`)
    return res;
  }); 
}

// console.log("hi")
// if (res === "y") {
//   //console.log("true")
//   return true;
// } else {
//   //console.log("false")
//   return false;
// }
// bubbleSort([3, 2, -5, 1]);

console.log(`final answer: ${askIsGreater(3, 5)}`)