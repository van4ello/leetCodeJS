/*****************************************************************************/
/**                        originally made by van4ello                       */
/**                  https://github.com/van4ello/leetCodeJS                  */
/*****************************************************************************/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// DFS (i,j)
// touchBorder
// grid[i][j] === 1
// [0,2]
// [-1, 2] - top
// [1,  2] - bottom
// [0, 1] - left
// [0, 3] - right
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var maxAreaOfIsland = function(grid) {
  const m = grid.length,
        n = grid[0].length;
  const visited = new Array(m).fill().map(_ => new Array(n).fill(0));

  const countIslandArea = (i,j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return 0;
    if (visited[i][j] !== 0 || grid[i][j] !== 1) return 0;
    visited[i][j] = 1;

    let area = 1;
    for (const [di, dj] of directions) {
      area += countIslandArea(i + di, j + dj);
    }

    return area;
  }

  let maxArea = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, countIslandArea(i, j));
      }
    }
  }

  return maxArea;
};