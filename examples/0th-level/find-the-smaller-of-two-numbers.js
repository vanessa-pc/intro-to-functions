/**
 * Given two numbers, return the smaller of the two
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns the smaller number of the two
 */
function min(a, b) {
  // if a is smaller than b
  if (a < b) {
    // return a
    return a;
    // else
  } else {
    // return b
    return b;
  }
}

// test cases
console.log("min(3, 5):", min(3, 5), "should be 3");
console.log("min(5, 3):", min(5, 3), "should be 3");
console.log("min(-5, 3):", min(-5, 3), "should be -5");
console.log("min(-5, -55):", min(-5, -55), "should be -55");
