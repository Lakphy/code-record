/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let num = n;
  let i = 1;
  while (1) {
    const a = 9 * Math.pow(10, i - 1) * i;
    if (num > a) {
      num = num - a;
      i++;
    } else {
      break;
    }
  }
  num -= 1;
  const b = (num - (num % i)) / i;
  const c = num % i;
  const s = String(Math.pow(10, i - 1) + b);
  return s[c];
};
