const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function printInput () {
//   reader.question("Mockingbird!! ", (response) => {
//     console.log(response)
//   })
// }

// function addNumbers(sum, numsLeft, completeCallback) {
//   if (numsLeft > 0) {
//     reader.question("Enter a number: ", (res) => {
//       completeCallback(res, sum, numsLeft, addNumbers);
//     });
//   } else {
//     console.log(`final sum: ${sum}`)
//   };
// };

// function incrementSum(res, sum, numsLeft, arithmeticFuntion) {
//   num = parseInt(res);
//   sum += num;
//   console.log(sum);
//   numsLeft --;
//   arithmeticFuntion(sum, numsLeft, incrementSum);
// };