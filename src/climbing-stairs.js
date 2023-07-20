/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const arr = new Array(n).fill(1);
  arr[1] = 2;
  for (let i = 2; i < n; i++) arr[i] = arr[i - 1] + arr[i - 2];
  return arr[n - 1];
};
