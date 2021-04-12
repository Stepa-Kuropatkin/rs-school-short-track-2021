/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const nums = [];
  for (let i = 0; i < str.length; i++) {
    const a = str[i];
    nums.push(str.replace(a, ''));
  }
  return Math.max.apply(null, nums);
}

module.exports = deleteDigit;
