/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  const m = matrix.length; // m行
  const n = matrix[0].length; //n列
  let ans = [];
  let circle = 0;
  const endLine = (Math.min(m, n) - (Math.min(m, n) % 2)) / 2;
  while (1) {
    if (circle === endLine) {
      if (m === n && m % 2) ans.push(matrix[endLine][endLine]);
      else if (m - 2 * endLine > 0 && n - 2 * endLine > 0) {
        if (m > n) {
          for (let i = circle; i < m - circle; i++) {
            ans.push(matrix[i][circle]);
          }
        } else {
          for (let i = circle; i < n - circle; i++) {
            ans.push(matrix[circle][i]);
          }
        }
      }
      break;
    }
    for (let i = circle; i < n - circle - 1; i++) {
      ans.push(matrix[circle][i]);
    }
    for (let i = circle; i < m - circle - 1; i++) {
      ans.push(matrix[i][n - circle - 1]);
    }
    for (let i = n - circle - 1; i > circle; i--) {
      ans.push(matrix[m - circle - 1][i]);
    }
    for (let i = m - circle - 1; i > circle; i--) {
      ans.push(matrix[i][circle]);
    }
    circle = circle + 1;
  }
  return ans;
};
