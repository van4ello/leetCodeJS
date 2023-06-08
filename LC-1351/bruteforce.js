/*****************************************************************************/
/**                        originally made by van4ello                      **/
/**                  https://github.com/van4ello/leetCodeJS                 **/
/*****************************************************************************/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let negativeNumber = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      console.log(grid[i][j], grid[i][j] < 0)
      negativeNumber += Number(grid[i][j] < 0);
    }
  }
  return negativeNumber;
};