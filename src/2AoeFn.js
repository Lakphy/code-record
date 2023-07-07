/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const arrMap = Array.from(new Array(m), () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) arrMap[i][0] = 1;
  for (let i = 0; i < n; i++) arrMap[0][i] = 1;
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      arrMap[i][j] = arrMap[i - 1][j] + arrMap[i][j - 1];
  return arrMap[m - 1][n - 1];
};
