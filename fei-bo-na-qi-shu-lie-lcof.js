/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let p = 1,
    q = 1,
    r = 2;
  for (let i = 3; i <= n; i++) {
    r = (p + q) % 1000000007;
    p = q;
    q = r;
  }
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 1;
    default:
      return q;
  }
};
