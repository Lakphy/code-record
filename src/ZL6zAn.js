/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  const getSize = (i, j) => {
    if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    return (
      1 +
      getSize(i + 1, j) +
      getSize(i, j + 1) +
      getSize(i - 1, j) +
      getSize(i, j - 1)
    );
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) ans = Math.max(ans, getSize(i, j));
    }
  }
  return ans;
};
