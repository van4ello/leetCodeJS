/*****************************************************************************/
/**                        originally made by van4ello                      **/
/**                  https://github.com/van4ello/leetCodeJS                 **/
/*****************************************************************************/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const binarySearchForNegative = (row, n) => {
  let left = 0,
      right = n - 1,
      mid = 0;
  while (left <= right) {
    mid = left + Math.trunc((right - left)/2);
    if (row[mid] < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return row[mid] < 0 ? mid : mid + 1;
}
var countNegatives = function(grid) {
  const m = grid.length,
        n = grid[0].length;
  let negativeNumber = 0,
      negativeIndex = n;
  for (let i = 0; i < m; i++) {
    negativeIndex = binarySearchForNegative(grid[i], n);
    negativeNumber += n - negativeIndex;
  }
  return negativeNumber;
};