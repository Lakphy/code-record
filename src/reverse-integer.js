/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    x = (x - (x % 10)) / 10;
  }
  return Math.abs(ans) > 2147483647 ? 0 : ans;
};
