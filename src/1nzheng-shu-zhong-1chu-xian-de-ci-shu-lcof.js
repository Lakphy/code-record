/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  const len = String(n).length;
  if (len === 1) {
    return n >= 1 ? 1 : 0;
  }
  const radix = Math.pow(10, len - 1);
  const child = n % radix;
  const num = (n - child) / radix;
  if (num === 1) {
    return child + 1 + countDigitOne(child) + num * countDigitOne(radix - 1);
  } else if (num > 1) {
    return radix + countDigitOne(child) + num * countDigitOne(radix - 1);
  } else {
    return countDigitOne(child) + countDigitOne(radix - 1);
  }
};
