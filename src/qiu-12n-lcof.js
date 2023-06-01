/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  const a = ((1 + n) >> 1) + ((n + 1) & 1 && 0.5);
  const f = (num, t) => t && num + f(num, t - 1);
  return f(a, n);
};
