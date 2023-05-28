/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const pathMap = new Array(m).fill(null).map((item) => new Array(n).fill(0));
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) pathMap[i][j] = 0;
      else if (i === 0 && j === 0) pathMap[i][j] = 1;
      else if (i === 0) pathMap[i][j] = pathMap[i][j - 1];
      else if (j === 0) pathMap[i][j] = pathMap[i - 1][j];
      else pathMap[i][j] = pathMap[i - 1][j] + pathMap[i][j - 1];
    }
  return pathMap[m - 1][n - 1];
};
