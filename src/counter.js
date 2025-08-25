// src/counter.js

function charCount(text) {
    const counts = {};
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (counts[char]) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }
    return counts;
  }
  
  module.exports = charCount;
  