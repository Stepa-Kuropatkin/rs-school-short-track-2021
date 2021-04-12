/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrix1 = matrix;
  for (let row = 0; row < matrix1.length; row++) {
    for (let col = 0; col < matrix1[row].length; col++) {
      if (!matrix1[0].includes(true)) {
        matrix1[row][col] = 0;
      } else {
        if (
          (matrix1[col + 1] && matrix1[col - 1]) !== undefined
          && (matrix1[row + 1] && matrix1[row - 1]) !== undefined
          && matrix1[row][col] === true
        ) {
          matrix1[row][col + 1] += 1;
          matrix1[row][col - 1] += 1;
          matrix1[row + 1][col] += 1;
          matrix1[row - 1][col] += 1;
        }

        if (matrix1[row][col] === false) {
          matrix1[row][col] = 1;
        }
      }
    }
  }

  for (let row = 0; row < matrix1.length; row++) {
    for (let col = 0; col < matrix1[row].length; col++) {
      if (matrix1[row][col] === true) {
        matrix1[row][col] = 1;
      }
    }
  }
  return matrix1;
}

module.exports = minesweeper;
