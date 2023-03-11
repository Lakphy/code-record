/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @description 从右上角开始 Binary Search Tree 搜索，比目标小就往左走，比目标大就往下走。左下角同理也可以实现。
 */
var findNumberIn2DArray = function (matrix, target) {
  const n = matrix.length;
  if (!n) return false;
  const m = matrix[0].length;
  let x = 0;
  let y = m - 1;
  while (x < n && y >= 0) {
    if (matrix[x][y] > target) {
      y = y - 1;
    } else if (matrix[x][y] === target) {
      return true;
    } else {
      x = x + 1;
    }
  }
  return false;
};
