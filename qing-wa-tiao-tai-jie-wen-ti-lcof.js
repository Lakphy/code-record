/**
 * @param {number} n
 * @return {number}
 */

const arr = [1, 1, 2, 3];
var numWays = function (n) {
  arr[n] = arr[n] || (numWays(n - 1) + numWays(n - 2)) % 1000000007;
  return arr[n];
};
