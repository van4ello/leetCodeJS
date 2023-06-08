/*****************************************************************************/
/**                        originally made by van4ello                      **/
/**                  https://github.com/van4ello/leetCodeJS                 **/
/*****************************************************************************/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = grid => grid.reduce((sum, row) => sum += row.filter(num => num < 0).length, 0);