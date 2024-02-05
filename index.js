module.exports = function charCounts(string) {
  if (typeof string !== "string") {
    throw new Error("Invalid input: input should be a string");
  }

  const count = {};
  for (let char of string) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  return count;
};
