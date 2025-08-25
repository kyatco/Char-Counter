// tests/test.js
const charCount = require("../src/counter");

function runTests() {
  console.log("Running tests...");

  console.log(charCount("aab")); // { a: 2, b: 1 }
  console.log(charCount(""));    // {}
  console.log(charCount("a a")); // { a: 2, ' ': 1 }
}

runTests();
