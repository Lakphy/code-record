/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  for (let i = 1; i < n; i++) {
    const cur = grid[i];
    const pre = grid[i - 1];
    for (let j = 0; j < n; j++) {
      const t = Math.min(...pre.filter((_, index) => index !== j));
      cur[j] = cur[j] + t;
    }
  }
  return Math.min(...grid[n - 1]);
};
