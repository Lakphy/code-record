/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// TODO TLE
var lastRemaining = function (n, m) {
  if (n === 1) return 0;
  let arr = new Array(n).fill(null).map((item, index) => index);
  let p = 0;
  while (arr.length > 1) {
    // console.log(arr);
    p = p + m - 1;
    if (p >= arr.length) {
      p = p % arr.length;
    }
    arr.splice(p, 1);
  }
  return arr[0];
};
