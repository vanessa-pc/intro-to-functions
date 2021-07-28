/**
 * Given a list of numbers, return the total by adding all numbers in the list.
 * @param {Array} numbers - array of numbers
 * @returns {number} returns sum of all numbers in the list
 */
function sumList(numbers) {
  // set runningTotal to 0
  let runningTotal = 0;

  // for each number n in numbers
  for (let n of numbers) {
    // increment runningTotal by n
    runningTotal += n; // or runningTotal = runningTotal + n;
  }

  // return runningTotal
  return runningTotal;
}

// test cases
console.log("sumList([3, 10, 1]):", sumList([3, 10, 1]), "should be 14");
console.log("sumList([3, 10, 1, -4]):", sumList([3, 10, 1, -4]), "should be 10");
console.log("sumList([0, 0, 0, 1]):", sumList([0, 0, 0, 1]), "should be 1");
console.log("sumList([0, 0]):", sumList([0, 0]), "should be 0");
