/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  const n = arr.length;
  arr = arr.sort((a, b) => a - b);
  const dp = new Array(n).fill(1);
  let res = 1;
  for (let i = 1; i < n; i++) {
    let ans = 1;
    const target = arr[i];
    for (let j = 0; j < i; j++) {
      const factor1 = arr[j];
      for (let k = j; k < i; k++) {
        if (factor1 * arr[k] === target) {
          if (k === j) ans += dp[k] * dp[j];
          else ans += dp[k] * dp[j] * 2;
        }
      }
    }
    dp[i] = ans;
    res = res + ans;
  }
  // console.log(dp);
  return res % (1e9 + 7);
};
