/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const pathMap = new Array(m).fill(null).map((item) => new Array(n).fill(0));
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) pathMap[i][j] = 1;
      else pathMap[i][j] = pathMap[i - 1][j] + pathMap[i][j - 1];
    }
  return pathMap[m - 1][n - 1];
};
