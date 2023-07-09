/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const arr = new Array(m).fill(null).map(() => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) arr[i][j] = grid[i][j];
      else if (i === 0) arr[i][j] = grid[i][j] + arr[i][j - 1];
      else if (j === 0) arr[i][j] = grid[i][j] + arr[i - 1][j];
      else arr[i][j] = grid[i][j] + Math.min(arr[i][j - 1], arr[i - 1][j]);
    }
  }
  return arr[m - 1][n - 1];
};
