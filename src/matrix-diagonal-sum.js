/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let ans = 0;
  const n = mat.length;
  for (let i = 0; i < n; i++) ans += mat[i][i];
  for (let i = 0; i < n; i++) ans += mat[i][n - 1 - i];
  if (n % 2 === 1) ans -= mat[n >> 1][n >> 1];
  return ans;
};
