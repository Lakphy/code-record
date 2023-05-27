/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const leastPath = new Array(m).fill(null).map((item) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) leastPath[i][j] = grid[0][0];
      else if (i === 0) leastPath[i][j] = leastPath[i][j - 1] + grid[i][j];
      else if (j === 0) leastPath[i][j] = leastPath[i - 1][j] + grid[i][j];
      else
        leastPath[i][j] =
          Math.min(leastPath[i - 1][j], leastPath[i][j - 1]) + grid[i][j];
    }
  }
  // console.log(leastPath);
  return leastPath[m - 1][n - 1];
};
