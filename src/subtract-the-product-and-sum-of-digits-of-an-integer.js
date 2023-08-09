/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let a = 1;
  let b = 0;
  while (1) {
    if (n === 0) break;
    const t = n % 10;
    a *= t;
    b += t;
    n = (n - t) / 10;
  }
  return a - b;
};
