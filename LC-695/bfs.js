/*****************************************************************************/
/**                        originally made by van4ello                       */
/**                  https://github.com/van4ello/leetCodeJS                  */
/*****************************************************************************/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// BFS (i,j)
// touchBorder
// grid[i][j] === 1
// [0,2]
// [-1, 2] - top
// [1,  2] - bottom
// [0, 1] - left
// [0, 3] - right
// const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var maxAreaOfIsland = function(grid) {
  const m = grid.length,
        n = grid[0].length;

  const countIslandArea = (x,y) => {
    const queue = [[x,y]]
    let area = 0;
    while (queue.length) {
      const [i, j] = queue.shift();
      if (i < 0 || i >= m || j < 0 || j >= n) continue;
      if (grid[i][j] !== 1) continue;
      grid[i][j] = 0;
      // for (const [di, dj] of directions) {
      area += 1;
      queue.push([i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]);
      // }
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