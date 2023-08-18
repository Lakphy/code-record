/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function (slices) {
  const n = slices.length / 3;
  const map = new Array(slices.length)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  const arr = [0, ...slices];
  for (let i = 1; i < slices.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1) map[i][j] = Math.max(map[i - 1][j], arr[i]);
      else if (i < j * 2 - 1) map[i][j] = 0;
      else {
        map[i][j] = Math.max(map[i - 2][j - 1] + arr[i], map[i - 1][j]);
      }
    }
  }
  //   console.log(map);
  let ans = map[slices.length - 1][n];

  arr.splice(1, 1);
  for (let i = 1; i < slices.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1) map[i][j] = Math.max(map[i - 1][j], arr[i]);
      else if (i < j * 2 - 1) map[i][j] = 0;
      else {
        map[i][j] = Math.max(map[i - 2][j - 1] + arr[i], map[i - 1][j]);
      }
    }
  }
  //   console.log(map);
  ans = Math.max(ans, map[slices.length - 1][n]);
  return ans;
};
