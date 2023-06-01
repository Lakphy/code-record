/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const arr = num
    .toString()
    .split("")
    .map((item) => parseInt(item));
  const len = arr.length;
  const dp = (n) => {
    const nlen = len - n;
    if (nlen <= 1) return 1;
    const a = arr[n];
    const b = arr[n] * 10 + arr[n + 1];
    if (nlen === 2) {
      let ans = 1;
      if (b < 26 && a !== 0) ans++;
      return ans;
    }
    let ans = dp(n + 1);
    if (b < 26 && a !== 0) ans = ans + dp(n + 2);
    return ans;
  };
  return dp(0);
};
