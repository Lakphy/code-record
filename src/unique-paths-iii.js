/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let startX = 0;
  let startY = 0;
  let endX = m - 1;
  let endY = n - 1;
  let empty = 1;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        startX = i;
        startY = j;
      } else if (grid[i][j] === 2) {
        endX = i;
        endY = j;
      } else if (grid[i][j] === 0) {
        empty++;
      }
    }
  grid[startX][startY] = 0;
  grid[endX][endY] = 0;
  let ans = 0;
  const backtrack = (x, y, empty) => {
    // console.log(x, y, empty);
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === -1) return;
    if (x === endX && y === endY && empty === 0) {
      ans++;
      return;
    }
    if (empty <= 0) return;
    grid[x][y] = -1;
    backtrack(x + 1, y, empty - 1);
    backtrack(x - 1, y, empty - 1);
    backtrack(x, y + 1, empty - 1);
    backtrack(x, y - 1, empty - 1);
    grid[x][y] = 0;
  };
  backtrack(startX, startY, empty);
  return ans;
};
