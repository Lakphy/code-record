/**
 * @param {number} n
 * @return {boolean}
 * 巴什博奕，n%(m+1)!=0时，先手总是会赢的
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
  //   return (n & 3) !== 0;
};
