/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const arr = new Array(Math.pow(10, n)).fill(null).map((item, index) => index);
  arr.shift();
  return arr;
};
