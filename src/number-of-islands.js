/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dp = (x, y) => {
    if (grid[x] && grid[x][y] === "1") {
      grid[x][y] = "0";
      dp(x + 1, y);
      dp(x, y + 1);
      dp(x - 1, y);
      dp(x, y - 1);
    }
  };
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === "1") {
        ans++;
        dp(i, j);
      }
  return ans;
};
