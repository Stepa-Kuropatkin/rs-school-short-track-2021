/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const nextLetter = str[i + 1];
    if (letter === nextLetter) {
      count += 1;
    } else {
      newStr += (count > 1 ? count : '') + letter;
      count = 1;
    }
  }
  return newStr;
}

module.exports = encodeLine;
